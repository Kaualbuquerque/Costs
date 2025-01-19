import { useNavigate } from "react-router-dom";

import ProjectForm from "../layout/Project/ProjectForm"

/* New Project styled componente */
import { NpContainer } from "../styles/pages_styles/styled_newProject"

function NewProject() {

    const navigate = useNavigate();

    function createPost(project: any) {

        // Initizalize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                navigate('/projects', { state: { message: 'Projeto criado com sucesso!' } })
            }).catch((err) => console.log(err))
    }

    return (
        <NpContainer>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </NpContainer>
    )
}

export default NewProject