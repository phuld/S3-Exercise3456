import React from 'react'
import { Layout, Menu } from 'antd'
import { withRouter } from 'react-router-dom'
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

const { Sider } = Layout

const menus = [
    {
        key: '1',
        name: 'Quản lý User',
        icon: <UserOutlined />,
        link: '/dashboard/manage-users'
    },
    {
        key: '2',
        name: 'Quản lí sản phẩm',
        icon: <VideoCameraOutlined />,
        link: '/dashboard/manage-products'
    },
    {
        key: '3',
        name: 'Quản lý đơn hàng',
        icon: <UploadOutlined />,
        link: '/dashboard/manage-orders'
    },
]

const Sidebar = (props) => {
    const handleChangeUrl = (url) => {
        props.history.replace(url)
    }
    return (
        <Sider trigger={null} collapsible collapsed={props.collapsed}>
            {props.collapsed ? <MenuUnfoldOutlined onClick={props.toggle} className="trigger" /> : <MenuFoldOutlined onClick={props.toggle} className="trigger" />}
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                {menus.map(item => (
                    <Menu.Item
                        key={item.key}
                        icon={item.icon}
                        className="menu-item"
                        onClick={(e) => handleChangeUrl(item.link, e.key)}>
                        {item.name}
                    </Menu.Item>
                ))}
            </Menu>
        </Sider>
    )
}

export default withRouter(Sidebar)
