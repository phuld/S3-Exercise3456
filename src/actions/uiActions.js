import * as actions from './actionTypes'

export const alertMessageSuccess = (message) => {
    return {
        type: actions.ALERT_MESSAGE_SUCCESS
    }
}