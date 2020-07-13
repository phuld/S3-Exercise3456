import React, { useState } from 'react'
import Form from '../components/Form/Form';
import { checkValidation } from '../utils/validator';
import { connect } from 'react-redux';
import { registerUser } from '../actions/userAction';
import { withRouter } from 'react-router-dom'

const Register = (props) => {
    const [initialRegister, setInitialRegister] = useState({
        formType: 'register',
        name: 'register',
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
            },
            confirmPassword: {
                name: 'confirmPassword',
                type: 'password',
                value: '',
                placeholder: 'confirm password',
                validation: {
                    required: true,
                    comparePassword: true
                },
                isValid: false,
                errorMessage: ''
            }
        },
        textQuestion: 'Have an account ?',
        textLink: 'Login here'
    })

    const handleChange = (e, inputfield) => {
        const updateForm = { ...initialRegister }
        const updatedInputs = updateForm.inputs;
        updatedInputs[inputfield] = {
            ...updatedInputs[inputfield],
            value: e.target.value
        }
        const validateInput = checkValidation(e.target.value, updatedInputs[inputfield].validation, inputfield === "confirmPassword" ? updatedInputs.password.value : null)
        updatedInputs[inputfield].isValid = validateInput.isValid;
        updatedInputs[inputfield].errorMessage = validateInput.message;
        setInitialRegister(updateForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const initialInputs = initialRegister.inputs
        let isValidForm = true
        for (const key in initialInputs) {
            const validateInput = checkValidation(initialInputs[key].value, initialInputs[key].validation, initialInputs[key].name === "confirmPassword" ? initialInputs.password.value : null)
            initialInputs[key].isValid = validateInput.isValid
            initialInputs[key].errorMessage = validateInput.message
            isValidForm = isValidForm && validateInput.isValid
        }
        if (!isValidForm) {
            setInitialRegister({
                ...initialRegister,
                inputs: initialInputs
            })
        } else {
            const userData = {}
            userData.username = initialRegister.inputs.username.value
            userData.password = initialRegister.inputs.password.value
            props.onRegisterUser(userData)
            props.history.push('/login')
        }
    }

    return (
        <Form
            formElements={initialRegister}
            changed={handleChange}
            handleSubmit={handleSubmit} />
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onRegisterUser: (data) => dispatch(registerUser(data)),
        // onSendMessage: () => dispatch()
    }
}

export default connect(null, mapDispatchToProps)(withRouter(Register))
