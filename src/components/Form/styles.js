import styled from 'styled-components'

export const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #65af65;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #8080809c;
`

export const Card = styled.div`
    border: 1px solid transparent;
    padding: 3rem;
    background-color: white;
    box-shadow: 1px 2px 3px 3px #0000002b;
    border-radius: 2px;
    width: 27%;
    text-align: center;
    @media(max-width: 575px): {
        width: 100%;
    }
`

export const InputField = styled.div`
    margin-bottom: 1rem;
    overflow: hidden;
`

export const Input = styled.input`
    padding: 1rem;
    background-color: #80808021;
    box-shadow: none;
    outline: none;
    border: none;
    font-size: 1rem;
    width: 100%;
    color: #695a5a;
    ::-webkit-input-placeholder {
        color: #968a8a61;
    }
`

export const Button = styled.button`
    background-color: #349e34;
    width: 100%;
    border: none;
    padding: 0.8rem;
    text-transform: uppercase;
    color: white;
    font-size: 1rem;
    outline: none;
`

export const Text = styled.p`
    font-size: 0.9rem;
    padding: 0.3rem 0;
`

export const SpanText = styled.span`
    color: #349e34;
    text-decoration: none;
`

export const ErrorMessage = styled.p`
    color: red;
    font-size: 0.8rem;
    margin: 0.5rem 0;
    text-align: initial;
`

