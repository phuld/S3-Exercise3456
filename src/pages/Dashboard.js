import React, { useState } from 'react'
import { Layout } from 'antd'
import { Switch, Route, useHistory } from 'react-router-dom'
import 'antd/dist/antd.css';
import './Dashboard.scss';
import Sidebar from '../components/Sidebar/Sidebar';
import UserInfo from '../components/UserInfo/UserInfo';
import ContentUsers from '../containers/ContentUsers';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/userAction';
import ContentProducts from '../containers/ContentProducts';

const Dashboard = (props) => {
    const [collapsed, setCollapsed] = useState(false)
    const history = useHistory()
    const toggle = () => {
        setCollapsed(!collapsed)
        console.log(history);
    }

    const logoutUser = () => {
        props.onLogout()
        history.push('/login')
    }

    return (
        <Layout className="layout">
            <Sidebar
                collapsed={collapsed}
                toggle={toggle} />
            <Layout className="site-layout">
                <UserInfo
                    authData={props.authData}
                    onLogout={logoutUser} />
                <Switch>
                    <Route exact path="/dashboard/manage-users">
                        <ContentUsers/>
                    </Route>
                    <Route exact path="/dashboard/manage-products">
                        <ContentProducts/>
                    </Route>
                    <Route exact path="/dashboard/manage-orders">
                        <ContentProducts/>
                    </Route>
                </Switch>
            </Layout>
        </Layout>
    )
}

const mapStateToProps = state => {
    return {
        authData: state.user.authData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
