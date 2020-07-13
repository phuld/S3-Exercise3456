import React from 'react'
import { Wrapper, Card, Button, Text, SpanText, Input, ErrorMessage, InputField } from './styles'
import { Link } from 'react-router-dom'

const Form = (props) => {
    const { formElements } = props
    const arrayLogin = []
    for (const key in formElements.inputs) {
        arrayLogin.push(formElements.inputs[key])
    }

    return (
        <Wrapper>
            <Card>
                <form onSubmit={props.handleSubmit}>
                    {arrayLogin.map((item, index) => (
                        <InputField key={index}>
                            <Input
                                key={index}
                                type={item.type}
                                name={item.name}
                                placeholder={item.placeholder}
                                config={item.validation}
                                value={item.value}
                                onChange={(e) => props.changed(e, item.name)}
                            />
                            <ErrorMessage>{item.errorMessage}</ErrorMessage>
                        </InputField>
                    ))}
                    <Button type="submit">{formElements.name}</Button>
                    <Text>{formElements.textQuestion} <Link to={formElements.name === "login" ? '/register' : '/login'}><SpanText>{formElements.textLink}</SpanText></Link></Text>
                </form>
            </Card>
        </Wrapper>
    )
}

export default Form
