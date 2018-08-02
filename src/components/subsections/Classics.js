import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../../media/NutritionLabel.png';
import pancakes from '../../media/trimmedpancakes.jpg';
import { Link } from 'react-router-dom';
import AppHeader from '../fixed/Header';
import maskImage from '../../media/ChefMask.svg';
import Fade from 'react-reveal/Fade';
import Menu from '../fixed/Menu';

const Page = styled.div`
position: relative;
background-color: #FBF8F3;

h2 {
   font-size: 40px;
}

p {
   font-size: 18px;
}
`

const Header = styled.img`
position: relative;
height: 100vh;;
width: 100%;
`

const BigSection = styled.h1`
position: relative;

font-size: 140px;
font-family: 'Montserrat', sans-serif;
margin: 0 6.5vw;
padding: 0 34px;
bottom: 15vh;
color: #fff;
text-shadow: 1px 1px 15px #031D44;
`
const FirstInfo = styled.div`
align-content: center;
text-align: left;
padding: 0 15vw 80px 25vw;
`
const SecondInfo = styled.div`
align-content: center;
text-align: left;
padding: 80px 15vw 80px 25vw;
background-color: #fff;
`
const ThirdInfo = styled.div`
align-content: center;
text-align: left;
padding: 80px 15vw 80px 25vw;
`
const NutritionalLabel = styled.img`
position: flex;
justify-content: center;
width: 90%;
border-radius: 5px;
`
const PancakeInfoGraphic = styled.img`
border-radius: 5px;
`
const RecipeButton = styled.button`
text-transform: uppercase;
box-shadow: 0px 0px 15px #888888;
color: white;
text-align: center;
outline: none;
font-size: 1rem;
height: 200px;
width: 200px;
border-radius: 50%;
border : 10px double #e8e2dc;
background-color: #DAB785;
-webkit-transition: all .5s ease-in-out;
-moz-transition: all .5s ease-in-out;
transition: all .5s ease-in-out;

&:hover {
transform: scale(1.2);
background-color: #D5896F;
}
`

export default class Classics extends Component {
    constructor() {
        super();

        this.state = {
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <Page>
                <AppHeader fixed={true} />
                <Menu fixed={true} />
                <Header src={pancakes} alt='Photo by Calum Lewis on Unsplash'>
                </Header>

                <BigSection>Classics</BigSection>

                <FirstInfo>
                    <article>
                        <Fade bottom>
                            <h2>Pancakes In The Morning Aren't Always Bad</h2>
                        </Fade>
                        <Fade bottom>
                            <p> When you’re making pancakes from scratch they can have a lot of healthy qualities. First, you can make them with whole grains like whole-wheat flour, which will add heart-healthy filling fiber. You can also add extra-healthy toppings, like fruit to boost vitamins and fiber- and protein-packed nuts to transform them into a nutritious breakfast that will help you stay full through the morning. </p>
                        </Fade>
                    </article>
                </FirstInfo>

                <SecondInfo>
                    <article>
                        <Fade bottom>
                            <h2>Whole Wheat Pancakes</h2>
                        </Fade>
                        <Fade bottom>
                            <NutritionalLabel src={Label} alt='' />
                        </Fade>
                    </article>
                </SecondInfo>

                <ThirdInfo>
                    <article>
                        <Fade bottom>
                            <h2>Treat Yourself</h2>
                        </Fade>
                        <Fade bottom>
                            <PancakeInfoGraphic src='https://thumbnails-visually.netdna-ssl.com/pancake-day--3-basic-recipes_54d8a2b8365f2.jpg' alt='' />
                        </Fade>
                    </article>
                </ThirdInfo>

                <Fade bottom>
                    <Link to={{
                        pathname: `../recipes`
                    }} style={{ display: 'flex', height: '200px', width: '100%', textDecoration: 'none', justifyContent: 'center' }}> <RecipeButton> Back To Recipes</RecipeButton>
                    </Link>
                </Fade>
            </Page>
        )
    }
}