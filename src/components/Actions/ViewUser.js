import React, { useState } from 'react'
import { Modal, Button, Card, Input } from 'antd'

const ViewUser = (props) => {
    const { record } = props
    const info = () => Modal.info({
        title: 'Information',
        content: (
            <form>
                <Input
                    name="username"
                    type="text"
                    placeholder="Username"
                    style={{ margin: '1rem 0' }}
                    size="large"
                    value={record.username} />
                <Input
                    name="email"
                    type="text"
                    placeholder="Email"
                    style={{ margin: '1rem 0' }}
                    size="large"
                    value={record.email} />
            </form>
        ),
        onOk() { },
    })
    return (
        <Button type="primary" onClick={info}>View</Button>
    )
}

export default ViewUser
