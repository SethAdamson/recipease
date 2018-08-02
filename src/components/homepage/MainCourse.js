import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    padding-left: 1vw;
    }

p {
    margin: -12vh 15vw 5vh 1vw;
}

button {
    margin: -1vh 1vw;
    text-transform: uppercase;
    background-color: #DAB785;
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
    box-shadow: inset 0 -100px 0 0 #D5896F;
}
}
`


export default class MainCourse extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <CategoryBoxDiv>
                <article>
                    <h3>Main Course</h3>
                    <p>Delicious main course recipes: impress your friends and family with this gourmet main course ideas for parties, holidays and any other special occasion.</p>
                    <Link to={"/recipes"}>
                        <button>See the Category</button>
                    </Link>
                </article>
            </CategoryBoxDiv>
        )
    }
}