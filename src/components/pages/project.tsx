import style from "../styles/pages_styles/project.module.css"

import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { v4 as uuidv4 } from "uuid"

import Loader from "../layout/loader";
import Container from "../layout/Container";
import ProjectForm from "../layout/Project/ProjectForm";
import Message from "../layout/Message";
import ServiceForm from "../layout/Service/serviceForm";
import ServiceCard from "../layout/Service/serviceCard";

type ServiceType = {
    id: string;
    name: string;
    cost: any;
    description: string;

};

type ProjectType = {
    id: number;
    name: string;
    budget: any;
    category: {
        id: number;
        name: string;
    };
    cost: any;
    services: ServiceType[];
};

function Project() {

    const { id } = useParams()

    const [project, setProject] = useState<ProjectType | null>();
    const [services, setServices] = useState<any[]>([])
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState<string>();
    const [type, setType] = useState<string>();

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(resp => resp.json())
                .then(data => {
                    setProject(data)
                })
                .catch(err => console.log(err));
        }, 300)
    }, [id]);

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    function editPost(project: any) {
        // Validação do orçamento
        if (project.budget < project.cost) {
            console.log(`Budget: ${project.budget}, Cost: ${project.cost}`);
            setMessage('O orçamento não pode ser menor que o custo do projeto!');
            setType('error');
            return false;
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProject(data);
                setShowProjectForm(false);
                setMessage('Projeto atualizado!');
                setType('success');
            })
            .catch((err) => {
                console.log('Erro ao atualizar o projeto:', err);
                setMessage('Erro ao atualizar o projeto.');
                setType('error');
            });
    }


    function createService() {
        setMessage('')

        if (!project) {
            setMessage('Projeto não encontrado!');
            setType('error');
            return false;
        }

        const lastService = project.services[project.services.length - 1];
        lastService.id = uuidv4();

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(project?.cost) + parseFloat(lastServiceCost)


        // maximum value validation
        if (newCost > parseFloat(project?.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType("error")
            project?.services.pop()
            return false
        }

        // add service cost to project total cost
        project.cost = newCost

        // update project
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                'Contenty-Type': "application/json"
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false)
            })
            .catch((err) => console.log(err))
    }

    function removeService(id: string, cost: any) {
        if (!project) return;

        const serviceUpdated = project?.services.filter(
            (service) => service.id !== id
        )

        const projectUpdated = project

        projectUpdated.services = serviceUpdated
        projectUpdated.cost = parseFloat(projectUpdated?.cost) - parseFloat(cost)
        
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(projectUpdated)
        }).then((resp) => resp.json())
            .then((data) => {
                setProject(projectUpdated)
                setMessage("Serviço removido com sucesso!")
            })
            .catch((err) => (console.log(err)))
    }


    return (
        <>
            {project ? (
                <div className={style.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={style.details_container}>
                            <h1>{project.name}</h1>
                            <button className={style.btn} onClick={toggleProjectForm}>{!showProjectForm ? "Editar Projeto" : "Fechar"}</button>

                            {
                                !showProjectForm ? (
                                    <div className={style.project_info}>
                                        <p>
                                            <span>Categoria: </span> {project.category.name}
                                        </p>
                                        <p>
                                            <span>Orçamento:</span> R${project.budget}
                                        </p>
                                        <p>
                                            <span>Total utilizado:</span> R${project.cost}
                                        </p>
                                    </div >
                                ) :
                                    (
                                        <div className={style.project_info}>
                                            <ProjectForm handleSubmit={editPost} btnText="Concluir edição" projectData={project} />
                                        </div>
                                    )
                            }
                        </div>

                        <div className={style.service_form_container}>
                            <h2>Adicione um serviço:</h2>
                            <button className={style.btn} onClick={toggleServiceForm}>{!showProjectForm ? "Adicionar seviço" : "Fechar"}</button>

                            <div className={style.project_info}>
                                {showServiceForm &&
                                    <div>
                                        <ServiceForm handleSubmit={createService} btnText="Adicionar serviço" projectData={project} />
                                    </div>
                                }
                            </div>
                        </div>

                        <h2>Serviços</h2>
                        <Container customClass="start">
                            {project.services.length > 0 &&
                                project.services.map((service: ServiceType) => (
                                    <ServiceCard
                                        id={service.id}
                                        name={service.name}
                                        cost={service.cost}
                                        description={service.description}
                                        key={service.id}
                                        handleRemove={removeService}
                                    />
                                ))

                            }
                            {project.services.length === 0 && <p>Não há serviços cadastrados</p>}
                        </Container>
                    </Container >
                </div >
            ) : (
                <Loader />
            )
            }
        </>
    )
}

export default Project