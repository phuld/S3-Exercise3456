import React  from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        props.isLogin === true ? <Component {...props}/> : <Redirect to="/login"/>
    )} />
)

const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin
    }
}

export default connect(mapStateToProps, null)(PrivateRoute)
