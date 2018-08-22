import React, {Component} from 'react';
import {TextField} from '@material-ui/core';


class Login extends Component{
    state = {
        email: '',
        nick: '',
        pwd: ''
    }

    emailChange = (event) => {
        this.setState({ email: event.target.value})
    }
    nickChange = (event) => {
        this.setState({ nick: event.target.value})
    }
    pwdChange = (event) => {
        this.setState({ pwd: event.target.value})
    }
    render(){
        return (
            <div className="loginContainer">
                <form action="">
                    <TextField
                        name={'email'}
                        value={this.state.email}

                        placeholder={'邮箱'}
                        helperText={'输入邮箱哦~'}
                        label={'邮箱'}
                        onChange={this.emailChange}
                    />
                    <TextField
                        name={'nick'}
                        value={this.state.nick}
                        placeholder={'起个名字吧'}
                        label={'昵称'}
                        onChange={this.nickChange}
                    />
                    <TextField
                        name={'pwd'}
                        value={this.state.pwd}
                        placeholder={'密码'}
                        label={'密码'}
                        onChange={this.pwdChange}
                        type={'password'}
                    />

                </form>
            </div>
        )
    }
}

export default Login