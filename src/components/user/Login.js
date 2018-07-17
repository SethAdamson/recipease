import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'

class LogReg extends Component {
    constructor() {
        super()
        this.state = {
            userID: 0,
            email: '',
            password: '',
            error: '',
            loggedIn: ''
        }
    }

    login() {
        const { email, password } = this.state
        this.setState({ loggedIn: 'You logged in successfully!', error: '' })
        if (email && password) {
            axios.post('/api/login', { email, password }).then(res => {
                console.log(res.data)
                if (res.data.length !== 0) {
                    this.setState({ loggedIn: 'You logged in successfully!', error: '' })
                    this.props.updateUser(res.data)
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }

    register() {
        const { email, password } = this.state
        this.setState({ loggedIn: 'You are now registered and have logged in successfully!', error: '' })
        if (email && password) {
            axios.post('/api/register', { email, password }).then(res => {
                if (res.data.length !== 0) {
                    console.log(res.data)
                    this.setState({ loggedIn: 'You are now registered and have logged in successfully!', error: '' })
                    this.props.updateUser(res.data)
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }
    render() {
        return (
            <div>
                <div>
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <button onClick={() => this.login()}>Login</button>
                    <button onClick={() => this.register()}>Register</button>
                    <h4>{this.state.error}</h4>
                    <h2>{this.state.loggedIn}</h2>
                </div>
            </div>
        );
    }
}

export default connect(null, {updateUser})(LogReg);