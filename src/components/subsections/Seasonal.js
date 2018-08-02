import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppHeader from '../fixed/Header';
import Fade from 'react-reveal/Fade';


const Page = styled.div`
position: relative;
background-color: #FBF8F3

h2 {
   font-size: 40px;
}

p {
   font-size: 18px;
}
`
const Header = styled.img`
width: 100%;
height: 100vh;
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
const VegetableInfoGraphic = styled.img`
width: 100%;
border-radius: 5px;
`
const FruitInfoGraphic = styled.img`
width: 100%;
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
                {/* <AppHeader /> */}
                <Header src='http://www.khalis.pk/wp-content/uploads/2018/03/healthy-food-live-longer-today-170712-tease_31d3da3e5ef0948ff805f0d3a1a431e2.jpg' alt='' />


                <BigSection>Seasonal</BigSection>
                <FirstInfo>
                    <article>
                        <Fade bottom>
                            <h2>Food Can Be Expensive</h2>
                        </Fade>
                        <Fade bottom>
                            <p>But it doesn't have to be. Perhaps the biggest tangible benefit of eating seasonally is that you'll save money on food. When you buy what's in season, you buy food that's at the peak of its supply, and costs less to farmers and distribution companies to harvest and get to your grocery store. It may seem like common sense, but it's one of those things many of us ignore when we're shopping.</p>
                        </Fade>
                        <Fade bottom>
                            <p>However, the best consequence of eating seasonally is that you get the best tasting, healthiest food available. The same reasons that keep the cost of seasonal food down also drive its quality up: The food is grown closer to you so it doesn't spoil on its trip, it's harvested at the peak of its season, and sold during its season, before it spoils. Ideally, this means you're getting fruits and vegetables that haven't had time to lose their flavor or their health benefits by sitting in a shipping container for a trip across the ocean.</p>
                        </Fade>
                    </article>
                </FirstInfo>
                <SecondInfo>
                    <article>
                        <Fade bottom>
                            <h2>A Quick Guide:</h2>
                        </Fade>
                        <Fade bottom>
                            <VegetableInfoGraphic src='https://1m8t7f33dnra3sfk6v2rjurs-wpengine.netdna-ssl.com/wp-content/uploads/2015/01/VeggiesByMonth_Draft3-01.png' />
                        </Fade>
                    </article>
                </SecondInfo>
                <ThirdInfo>
                    <article>
                        <Fade bottom>
                            <FruitInfoGraphic src='https://1m8t7f33dnra3sfk6v2rjurs-wpengine.netdna-ssl.com/wp-content/uploads/2015/05/FruitsByMonth_Screen.png' alt='' />
                        </Fade>
                    </article>
                </ThirdInfo>
                <Fade bottom>
                    <Link to={{
                        pathname: `../recipes`
                    }} style={{ display: 'flex', height: '200px', width: '100%', textDecoration: 'none', justifyContent: 'center' }}>
                        <RecipeButton> Back To Recipes</RecipeButton> </Link>
                </Fade>
            </Page>
        )
    }
}