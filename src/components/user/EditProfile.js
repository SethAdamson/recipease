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
            username: 'Username',
            email: 'Email',
        }
    }

    componentDidMount(){
        if(this.props.user){
            this.setState({username: this.props.user.username, email: this.props.user.email})
        }
    }

    render() {
        let {profileToggle} = this.props;
        let {username, email} = this.state;
        console.log(username, email);
        return (
            <Parent type={profileToggle ? 'flex' : 'none'}>
                <input placeholder={username}/>
                <input placeholder={email}/>
                <button>Save Changes</button>
            </Parent>
        )
    }
}