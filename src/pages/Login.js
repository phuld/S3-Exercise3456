import React, { useState } from 'react'
import Form from '../components/Form/Form';
import { checkValidation } from '../utils/validator';
import { connect } from 'react-redux'
import { loginUser } from '../actions/userAction'
import { withRouter } from 'react-router-dom'

const Login = (props) => {
    const [initialLogin, setInitialLogin] = useState({
        formType: 'login',
        name: 'login',
        inputs: {
            username: {
                name: "username",
                type: 'text',
                value: '',
                placeholder: 'username',
                validation: {
                    required: true,
                    noSpecialCharacter: true
                },
                isValid: false,
                errorMessage: ''
            },
            password: {
                name: 'password',
                type: 'password',
                value: '',
                placeholder: 'password',
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 25
                },
                isValid: false,
                errorMessage: ''
            }
        },
        textQuestion: 'Not register ?',
        textLink: 'Create an account'
    })
    const handleChange = (e, inputfield) => {
        const updateForm = { ...initialLogin }
        const updatedInputs = updateForm.inputs;
        updatedInputs[inputfield] = {
            ...updatedInputs[inputfield],
            value: e.target.value
        }
        const validateInput = checkValidation(e.target.value, updatedInputs[inputfield].validation)
        updatedInputs[inputfield].isValid = validateInput.isValid;
        updatedInputs[inputfield].errorMessage = validateInput.message;
        setInitialLogin(updateForm)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const initialInputs = initialLogin.inputs
        let isValidForm = true
        for (const key in initialInputs) {
            const validateInput = checkValidation(initialInputs[key].value, initialInputs[key].validation)
            initialInputs[key].isValid = validateInput.isValid
            initialInputs[key].errorMessage = validateInput.message
            isValidForm = isValidForm && validateInput.isValid
        }
        if (!isValidForm) {
            setInitialLogin({
                ...initialLogin,
                inputs: initialInputs
            })
        } else {
            const userData = {
                username: initialLogin.inputs.username.value,
                password: initialLogin.inputs.password.value
            }
            await props.onLogin(userData);
            await props.isLogin ? props.history.push('/dashboard') : alert('Login fail')
        }
    }
    return (
        <Form
            formElements={initialLogin}
            changed={handleChange}
            handleSubmit={handleSubmit} />
    )
}

const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin
    }
}

const mapDispatchtoProps = dispatch => {
    return {
        onLogin: (userData) => dispatch(loginUser(userData))
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(withRouter(Login))
