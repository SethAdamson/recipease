import React, { Component } from 'react';
import styled from 'styled-components';
import Label from '../../media/NutritionLabel.png';
import pancakes from '../../media/trimmedpancakes.png';
import { Link } from 'react-router-dom';
import AppHeader from '../fixed/Header';

const Page = styled.div`
position: relative;
background-color: #e8e2dc;

h2 {
   font-size: 40px;
}

p {
   font-size: 18px;
}
`

const Header = styled.img`
position: relative;
height: 100%;
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
`
const PancakeInfoGraphic = styled.img`
`
const RecipeButton = styled.button`
text-transform: uppercase;
color: white;
font-size: 1rem;
padding: 3.5% 3%;
border-radius: 50%;
margin: 8vh 44vw;
border : 10px double #e8e2dc;
background-color: #85C1E9;
-webkit-transition: all .05s linear;
-moz-transition: all .05s linear;
transition: all .05s linear;

&:hover {
transform: scale(1.2);
background-color: #2E86C1;
box-shadow: 0px 0px 15px #888888;
}
`

export default class Classics extends Component {
   constructor() {
       super();

       this.state = {

       }
   }

componentDidMount(){
    window.scrollTo(0,0)
}




   render() {
       return (
           <Page>
               <AppHeader />
               <Header src={pancakes} alt='Photo by Calum Lewis on Unsplash' />

               <BigSection>Classics</BigSection>
               <FirstInfo>
                   <article>
                       <h2>Pancakes In The Morning Aren't Always Bad</h2>
                       <p> When you’re making pancakes from scratch they can have a lot of healthy qualities. First, you can make them with whole grains like whole-wheat flour, which will add heart-healthy filling fiber. You can also add extra-healthy toppings, like fruit to boost vitamins and fiber- and protein-packed nuts to transform them into a nutritious breakfast that will help you stay full through the morning. </p>
                   </article>
               </FirstInfo>
               <SecondInfo>
                   <article>
                       <h2>Whole Wheat Pancakes</h2>
                       <NutritionalLabel src={Label} alt=''/>
                   </article>
               </SecondInfo>
               <ThirdInfo>
                   <article>
                       <h2>Treat Yourself</h2>
                       <PancakeInfoGraphic src='https://thumbnails-visually.netdna-ssl.com/pancake-day--3-basic-recipes_54d8a2b8365f2.jpg' alt='' />
                   </article>
                </ThirdInfo>
               <Link to={{
                   pathname: `../recipes`
               }}> <RecipeButton> Get Recipes</RecipeButton> </Link>
           </Page>
       )
   }
}