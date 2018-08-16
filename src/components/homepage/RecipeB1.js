import React, { Component } from 'react';
import styled from 'styled-components'
import Parallax from 'react-rellax';
import { connect } from 'react-redux'
import { getRecipes } from '../../ducks/reducer';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';


const RecipeBoxDiv = styled.div`
z-index: 2;
border: none;
background-color: white;
width: 20vw;
padding: 3vw 3vw 0 3vw;
box-shadow: 1px 1px 5px grey;

@media (min-width: 315px) and (max-width: 480px) {
    width: 40vw;
    padding: 2vw 2vw 0 2vw;
    }

a {
    text-decoration: none;
    text-align: center;
}

hr {
    border-width: 0.5px;
    color: grey;
    margin-bottom: 3vh;

    @media (min-width: 315px) and (max-width: 480px) {
    margin-bottom: 1vh;
    }
}

p {
    font-family: Times New Roman;
    color: grey;
    text-align: center;

    @media (min-width: 315px) and (max-width: 480px) {
    font-size:12px;
    }
}

h4 {
    font-family: 'Montserrat', sans-serif;
    color: black;
    font-size: 1.75rem;
    margin: 1vw auto;
    padding: 1rem;
    text-align: center;

    @media (min-width: 315px) and (max-width: 480px) {
        padding-top: 0;
        font-size: 0.9rem;
    }
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

    @media (min-width: 315px) and (max-width: 480px) {
        font-size: 0.7rem !important;
        padding: 10px;
        margin-bottom: 2vh;
    }
}

footer {
    margin-bottom: 4vh;

    @media (min-width: 315px) and (max-width: 480px) {
        margin-bottom: 2vh;
    }

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

            @media (min-width: 315px) and (max-width: 480px) {
            font-size: 0.85rem !important;
            }
        }
    }
}
`

const Button = styled.button`
display: flex;
justify-content: center;
background-color: #DAB785;
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

@media (min-width: 315px) and (max-width: 480px) {
    padding: 10px;
    font-size: 7px;
    }
  
&:hover {
    box-shadow: inset 0 -100px 0 0 #D5896F;
}
`

const PaMediaLax = styled.div`
div {
    @media (min-width: 315px) and (max-width: 480px) {
        transform: none !important;
    }
}
`

class RecipeB1 extends Component {
    constructor() {
        super();

        this.state = {
            recipes: []
        }

    }

    render() {
        return (
            <PaMediaLax>
                <Parallax speed={-2} percentage={1}>
                    <RecipeBoxDiv>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: 'row',
                                justifyContent: "center",
                                margin: "0 auto"
                            }}>
                            <StarRatings
                                rating={5}
                                starRatedColor="#e28468"
                                numberOfStars={5}
                                name='rating'
                                starDimension="2.2vw"
                                starSpacing="0.1vw" />
                        </div>
                        <hr />
                        <article>
                            <span>
                                <p>Just a Taste
                                <br />
                                    —
                            </p>
                            </span>
                            <h4>
                                BLT Quiche
                        </h4>
                            <footer>
                                <h5 style={{ textAlign: "center", fontSize: "1rem" }} > Serves: 8</h5>
                                <div>
                                    <p>55 min</p>
                                </div>
                            </footer>
                        </article>
                        <Link to={"/detail/396"}>
                            <Button>View Recipe</Button>
                        </Link>
                    </RecipeBoxDiv>
                </Parallax >
            </PaMediaLax>

        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { getRecipes })(RecipeB1)