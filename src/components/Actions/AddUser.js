import React, { useState } from 'react'
import { Modal, Button, Card, Input } from 'antd'

const AddUser = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const toggleModal = () => {
        setModalVisible(!modalVisible)
    }

    const handleSubmit = () => {
        // if(!username || !email || !password) {
        // }
        const newUser = {
            id: new Date().getTime().toString(),
            username,
            email,
            password
        }
        props.onRegisterUser(newUser)
        toggleModal()
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <>
            <Button type="primary" onClick={toggleModal}>Tạo mới</Button>
            <Modal
                visible={modalVisible}
                centered
                onOk={handleSubmit}
                onCancel={toggleModal}
            >
                <Card title="Tạo user mới" bordered={false}>
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

export default AddUser
