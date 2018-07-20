import React, { Component } from 'react';
import styled from 'styled-components';
import Label from './NutritionLabel.png'

const Page = styled.div`
position: relative;
background-color: #e8e2dc


h2 {
   font-size: 40px;
}

p {
   font-size: 18px;
}
`
const ThinLines = styled.div`
position:absolute;
border-color: #d3cec3;
width: 85vw;
height:100%;
margin: 0 6.5vw;
border-left: 1px solid #d3cec3;
border-right: 1px solid #d3cec3;
z-index: 100;

`
const Header = styled.img`
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
width: 70%
`

export default class Healthy extends Component {
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

              
               <Header src='https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9611efe6e826d968e96cbb6c1ee5d832&auto=format&fit=crop&w=2734&q=80' alt='' />

               <BigSection>Classics</BigSection>
               <FirstInfo>
                   <article>
                       <h2>Pancakes In The Morning Aren't Always Bad</h2>
                       <p> When you’re making pancakes from scratch they can have a lot of healthy qualities. First, you can make them with whole grains like whole-wheat flour, which will add heart-healthy filling fiber. You can also add extra-healthy toppings, like fruit to boost vitamins and fiber- and protein-packed nuts to transform them into a nutritious breakfast that will help you stay full through the morning.</p>
                   </article>
               </FirstInfo>
               <SecondInfo>
                   <article>
                       <h2>Nutrional Value</h2>
                       <NutritionalLabel src={Label} alt=''/>
                   </article>
               </SecondInfo>
               <ThirdInfo>
                   <article>
                       <h2>Dad Jokes</h2>
                       <p>Did you hear about the restaurant on the moon? Great food, no atmosphere.
What do you call a fake noodle? An Impasta.
How many apples grow on a tree? All of them.
Want to hear a joke about paper? Nevermind it's tearable.
I just watched a program about beavers. It was the best dam program I've ever seen.
Why did the coffee file a police report? It got mugged.
How does a penguin build it's house? Igloos it together.
Dad, did you get a haircut? No I got them all cut.
What do you call a Mexican who has lost his car? Carlos.
Dad, can you put my shoes on? No, I don't think they'll fit me.
Why did the scarecrow win an award? Because he was outstanding in his field.
Why don't skeletons ever go trick or treating? Because they have no body to go with.
Ill call you later. Don't call me later, call me Dad.
What do you call an elephant that doesn't matter? An irrelephant
Want to hear a joke about construction? I'm still working on it.
What do you call cheese that isn't yours? Nacho Cheese.
Why couldn't the bicycle stand up by itself? It was two tired.
What did the grape do when he got stepped on? He let out a little wine.</p>
                   </article>
</ThirdInfo>




           </Page>
       )
   }
}