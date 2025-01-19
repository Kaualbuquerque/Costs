import styled from "styled-components";

export const CardContainer = styled.div`
    padding: 1em;
    border: 1px solid #7a7a7a;
    border-radius: 5px;
    width: 25%;
    height: max-content;
    margin: .5%;
`

export const CardTitle = styled.h4`
    background-color: #222;
    color: #ffbb33;
    padding: .4em;
    margin-bottom: 1.3em;
    font-size: 1.3em;
`

export const CardText = styled.p`
    color: #7a7a7a;
    margin-bottom: 1em;

    span{
        font-weight: bold;
    }
`

export const CardCategory = styled(CardText) <{ $category?: "Infraestrutura" | "Desenvolvimento" | "Design" | "Planejamento" }>`
    display: flex;
    align-items: center;

    span {
        display: block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: ${props =>
        props.$category === "Infraestrutura" ? "#ffaebc" :
            props.$category === "Desenvolvimento" ? "#a0e7e5" :
                props.$category === "Design" ? "#b4f8c8" :
                    props.$category === "Planejamento" ? "#fbe7c6" :
                        "#cccccc"}; 
        margin-right: 5px;
    }
`;


export const CardActions = styled.div`
    margin-top: 1.2em;
    display: flex;
    align-items: center;

    a, button{
        text-decoration: none;
        border: 1px solid #222;
        background-color: #fff;
        color: #222;
        font-size: .9em;
        padding: .6em 1em;
        margin-right: 1em;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: .5s;

        &:hover{
            background-color: #222;
            color: #ffbb33;
        }
    }

    svg{
        margin-right: .5em;
    }
`
