import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import styled from 'styled-components';

const Parent = styled.div`
position: fixed;
margin: 0 auto;
top: 0;
left: 0;
right: 0;
height: ${props => props.type};
width: 40vw;
z-index: 100;
background: white;
transition: .5s;
overflow: hidden;
`

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            error: '',
            loggedIn: '',
            register: false
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
                    this.props.updateUser(res.data);
                    this.props.toggleFn();
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
                    this.props.updateUser(res.data);
                    this.props.toggleFn();
                }
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })

        }
    }
    logout() {
        axios.post('/api/logout').then(res => {
            this.props.updateUser(res.data)
            this.props.toggleFn();
        })
    }
    toggleReg() {
        this.setState({ register: !this.state.register });
    }
    render() {
        let { loginToggle } = this.props;
        if (this.state.register === false) {
            return (
                <Parent type={loginToggle ? '30vh' : '0'}>
                    {/* <button onClick={() => this.logout()}>Log Out</button> */}
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <br />
                    <button onClick={() => this.login()}>Login</button>
                    {/* <button onClick={() => this.register()}>Register</button> */}
                    <h4>{this.state.error}</h4>
                    <h2>{this.state.loggedIn}</h2>
                    <h6>Not a member?</h6>
                    <button onClick={() => this.toggleReg()}>Register</button>
                </Parent>
            );
        } else {
            return (
                <Parent>
                    <h3>Username</h3>
                    <input onChange={e => this.setState({ username: e.target.value })} />
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <br />
                    <button onClick={() => this.register()}>Register</button>
                    <h6>Already a member?</h6>
                    <button onClick={() => this.toggleReg()}>Login</button>
                </Parent>
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