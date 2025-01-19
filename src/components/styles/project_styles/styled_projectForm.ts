import styled from "styled-components";

export const FormControl = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`

export const FC_label = styled.label`
    margin-bottom: .6em;
    font-weight: bold;
`

export const FC_input = styled.input`
    padding: .7em;
    border-radius: 0;
    border: none;

    &::placeholder{
        color: #7b7b7b;
    }
`

export const FC_select = styled.select`
    padding: .7em;
    border-radius: 0;
    border: none;
`

export const FC_btn = styled.button`
    background-color: #222;
    color: #fff;
    padding: .7em 1.2em;
    text-decoration: none;
    transition: .5s;
    cursor: pointer;
    border: none;

    &:hover{
        color: #ffbb33;
    }
`