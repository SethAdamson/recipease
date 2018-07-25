import React, { Component } from 'react';
import AppHeader from '../fixed/Header';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Page = styled.div`
position: relative;
background-color: #e8e2dc;
font-family: sans-serif;

h2 {
   font-size: 40px;
}

p {
   font-size: 18px;
}
`

const Header = styled.div `
width: 100vw;

img {
    position: relative;
    width: 50%;
    margin: 0 25%;
}
`
const BigSection = styled.h1`
text-align: center;
position: relative;
font-size: 60px;
font-family: 'Montserrat', sans-serif;
margin: 0 6.5vw;
padding: 0 34px;
bottom: 15vh;
color: #fff;
text-shadow: 2px 2px 10px grey;
`
const FirstInfo = styled.div`
align-content: center;
text-align: left;
padding: 0 25vw 40px 25vw;

article {
    display: flex;
}
`
const SecondInfo = styled.div`
align-content: center;
text-align: left;
padding: 40px 25vw ;
background-color: #fff;
font-weight: bolder;
`
const ThirdInfo = styled.div`
align-content: center;
text-align: left;
padding: 80px 15vw 80px 25vw;
font-weight: bolder;
`

const List = styled.ul`
margin: 10px 0;
font-weight: lighter;
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


class RecipeDetail extends Component {
    constructor() {
        super();

        this.state = {
            id: undefined,
            img: undefined,
            name: undefined,
            cost: undefined,
            difficulty: undefined,
            time: undefined,
            rating: undefined,
            serves: undefined,
            ingredients: undefined,
            steps: undefined,
            source: undefined,
            sourceURL: undefined,
        }
    }

    componentDidUpdate(props){
        if(props.recipes !== this.props.recipes){
            let {recipes} = this.props;
            let singleID = +this.props.match.params.id;
            console.log(recipes);
            if(recipes){
                let single = recipes.filter(e => e.recipeid === singleID)[0];
                this.setState({
                    id: single.recipeid,
                    img: single.img,
                    name: single.name,
                    cost: single.cost,
                    difficulty: single.dif,
                    time: single.prept,
                    rating: single.rating,
                    serves: single.serves,
                    ingredients: single.ingredients,
                    steps: single.steps,
                    source: single.source,
                    sourceURL: single.sourceurl,
                })
            }
        }
    }

    render() {
        let {id, img, name, cost, difficulty, time, rating, serves, ingredients, steps, source, sourceURL} = this.state;
        console.log(sourceURL);
        let ingDisplay = []
        if(ingredients){
            ingDisplay = ingredients.split('*').map((e, i) => {
                return (
                    <List key={i}>{i+1}. {e}</List>
                )
            })
        }
        let stepDisplay = []
        if(steps){
            stepDisplay = steps.split('*').map((e, i) => {
                return (
                    <List key={i}>{i+1}. {e}</List>
                )
            })
        }
            return (
                <Page>
                    <AppHeader />
                    <Header>
                        <img src={img} alt={id} />
                    </Header>

                    <BigSection>{name}</BigSection>
                    <FirstInfo>
                        <article>
                            <ul>Cost: {cost}</ul>
                            <ul>Difficulty: {difficulty}</ul>
                            <ul>Time: {time}</ul>
                            <ul>Rating: {rating}</ul>
                            <ul>Serves: {serves}</ul>
                        </article>
                    </FirstInfo>
                    <SecondInfo>
                        <article>
                            <ul>Ingredients: {ingDisplay}</ul>
                        </article>
                    </SecondInfo>
                    <ThirdInfo>
                        <article>
                            <ul>Directions: {stepDisplay}</ul>
                            <ul>Source: <a href={sourceURL} style={{color: 'grey'}}>{source}</a></ul>
                        </article>
                    </ThirdInfo>
                    <Link to={{
                    pathname: `../recipes/Recipe.js/${this.props.testvalue}`
                }}> <RecipeButton> Get Recipes</RecipeButton> </Link>
                </Page>
            )
    }
}

function mapStateToProps(state){
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(RecipeDetail);