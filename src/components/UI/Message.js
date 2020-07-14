import React from 'react'
import { Alert } from 'antd'
import './Message.scss'

const Message = (props) => {
    return (
        <Alert
            message="Warning"
            type="warning"
            showIcon
            closable
            className="alert"
            />
    )
}

export default Message
