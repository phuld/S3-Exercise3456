import React from 'react'
import { Layout, Space, Table } from 'antd'
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import AddUser from '../components/Actions/AddUser';
import { registerUser, deleteUser, editUser } from '../actions/userAction';
import DeleteUser from '../components/Actions/DeleteUser';
import EditUser from '../components/Actions/EditUser';

const { Content } = Layout

const ContentUsers = (props) => {
    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username'
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email'
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <EditUser record={record} onEditUser={props.onEditUser}/>
                    <DeleteUser onDeleteUser={(id)=>props.onDeleteUser(record.id)}/>
                </Space>
            )
        }
    ]

    return (
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}>
            <AddUser onRegisterUser={props.onRegisterUser}/>
            <Table
                columns={columns}
                dataSource={props.users} />
        </Content>
    )
}

const mapStateToProps = state => {
    return {
        users: state.user.users
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onRegisterUser: (userData) => dispatch(registerUser(userData)),
        onDeleteUser: (userId) => dispatch(deleteUser(userId)),
        onEditUser: (userData) => dispatch(editUser(userData))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContentUsers)
