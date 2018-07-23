import React, { Component } from 'react';
import styled from 'styled-components';

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

             
               <Header src='http://www.khalis.pk/wp-content/uploads/2018/03/healthy-food-live-longer-today-170712-tease_31d3da3e5ef0948ff805f0d3a1a431e2.jpg' alt='' />

               <BigSection>Section</BigSection>
               <FirstInfo>
                   <article>
                       <h2>Maple: a partner in healthy eating</h2>
                       <p>It’s common knowledge that maple syrup from Québec is 100% pure, without added colouring, artificial flavours or preservatives. But did you know that they also contain minerals and vitamins? Yes, they are truly incredible. It’s no wonder maple syrup’s properties and natural components are at the core of research projects in Québec and around the world.</p>
                   </article>
               </FirstInfo>
               <SecondInfo>
                   <article>
                       <h2>Nutrional Value</h2>
                       <p>Maple syrup from Québec is 100% pure, and contains mineral nutrients and vitamins. One 60 mL (1/4 cup) serving of maple syrup provides over 72% of your daily nutritional requirement of manganese, 27% of riboflavin, 17% of copper and 6% of calcium.</p>
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