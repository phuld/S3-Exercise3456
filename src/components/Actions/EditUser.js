import React, { useState } from 'react'
import { Modal, Button, Card, Input } from 'antd'

const EditUser = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const toggleModal = () => {
        const { record } = props
        setModalVisible(!modalVisible)
        setUsername(record.username)
        setEmail(record.email)
        setPassword(record.password)
    }

    const handleSubmit = () => {
        props.onEditUser({
            id: props.record.id,
            username,
            email,
            password
        })
        toggleModal()
        setUsername('')
        setEmail('')
        setPassword('')
    }



    return (
        <>
            <Button type="ghost" onClick={toggleModal}>Edit</Button>
            <Modal
                visible={modalVisible}
                centered
                onOk={handleSubmit}
                onCancel={toggleModal}
            >
                <Card title="Chỉnh sửa User" bordered={false}>
                    <form>
                        <Input
                            name="username"
                            type="text"
                            placeholder="Username"
                            style={{ margin: '1rem 0' }}
                            size="large"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} />
                        <Input
                            name="email"
                            type="text"
                            placeholder="Email"
                            style={{ margin: '1rem 0' }}
                            size="large"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                        <Input
                            name="password"
                            type="password"
                            placeholder="Password"
                            style={{ margin: '1rem 0' }}
                            size="large"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                    </form>
                </Card>
            </Modal>
        </>
    )
}

export default EditUser
