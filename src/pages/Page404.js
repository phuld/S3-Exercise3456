import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

`
const H1 = styled.p`
    font-size: 7rem;
`
const Text = styled.p`
    font-size: 2.5rem;
`
const TextDescribe = styled.p`
    font-size: 1.5rem;
    padding: 0 10vh;
`

function Page404() {
    return (
        <Wrapper>
            <div>
                <H1>404</H1>
                <Text>Oop!!</Text>
                <TextDescribe>Sorry, we couldn't find this page. But don't worry, you can find
                plenty of other things on our <Link to="/">homepage</Link>
                </TextDescribe>
            </div>
        </Wrapper>
    )
}

export default Page404
