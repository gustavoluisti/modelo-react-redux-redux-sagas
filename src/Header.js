import React from 'react'
import { connect } from 'react-redux';
import ActionCreators from './store/actionCreators'

import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const Header = props => {
    return(
        <Menu>
            <Menu.Item>Ultro Front </Menu.Item>
            <Menu.Item as={Link} to='/'>Home</Menu.Item>
            <Menu.Item as={Link} to='/login'>Login</Menu.Item>
        </Menu>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signin: (email, passwd) => ActionCreators.signinRequest(email, passwd)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)