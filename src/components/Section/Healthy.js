import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
const Infographic = styled.img`
width: 100%
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

export default class Healthy extends Component {
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


                <Header src='https://images.unsplash.com/photo-1495214783159-3503fd1b572d?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=91d35d2b5386e7dd13bd3b2538eab428&auto=format&fit=crop&w=2850&q=80' alt='' />

                <BigSection>Healthy</BigSection>
                <FirstInfo>
                    <article>
                        <h2>The Energy Your Body Deserves</h2>
                        <p>You deserve to tackle life at your best. There's no better way to accomplish said best than through your diet. A healthy diet will not just keep you thin, but will give you enough energy to make you feel years younger than you are.</p>
                    </article>
                </FirstInfo>
                <SecondInfo>
                    <article>
                        <h2>Health Benefits</h2>
                        <p>Eating a diet rich in vegetables and fruits as part of an overall healthy diet may reduce risk for heart disease, including heart attack and stroke.</p>
                        <p>Eating a diet rich in some vegetables and fruits as part of an overall healthy diet may protect against certain types of cancers.</p>
                        <p>Diets rich in foods containing fiber, such as some vegetables and fruits, may reduce the risk of heart disease, obesity, and type 2 diabetes.</p>
                        <p>Eating vegetables and fruits rich in potassium as part of an overall healthy diet may lower blood pressure, and may also reduce the risk of developing kidney stones and help to decrease bone loss.</p>
                        <p>Eating foods such as vegetables that are lower in calories per cup instead of some other higher-calorie food may be useful in helping to lower calorie intake.</p>

                    </article>
                </SecondInfo>
                <ThirdInfo>
                    <article>
                        <h2>Your Path To Becoming A Chef</h2>
                        <Infographic src='http://healthandstyle.com/wp-content/uploads/2014/12/how-to-make-a-salad-healthy.jpg' alt='' />
                        <p>Source: http://healthandstyle.com/health/how-to-make-a-salad/</p>
                    </article>
                </ThirdInfo>
                <Link to={{
                   pathname: `../recipes/Recipe.js/${this.props.testvalue}`
               }}> <RecipeButton> Get Recipes</RecipeButton> </Link>




            </Page>
        )
    }
}