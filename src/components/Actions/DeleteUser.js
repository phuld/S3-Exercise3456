import React, { useState } from 'react'
import { Button, Modal } from 'antd'

const DeleteUser = (props) => {
    const [visible, setVisible] = useState(false)

    const showModal = () => {
        setVisible(true)
    }

    const handleOk = () => {
        props.onDeleteUser()
        setVisible(false)
    }

    const handleCancel = () => {
        setVisible(false)
    }

    return (
        <>
            <Button
                type="danger"
                onClick={showModal}>Delete</Button>
            <Modal
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
                title="Xóa người dùng"
            >
                <p>Bạn chắc chắn muốn xóa người dùng này ?</p>
            </Modal>
        </>
    )
}

export default DeleteUser
