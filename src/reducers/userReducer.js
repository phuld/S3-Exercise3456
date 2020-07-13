const initialState = {
    isLogin: false,
    users: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER':
            return {
                ...state,
                users:[
                    ...state.users,
                    action.userData
                ]
            }
        case 'LOGIN':
            return {
                ...state,
                isLogin: true
            }
        default:
            return state;
    }
}

export default reducer