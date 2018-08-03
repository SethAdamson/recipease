import React, { Component } from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

const Parent = styled.div`
    display: ${props => props.type};
    flex-direction: column;
    background-color: transparent;
`


export default class EditProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameProfile: props.username,
            emailProfile: props.email,
        }
    }

    componentDidMount(){
        if(this.props.user){
            this.setState({username: this.props.user.username, email: this.props.user.email})
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        let {profileToggle, username, email} = this.props;
        console.log(username, email);
        return (
            <Parent type={profileToggle ? 'flex' : 'none'}>
                <input name='usernameProfile' placeholder={username} onChange={this.handleChange} />
                <input name='emailProfile' placeholder={email} onChange={this.handleChange} />
                <button>Save Changes</button>
                <button>Cancel Changes</button>
            </Parent>
        )
    }
}