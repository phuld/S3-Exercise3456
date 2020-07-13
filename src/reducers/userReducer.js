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
                users:[
                    ...state.users,
                    action.userData
                ]
            }
        case actions.LOGIN_USER:
            return {
                ...state,
                isLogin: true
            }
        default:
            return state;
    }
}

export default reducer