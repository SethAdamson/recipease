import React, { Component } from 'react';
import styled from 'styled-components'

const CategoryBoxDiv = styled.div`
z-index: 2;
border: none;
background-color: transparent;
width: 50vw;
height: 55vh;

h3 {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 2rem;
    margin: 1vw auto;
    padding: 7rem;
    }

p {
    margin: -12vh 15vw 5vh 8vw;;
}

button {
    margin: -1vh 8vw;
    text-transform: uppercase;
    background-color: #85C1E9;
    font-weight: 400;
    color: white;
    border: 1px solid lightgrey;
    width: 40%;
    padding: 20px 10px;
    letter-spacing: 0.2vw;
    -webkit-transition: ease-out 0.5s;
    -moz-transition: ease-out 0.5s;
    transition: ease-out 0.5s;

    &:hover {
    box-shadow: inset 0 -100px 0 0 #2E86C1;
}
`


export default class Seasonal extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <CategoryBoxDiv>
                <article>
                    <h3>Seasonal</h3>
                    <p>Fruit, vegetables, meat and fish tastes best with it's in season and at its peak. Find the perfect recipe to fit.</p>
                    <button>See the Category</button>
                </article>
            </CategoryBoxDiv>
        )
    }
}