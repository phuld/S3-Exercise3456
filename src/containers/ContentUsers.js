import React, { useState } from 'react'
import { Layout, Space, Table, Input, Button } from 'antd'
import 'antd/dist/antd.css';
import { connect } from 'react-redux'
import { SearchOutlined } from '@ant-design/icons';
import AddUser from '../components/Actions/AddUser';
import { registerUser, deleteUser, editUser } from '../actions/userAction';
import DeleteUser from '../components/Actions/DeleteUser';
import EditUser from '../components/Actions/EditUser';

const { Content } = Layout

const ContentUsers = (props) => {
    const [searchText, setSearchText] = useState('')
    const [searchedColumn, setSearchedColumn] = useState('')
    let searchInput = ''
    const getColumnSeachProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        searchInput = node;
                    }}
                    value={searchText}
                    placeholder="Search data"
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                    onChange={e => {
                        setSearchText(e.target.value)
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}>
                        Search
                </Button>
                    <Button
                        size="small"
                        style={{ width: 90 }}
                        onClick={() => handleReset(clearFilters)}>
                        Reset
                </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: '#1890ff' }} />,
        onFilter: (value, record) =>
            record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()) : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => searchInput.select());
            }
        },
        // render: text =>
        //     searchedColumn === dataIndex ? (
        //         <Highlighter
        //             highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        //             searchWords={[this.state.searchText]}
        //             autoEscape
        //             textToHighlight={text ? text.toString() : ''}
        //         />
        //     ) : (
        //             text
        //         ),
    })

    const columns = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
            ...getColumnSeachProps('username')
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            ...getColumnSeachProps('email')
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <EditUser record={record} onEditUser={props.onEditUser} />
                    <DeleteUser onDeleteUser={(id) => props.onDeleteUser(record.id)} />
                </Space>
            )
        }
    ]

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm()
        setSearchText(selectedKeys[0])
        setSearchedColumn(dataIndex)
    }

    const handleReset = (clearFilters) => {
        clearFilters()
        setSearchText('')
    }

    return (
        <Content
            className="site-layout-background"
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
            }}>
            <AddUser onRegisterUser={props.onRegisterUser} />
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
