import styled from "styled-components"

export const Foot = styled.footer`
    background-color: #222;
    color: #fff;
    padding: 3em;
    text-align: center;
`

export const Social_list = styled.ul`
    display: flex;
    justify-content: center;
    list-style-type: none;
`

export const Social = styled.li`
    margin: 0 1em;

    &:hover{
        color: #ffbb33;
    }

    svg{
        font-size: 1.5em;
        cursor: pointer;
    }
`

export const Copy_right = styled.p`
    margin-top: 2em;

    span{
        font-weight: bold;
        color: #ffbb33;
    }
`