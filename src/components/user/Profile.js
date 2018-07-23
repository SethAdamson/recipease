import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Parent = styled.div`
padding-top: 30vh;

h1 {
    margin: 0;
}
`



class Profile extends Component {
    constructor() {
        super();

        this.state = {
            id: undefined,
            username: undefined,
            email: undefined,
        }

    }

    componentDidMount(){
        if(this.props.user) this.setState({
            id: this.props.user.userID,
            username: this.props.user.username,
            email: this.props.user.email,
        })
    }



    render() {
        let {username, email} = this.state;
        console.log(username, email)
        return (
            <Parent>
                <h1>Welcome to RecipEase, {username}!</h1>
                <div>
                    <ul>Favorites</ul>
                    <ul>My Recipes</ul>
                    <ul>Shopping</ul>
                </div> 
            </Parent>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile);