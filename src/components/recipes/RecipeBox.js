import React, { Component } from 'react';
import styled from 'styled-components'

const RecipeBoxDiv = styled.div`
z-index: 2;
border: none;
background-color: white;
width: 20vw;
padding: 3vw 3vw 0 3vw;

a {
    text-decoration: none;
    text-align: center;
}

h3 {
    margin: 0;
    font-size: 13px;
    color: black;
    font-family: Times New Roman;
}

hr {
    border-width: 0.5px;
    color: grey;
    margin-bottom: 3vh;
}

span {
    font-family: Times New Roman;
    color: grey;
}

h4 {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 1.75rem;
    margin: 1vw auto;
    padding: 1rem;
}

h5 {
    text-transform: uppercase;
    font-weight: 200;
    color: black;
    border: 1px solid lightgrey;
    width: 50%;
    padding: 20px;
    margin: 1vw auto;
    margin-bottom: 4vh;
    letter-spacing: 0.2vw;
}

footer {
    margin-bottom: 4vh;

    div {
        display: flex;
        justify-content: center;
        width: 62%;
        margin: 0 auto;
        border-bottom: 0.2px solid lightgrey;

        h6 {
            font-family: Times New Roman;
            margin: 0;
            padding-bottom: 2vh;
            color: black;
        }

        p {
            font-family: Times New Roman;
            font-size: 1.5rem;
            margin: 0;
            padding-bottom: 1.5vh;
            color: black;
        }
    }
}
`

const Column1 = styled.div`
display: flex;
flex-direction: column;
border-right: 1px solid lightgrey;
`

const Column2 = styled.div`
display: flex;
flex-direction: column;
`
const Button = styled.button`
display: flex;
justify-content: center;
text-transform: uppercase;
font-weight: 200;
color: black;
border: 1px solid lightgrey;
width: 65%;
padding: 20px;
margin: 1vw auto;
letter-spacing: 0.2vw;
`



export default class RecipeBox extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {

        return (
            <RecipeBoxDiv>
                <a href="">
                    <h3>Category</h3>
                    <hr />
                    <article>
                        <span>Author
                            <br />
                            —
                        </span>
                        <h4>Recipe Title</h4>
                        <footer>
                            <h5>Quantity</h5>
                            <div>
                                <Column1>
                                    <h6>Method</h6>
                                    <p>... min</p>
                                </Column1>
                                <Column2>
                                    <h6>Cooking</h6>
                                    <p>... min</p>
                                </Column2>
                            </div>
                        </footer>
                    </article>
                    <Button>View Recipe</Button>
                </a>
            </RecipeBoxDiv>
        )
    }
}