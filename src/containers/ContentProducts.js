import React from 'react'
import { Space, Button, Table, Layout } from 'antd'

const { Content } = Layout

const ContentProducts = (props) => {
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Count',
            dataIndex: 'count',
            key: 'count'
        },
        {
            title: 'Actions',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <Button>Edit</Button>
                    <Button>Delete</Button>
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
            <Button type="primary">Add user</Button>
            <Table
                columns={columns}
                dataSource={props.users} />
        </Content>
    )
}

export default ContentProducts
