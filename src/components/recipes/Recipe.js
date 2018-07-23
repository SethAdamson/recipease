import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';

const Parent = styled.div`
    height: 50vh;
    width: 25vw;
    background: white;
    display: flex;
    flex-direction: column;    
    color: rgb(70, 70, 70);
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    margin: 5px;

h2 {
    width: 90%;
    height: 10%;
    margin: auto;
    font-size: 2rem;
    text-align: center;
}

img {
    width: 100%;
    height: 60%;
}

h1 {
    width: 90%;
    height: 15%;
    padding: 5%;
    font-size: 1rem;
    text-align: center;
    vertical-align: center;
    margin: auto;
}
`

export default class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {
    let {name, rating, img} = this.props;
        return (
            <Parent>
                <h2>{rating}</h2>
                <img src={img} />
                <h1>{name}</h1>
            </Parent>
        )
    }
}