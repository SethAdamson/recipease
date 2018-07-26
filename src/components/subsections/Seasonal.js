import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppHeader from '../fixed/Header';


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
const VegetableInfoGraphic = styled.img`
width: 100%;
`
const FruitInfoGraphic = styled.img`
width: 100%;
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

export default class Seasonal extends Component {
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
                <AppHeader />
                <Header src='http://www.khalis.pk/wp-content/uploads/2018/03/healthy-food-live-longer-today-170712-tease_31d3da3e5ef0948ff805f0d3a1a431e2.jpg' alt='' />
                

                <BigSection>Seasonal</BigSection>
                <FirstInfo>
                    <article>
                        <h2>Food Can Be Expensive</h2>
                        <p>But it doesn't have to be. Perhaps the biggest tangible benefit of eating seasonally is that you'll save money on food. When you buy what's in season, you buy food that's at the peak of its supply, and costs less to farmers and distribution companies to harvest and get to your grocery store. It may seem like common sense, but it's one of those things many of us ignore when we're shopping.</p>
                        <p>However, the best consequence of eating seasonally is that you get the best tasting, healthiest food available. The same reasons that keep the cost of seasonal food down also drive its quality up: The food is grown closer to you so it doesn't spoil on its trip, it's harvested at the peak of its season, and sold during its season, before it spoils. Ideally, this means you're getting fruits and vegetables that haven't had time to lose their flavor or their health benefits by sitting in a shipping container for a trip across the ocean.</p>
                    </article>
                </FirstInfo>
                <SecondInfo>
                    <article>
                        <h2>A Quick Guide:</h2>
                        <VegetableInfoGraphic src='https://1m8t7f33dnra3sfk6v2rjurs-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/VeggiesByMonth_Draft3-01.png' />
                    </article>
                </SecondInfo>
                <ThirdInfo>
                    <article>
                        <FruitInfoGraphic src='https://1m8t7f33dnra3sfk6v2rjurs-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/FruitsByMonth_Screen.png' alt='' />
                    </article>
                </ThirdInfo>
                <Link to={{
                   pathname: `../recipes`
               }}> <RecipeButton> Get Recipes</RecipeButton> </Link>
            </Page>
        )
    }
}