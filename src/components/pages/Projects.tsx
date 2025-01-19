import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../layout/Project/ProjectCard";
import Loader from "../layout/loader";

import { ProjectContainer, TitleContainer } from "../styles/pages_styles/styled_projects";


function Projects() {

    const [projects, setProjects] = useState<any[]>([])
    const [removeLoader, setRemoveLoader] = useState(false)
    const [removeMessage, setRemoveMessage] = useState('')

    const location = useLocation();
    let msg = ''
    if (location.state) {
        msg = location.state.message
    }

    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProjects(data)
                    setRemoveLoader(true)
                })
                .catch((err) => console.log(err))
        }, 300);
    }, [])

    function removeProject(id: string) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(resp => resp.json())
            .then(() => {
                setProjects(projects.filter((project) => project.id !== id))
                setRemoveMessage("Projeto excluido com sucesso!")
            }).catch(err => console.log(err))
    }


    return (
        <ProjectContainer>
            <TitleContainer>
                <h1>Meus projetos</h1>
                <LinkButton text="Criar Projeto" to="/newproject" />
            </TitleContainer>

            {msg && (<Message msg={msg} type="success" />)}
            {removeMessage && (<Message msg={removeMessage} type="success" />)}

            <Container customClass="start">

                {projects.length > 0 && projects.map((project) =>
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        handleRemove={removeProject} />)}

                {!removeLoader && <Loader />}

                {removeLoader && projects.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )}
            </Container>
        </ProjectContainer>
    )
}

export default Projects