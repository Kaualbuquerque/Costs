import { useState } from "react";
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton";

interface FormProps {
    btnText?: string;
    handleSubmit?: any;
    projectData?: any
}

function ServiceForm({ btnText, handleSubmit, projectData }: FormProps) {

    const [service, setService] = useState({})

    const submit = (e: any) => {
        e.preventDefault()
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e: any) {
        setService({ ...service, [e.target.name]: e.target.value })
    }

    return (
            <form onSubmit={submit}>
                <Input type="text" text="Nome do serviço" name="name" placeholder="Insira o nome do serviço" handleOnChange={handleChange} />
                <Input type="number" text="Custo do serviço" name="cost" placeholder="Insira o valor total" handleOnChange={handleChange} />
                <Input type="text" text="Descrição do serviço" name="description" placeholder="Descreva o serviço" handleOnChange={handleChange} />
                <SubmitButton text={btnText} />
            </form>
    )
}

export default ServiceForm