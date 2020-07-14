import * as actions from '../actions/actionTypes'

const initialState = {
    isLogin: false,
    users: []
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
            const isExist = state.users.filter(item => item.username === action.userData.username)
            return {
                ...state,
                isLogin: isExist.length > 0 ? true : false
            }
        default:
            return state;
    }
}

export default reducer