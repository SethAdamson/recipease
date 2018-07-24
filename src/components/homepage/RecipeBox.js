import React, { Component } from 'react';
import styled from 'styled-components'
import Parallax from 'react-rellax';
import { connect } from 'react-redux'
import { getRecipes } from '../../ducks/reducer'

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
background-color: #85C1E9;
text-transform: uppercase;
font-weight: 400;
color: white;
border: 1px solid lightgrey;
width: 65%;
padding: 20px;
margin: 1vw auto;
letter-spacing: 0.2vw;
-webkit-transition: ease-out 0.5s;
-moz-transition: ease-out 0.5s;
transition: ease-out 0.5s;
  
&:hover {
    box-shadow: inset 0 -100px 0 0 #2E86C1;
}
`



class RecipeBox extends Component {
    constructor() {
        super();

        this.state = {
            recipes: []
        }

    }

    render() {
        console.log(this.props)
        const { name, prept, serves, source, rating } = this.props;
        return (
            <Parallax speed={-1} percentage={2}>
                <RecipeBoxDiv>
                    <h3>Rating {rating}</h3>
                    <hr />
                    <article>
                        <span>
                            {source}
                            <br />
                            —
                        </span>
                        <h4>{name}</h4>
                        <footer>
                            <h5>Serves: {serves}</h5>
                            <div>
                                <p>{prept} min</p>
                            </div>
                        </footer>
                    </article>
                    <Button>View Recipe</Button>
                </RecipeBoxDiv>
            </Parallax>

        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { getRecipes })(RecipeBox)