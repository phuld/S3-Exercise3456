import * as actions from '../actions/actionTypes'

const initialState = {
    isLogin: false,
    users: [],
    authData: {}
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.REGISTER_USER:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.userData
                ]
            }
        case actions.LOGIN_USER:
            const auth = state.users.filter(item=> item.username === action.userData.username)[0]
            return {
                ...state,
                isLogin: true,
                authData: auth
            }
        case actions.LOGOUT_USER:
            return {
                ...state,
                isLogin: false,
                authData: {}
            }
        case actions.DELETE_USER:
            const updateDel = state.users.filter(item => item.id !== action.userId)
            return {
                ...state,
                users: updateDel
            }
        case actions.EDIT_USER:
            const updateEditUsers = state.users.map(item => item.id === action.userData.id ? action.userData : item)
            return {
                ...state,
                users: updateEditUsers
            }
        default:
            return state;
    }
}

export default reducer