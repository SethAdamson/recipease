import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import Header from '../fixed/Header';


class RecipeCUD extends Component {
    constructor() {
        super();

        this.state = {

        }

    }


    render() {

        return (
            <div>
                <Header />
                My Recipes
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(RecipeCUD);
