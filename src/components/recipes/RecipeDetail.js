import React, { Component } from 'react';
import AppHeader from '../fixed/Header';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getRecipes } from '../../ducks/reducer';

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

const Header = styled.div`
padding-bottom: 3vh;
width: 100vw;
height:100vh;

.frontpic {
    position: absolute;
    width: 25%;
    z-index: 1;
    left: 38vw;
    top: 13vh;
    border: 2px 2px 10px white;
    box-shadow: 0px 0px 15px white;
    border-radius: 2%;
}

.backpic {
    position: relative;
    left: 8vw;
    width: 84%;
    z-index: 0;
    filter: blur(10px);
    opacity: 0.8;
}
`
const BigSection = styled.h1`
text-align: center;
position: absolute;
font-size: 75px;
font-family: 'Montserrat',sans-serif;
margin: -50vh 15vw 0 15vw;
color: #fff;
text-shadow: 2px 2px 10px grey;
`
const FirstInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
position: relative;
z-index: 10;
margin-top: -12vh;
background-color: rgba(233,226,220,0.2);

article {
    display: flex;
    justify-content: center;
    line-height: 0.5px;
    font-size: 2rem;
    font-weight: 100;
    color: white;
    text-shadow: 2px 2px 10px grey;
}

button {
    display:flex;
    justify-content: center;
    line-height: 0.5px;
    font-size: 2rem;
    font-weight: 100;
    color: white;
    text-shadow: 2px 2px 10px grey;
    border:none;

`
const SecondInfo = styled.div`
position: relative;
align-content: center;
text-align: left;
margin-top: 2vh;
padding: 70px 25vw;
background-color: #fff;
font-weight: bolder;
font-weight:100;
letter-spacing: 1px;

h5 {
    font-family: 'Montserrat',sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1px;
}
`
const ThirdInfo = styled.div`
align-content: center;
text-align: left;
padding: 80px 15vw 20px 25vw;
font-weight: bolder;
font-weight:100;
letter-spacing: 1px;

h5 {
    font-family: 'Montserrat',sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1px;
}
`

const List = styled.ul`
margin: 10px 0;
font-weight: lighter;
`

const RecipeButton = styled.button`
text-transform: uppercase;
box-shadow: 0px 0px 15px #888888;
color: white;
font-size: 1rem;
padding: 3.5% 3%;
border-radius: 50%;
margin: 5vh 44vw;
border : 10px double #e8e2dc;
background-color: #ffd300;
-webkit-transition: all .05s ease-in-out;
-moz-transition: all .05s ease-in-out;
transition: all .05s ease-in-out;

&:hover {
transform: scale(1.2);
background-color: #ff5300;
}
`
const SVG = styled.svg`
height: 24px;
width:24px;

fill: grey;

 &:hover {
   width: 10000px;
   fill:red;
}

`
const FavButton = styled.button`
height:48px;
width:48px;
border-radius: 50%;
justify-content: center;
&:hover {

`
// const LinkTag = styled.link`
// color:red;
// `


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
        this.heartClick = this.heartClick.bind(this)
    }




    componentDidMount() {
        window.scrollTo(0, 0);
        let { recipes } = this.props;
        if (recipes.length === 0) {
            this.props.getRecipes().then(res => {
                this.updateState();
            });
        } else {
            this.updateState();
        }
    }

    updateState = () => {
        let { recipes } = this.props;
        let singleID = +this.props.match.params.id;
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

    heartClick() {
        document.getElementById('heart').style.fill = 'red'

        alert('Added To Favorites')

    }

    render() {

        let { id, img, name, cost, difficulty, time, rating, serves, ingredients, steps, source, sourceURL } = this.state;
        console.log(sourceURL);
        let ingDisplay = []
        if (ingredients) {
            ingDisplay = ingredients.split('*').map((e, i) => {
                return (
                    <List key={i}>{i + 1}. {e}</List>
                )
            })
        }
        let stepDisplay = []
        if (steps) {
            stepDisplay = steps.split('*').map((e, i) => {
                return (
                    <List key={i}>{i + 1}. {e}</List>
                )
            })
        }
        return (
            <Page>
                <AppHeader />

                <Header>
                    <img className='frontpic' src={img} alt={id} />
                    <img className='backpic' src={img} alt={id} />
                    <BigSection>{name}</BigSection>
                    <FirstInfo>
                        <article>
                            <FavButton onClick={this.heartClick}><SVG id='heart' xmlns='http://www.w3.org/2000/SVG' viewBox='0 0 297.5 259.04'><defs />
                                <polyline className='heart' points='78.29 78.16 149.73 148.51 219.21 78.16' />
                                <path  className='heart' d='M153.5,262.14,26.31,136.9a78.23,78.23,0,1,1,110-111.29L152,41.06l14.51-14.68A78.23,78.23,0,0,1,278,136.14Z' transform='translate(-3 -3.1)' />
                            </SVG></FavButton>
                            <ul>Cost: {cost}</ul>
                            <ul>Difficulty: {difficulty}</ul>
                            <ul>Time: {time}</ul>
                            <ul>Rating: {rating}</ul>
                            <ul>Serves: {serves}</ul>
                        </article>
                    </FirstInfo>
                </Header>

                <SecondInfo>
                    <article>
                        <ul>
                            <h5>Ingredients: </h5>
                            {ingDisplay}</ul>
                    </article>
                </SecondInfo>
                <ThirdInfo>
                    <article>
                        <ul>
                            <h5>Directions: </h5>
                            {stepDisplay}</ul>
                        <ul>
                            <h5>Source:</h5>
                            <a href={sourceURL} style={{ color: 'grey' }}>
                                {source}</a>
                        </ul>
                    </article>
                </ThirdInfo>
                <Link to={{
                    pathname: `../recipes/Recipe.js/${this.props.testvalue}`
                }}> <RecipeButton> Get Recipes</RecipeButton> </Link>
            </Page>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { getRecipes })(RecipeDetail);