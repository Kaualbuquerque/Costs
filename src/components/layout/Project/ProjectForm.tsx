import { useEffect, useState } from "react";

import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"

interface FormProps {
    btnText?: string;
    handleSubmit?: any;
    projectData?: any
}

function ProjectForm({ btnText, handleSubmit, projectData }: FormProps) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((resp) => resp.json())
            .then((data) => setCategories(data))
            .catch((err) => console.log(err))
    }, [])

    function handleChange(e: any) {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    function handleCategory(e: any) {
        setProject({
            ...project, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text
            }
        })
    }

    const submit = (e: any) => {
        e.preventDefault()
        handleSubmit(project)
    }



    return (
        <form onSubmit={submit}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange} 
                value={project.name ? project.name : ''}/>

            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento do projeto"
                handleOnChange={handleChange} 
                value={project.budget ? project.budget : ''}/>

            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange={handleCategory}
                value={project.category ? project.category.id : ''} />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm