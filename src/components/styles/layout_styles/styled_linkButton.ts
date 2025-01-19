import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Btn = styled(Link)`
    background-color: #222;
    color: #fff;
    padding: .5em 1em;
    text-decoration: none;
    transition: .5s;
    border-radius: 5px;
    cursor: pointer;
    max-height: 40px;

    &:hover{
        color: #ffbb33;
    }
`