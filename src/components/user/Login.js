import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { updateUser } from '../../ducks/reducer'

class Login extends Component {

    constructor(props) {
        super(props)
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
        if (email && password) {
            axios.post('/api/login', { email, password }).then(res => {
                console.log(res.data)
                if (res.data.length !== 0) {
                    // this.setState({ error: '' })
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
        if (email && password) {
            axios.post('/api/register', { email, password }).then(res => {
                if (res.data.length !== 0) {
                    console.log(res.data)
                    // this.setState({ error: res.data })
                    this.setState({ loggedIn: 'You are now registered and have logged in successfully!', error: '' })
                    this.props.updateUser(res.data)
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }
    logout() {
        axios.post('/api/logout').then(res => {
            this.props.updateUser(res.data)
        })
    }
    render() {
        if (this.props.user.userID) {
            return (
                <button onClick={() => this.logout()}>Log Out</button>
            )
        } else {
            return (
                <div>
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <button onClick={() => this.login()}>Login</button>
                    <button onClick={() => this.register()}>Register</button>
                </div>
            )
        }
    }
}
function mapStateToProps(state) {
    return {
        user: state.user,
    }
};

export default connect(mapStateToProps, { updateUser })(Login);