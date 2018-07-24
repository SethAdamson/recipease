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
width: 35vw;
z-index: 100;
background: white;
transition: .5s;
overflow: hidden;
text-align: center;
border-radius: 10%;
font-family: 'Montserrat', sans-serif;
font-size: 18px;
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
                    this.setState({ loggedIn: 'You logged in successfully!', error: '' });
                    this.props.updateUser(res.data);
                    this.props.toggleFn();
                } else if (res.data === 'Invalid Password') {
                    this.setState({ error: 'Invalid Password' })
                } else if (res.data === 'User does not exist') {
                    this.setState({ error: 'User does not exist' })
                } else if (res.data.length === 0) {
                    this.setState({ error: 'Please fill in both fields' })
                }
            })
        }
    }
    register() {
        const { username, email, password } = this.state
        if (username && email && password) {
            axios.post('/api/register', { username, email, password }).then(res => {
                console.log(res.data)
                if (res.data.length === 0) {
                    this.setState({ error: 'Please fill in all fields' })
                } else if (res.data === 'email taken. Try another.') {
                    this.setState({ error: 'Email taken. Please try another.' })
                }
                else {
                    this.setState({ loggedIn: 'You are now registered and have logged in successfully!', error: '' })
                    this.props.updateUser(res.data);
                    console.log(this.props.user)
                    this.props.toggleFn();
                }
            }
            )
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
        console.log(this.props.loginToggle)
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
                    <br />
                    <button onClick={() => this.login()}>Login</button>
                    {/* <button onClick={() => this.register()}>Register</button> */}
                    <h4>{this.state.error}</h4>
                    <h2>{this.state.loggedIn}</h2>
                    <h6 onClick={() => this.toggleReg()}>Not a member?</h6>
                </Parent>
            );
        } else {
            return (
                <Parent type={loginToggle ? '40vh' : '0'}>
                    <h3>Username</h3>
                    <input onChange={e => this.setState({ username: e.target.value })} />
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <br />
                    <br />
                    <button onClick={() => this.register()}>Register</button>
                    <h4>{this.state.error}</h4>
                    <h2>{this.state.loggedIn}</h2>
                    <h6 onClick={() => this.toggleReg()}>Already a member?</h6>
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