import React from 'react'
import { Layout, Avatar } from 'antd'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import './UserInfo.scss'

const { Header } = Layout

const UserInfo = (props) => {
    return (
        <Header className="header">
            <div>
                <Avatar icon={<UserOutlined />} className="avatar"/>
                <span>{props.authData.username}</span>
            </div>
            <LogoutOutlined className="logoutIcon" onClick={props.onLogout}/>
        </Header>
    )
}

export default UserInfo
