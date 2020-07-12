import React from 'react'
import { Input, Wrapper } from './styles'

function Form() {
    return (
        <Wrapper>
            <form>
                <Input type="text" value="" placeholder="username" />
                <Input type="password" value="" placeholder="password" />
                <button>login</button>
                <p>Not registered? <span>Create an account</span></p>
            </form>
        </Wrapper>
    )
}

export default Form
