import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { updateUser } from '../../ducks/reducer';
import styled from 'styled-components';

const Parent = styled.div`
position: fixed;
margin: -1vh auto;
top: 0;
left: 0;
right: 0;
height: ${props => props.type};
width: 35vw;
z-index: 100;
background: radial-gradient(white, #e0b880);
box-shadow: 0 0 5px grey;
transition: all 1s ease-in-out;
transform: translateY(40%);
overflow: hidden;
text-align: center;
border-radius: 5%;
font-family: 'Montserrat', sans-serif;
font-size: 18px;


h3 {
    margin-top: 5vh;
    margin-bottom: 2vh;
    color: white;
    text-shadow: 2px 2px 5px #031D44;
}

input {
    outline: none;
    border: none;
    border-bottom: 1px solid #e0b880;
    font-size: 15px;
    background: transparent;
    width: 15vw;
    text-align: center;
    color: #031D44;
}

button {
    
    text-align: center !important;
    transition: unset !important;

        &:hover {
        padding-left: 0 !important;
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
                <Parent type={loginToggle ? null : '0'}>
                    {/* <button onClick={() => this.logout()}>Log Out</button> */}
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <br />
                    <br />
                    <button onClick={() => this.login()}>
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
                <Parent type={loginToggle ? null : '0'}>
                    <h3>Username</h3>
                    <input onChange={e => this.setState({ username: e.target.value })} />
                    <h3>Email</h3>
                    <input onChange={e => this.setState({ email: e.target.value })} />
                    <h3>Password</h3>
                    <input onChange={e => this.setState({ password: e.target.value })} type='password' />
                    <br />
                    <br />
                    <button onClick={() => this.register()}>
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