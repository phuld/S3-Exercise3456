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

export const logoutUser = () => {
    return {
        type: actions.LOGOUT_USER
    }
}

export const deleteUser = (userId) => {
    return {
        type: actions.DELETE_USER,
        userId
    }
}

export const editUser = (userData) => {
    return {
        type: actions.EDIT_USER,
        userData
    }
}
