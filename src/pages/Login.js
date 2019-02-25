import React, { Component } from 'react'
import ActionCreators from '../store/actionCreators'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import './Login.css'


import Logo from '../assets/img/logo.svg'

class Login extends Component{
    state = {
        form: {
            email: '',
            passwd: ''
        }
    }
    handleChange = fieldname => event => {
        const form = {
            ...this.state.form
        }
        form[fieldname] = event.target.value
        this.setState({ form })
    }
    login = () => {
        const { email, passwd } = this.state.form
        this.props.login(email, passwd)
    }
    render(){
        if(this.props.auth.isAuth){
            if(this.props.auth.user.role === 'admin'){
                return <Redirect to='/admin' />
            }
            return <Redirect to='/restrito' />
        }
        
        return(
            <div className="background">
                <div className="panel-login">
                    <div class="panel-login-header">
                        <h1>Login</h1>
                    </div>  
                    <Form>
                        <Form.Field>
                            <label>E-mail</label>
                            <input type='text' id ='email' value={this.state.form.email} onChange={this.handleChange('email')}></input>
                        </Form.Field>
                        <Form.Field>
                            <label>Senha</label>
                            <input type='password' id ='password' value={this.state.form.passwd} onChange={this.handleChange('passwd')}></input>
                        </Form.Field>
                        
                        <Button onClick={this.login}>Logar</Button>
                        {this.props.auth.isAuth && this.props.auth.error ? (<p>Erro ao logar </p>) : ("")}
                    </Form>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (email, passwd) => dispatch(ActionCreators.signinRequest(email, passwd))
        // login: (email, passwd) => dispatch(ActionCreators.signinRequest(email, passwd))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)