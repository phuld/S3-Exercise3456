import * as actions from './actionTypes'

export const registerUser = (userData) => {
    return {
        type: actions.REGISTER_USER,
        userData
    }
}

export const loginUser = (userData) => {
    return {
        type: actions.LOGIN_USER,
        userData
    }
}