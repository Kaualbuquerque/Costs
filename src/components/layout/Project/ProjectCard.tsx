import { Link } from "react-router-dom";

import { CardContainer, CardTitle, CardText, CardCategory, CardActions } from "../../styles/project_styles/styled_projectCard";

import { BsPencil, BsFillTrashFill } from "react-icons/bs";

interface CardProps {
    id?: string;
    name?: any;
    budget?: string | number;
    category?: any;
    handleRemove?: any;
}

function ProjectCard({ id, name, budget, category, handleRemove }: CardProps) {

    const remove = (e: any) => {
        e.preventDefault()
        handleRemove(id)
    }

    return (
        <CardContainer>
            <CardTitle>{name}</CardTitle>
            <CardText>
                <span>Orçamento:</span> R${budget}
            </CardText>
            <CardCategory $category={category}>
                <span></span> {category}
            </CardCategory>
            <CardActions>
                <Link to={`/project/${id}`}> <BsPencil /> Editar </Link>
                <button onClick={remove}> <BsFillTrashFill /> Excluir </button>
            </CardActions>
        </CardContainer>
    )
}

export default ProjectCard