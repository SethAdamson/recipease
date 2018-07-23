import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';


class RecipeCUD extends Component {
    constructor() {
        super();

        this.state = {

        }

    }


    render() {

        return (
            <div>

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
