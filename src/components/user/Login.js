import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import styled from 'styled-components';

const Parent = styled.div`
margin-left: -1.5vw;

h3 {
    padding-top: 1.8vh;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 11px;
    letter-spacing: 1.5px;
}

input {
    outline: none;
    border: none;
    border: 1px solid lightgray;
    width: 80%;
}

.loginbtn {
    padding: 1.8vh 0 1.6vh;
    margin-left: 0;
    text-align: left;
    background-color: white;
    width: 80%;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 11px;
    letter-spacing: 1.5px;
    border: none;
    outline: none;
    border-bottom: 1px solid lightgrey;
    -webkit-transition: ease-out 0.3s;
    -moz-transition: ease-out 0.3s;
    transition: ease-out 0.3s;

    &:hover {
    box-shadow: inset 0 -5vh 0 0 #DAB785;
    padding-left: 1vw;
}

h6 {
    cursor: pointer;
}


`
// const LogRegBut = styled.div`
// text-transform: uppercase;
// box-shadow: 0px 0px 15px #888888;
// color: white;
// font-size: 1rem;
// padding: 3.5% 3%;
// border-radius: 50%;
// margin: 1vh 44vw;
// border : 10px double #e8e2dc;
// background-color: #black;
// -webkit-transition: all .5s ease-in-out;
// -moz-transition: all .5s ease-in-out;
// transition: all .5s ease-in-out;

// &:hover {
// transform: scale(1.2);
// background-color: #ff5300;
// }
// `

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
    /* logout() {
        axios.post('/api/logout').then(res => {
            this.props.updateUser(res.data)
            this.props.toggleFn();
        })
    } */
    toggleReg() {
        this.setState({ register: !this.state.register });
    }
    render() {
        console.log(this.props)
        let { loginToggle } = this.props;
        if (this.state.register === false) {
            return (
                <Parent>
                    <button className='loginbtn' onClick={this.props.loginToggleFn}>
                        Login / Sign Up
                    </button>
                    {/* <button onClick={() => this.logout()}>Log Out</button> */}
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <br />
                    <br />
                    <button className='loginbtn' onClick={() => this.login()}>
                        Login
                     </button>
                    {/* <button onClick={() => this.register()}>Register</button> */}
                    <h4>{this.state.error}</h4>
                    <h2>{this.state.loggedIn}</h2>
                    <h6 onClick={() => this.toggleReg()}>Not a member?</h6>
                </Parent>
            );
        } else {
            return (
                <Parent>
                    <button className='loginbtn' onClick={this.props.loginToggleFn}>
                        Login / Sign Up
                    </button>
                    <h3>Username</h3>
                    <input onChange={e => this.setState({ username: e.target.value })} />
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <br />
                    <br />
                    <button className='loginbtn' onClick={() => this.register()}>
                        Register
                    </button>
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