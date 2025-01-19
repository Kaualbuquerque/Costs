import { BsFillTrashFill } from "react-icons/bs"
import { CardContainer, CardTitle, CardText, CardActions } from "../../styles/project_styles/styled_projectCard"

interface serviceProps {
    id: string,
    name: string,
    cost: number,
    description: string,
    handleRemove: any,
}

function ServiceCard({ id, name, cost, description, handleRemove }: serviceProps) {

    const remove = (e: any) => {
        e.preventDefault()
        console.log(cost)
        handleRemove(id, cost)
    }

    return (
        <CardContainer>
            <CardTitle>{name}</CardTitle>
            <CardText>Custo Total: <span>{cost}</span></CardText>
            <CardText>{description}</CardText>

            <CardActions>
                <button onClick={remove}>
                    <BsFillTrashFill></BsFillTrashFill> Excluir
                </button>
            </CardActions>
        </CardContainer>
    )
}

export default ServiceCard