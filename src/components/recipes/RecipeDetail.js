import React, { Component } from 'react';
import AppHeader from '../fixed/Header';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { getRecipes, addFav, getFavs, checkUser, deleteFav } from '../../ducks/reducer';
import Menu from '../fixed/Menu';

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

.header-info {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;

    @media (min-width: 315px) and (max-width: 480px) {
        height: 60vh;
    }
}

.frontpic {
    margin-top: 64px;
    width: 25%;
    border: 2px 2px 10px white;
    box-shadow: 0px 0px 15px white;
    border-radius: 2%;

    @media (min-width: 315px) and (max-width: 480px) {
        width: 50%;
        margin-top: 10%;
    }
}

.backpic {
    position: absolute;
    left: 8vw;
    width: 84%;
    z-index: 0;
    filter: blur(10px);
    opacity: 0.8;

    @media (min-width: 315px) and (max-width: 480px) {
        width: 80vw;
        left: 10vw;
    }
}
`
const BigSection = styled.h1`
text-align: center;
width: 85%;
font-size: 75px;
font-family: 'Montserrat',sans-serif;
color: #fff;
text-shadow: 2px 2px 10px grey;
z-index: 1;
margin: 32px 0;
text-transform: uppercase;

@media (min-width: 315px) and (max-width: 480px) {
    font-size: 25px;
    margin: 0;
    margin-top: 10vh;
}
`

const FirstInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-end;
z-index: 10;
padding: 0;

.remove-fav {
    font-size: 12px;
    margin: auto 32px;
    height: 2rem;
    border-radius: 5px;
    cursor: pointer;
}

article {
    display: flex;
    width: 100vw;
    justify-content: center;
    line-height: 0.5px;
    font-size: 2rem;
    font-weight: 100;
    color: white;
    text-shadow: 2px 2px 10px grey;
    background-color: rgba(233,226,220,0.4);

    @media (min-width: 315px) and (max-width: 480px) {
    font-size: 1rem;

    ul {
        @media (min-width: 315px) and (max-width: 480px) {
        padding: 0 5vw 0 3vw;   
    }
}
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
}
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

@media (min-width: 315px) and (max-width: 480px) {
    padding: 1vh 5vw;
    margin-top: -42vh;
}

h5 {
    font-family: 'Montserrat',sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1px;

    @media (min-width: 315px) and (max-width: 480px) {
    font-size: 1rem;
    margin: 0;
}
}
`
const ThirdInfo = styled.div`
align-content: center;
text-align: left;
padding: 80px 15vw 20px 25vw;
font-weight: bolder;
font-weight:100;
letter-spacing: 1px;

@media (min-width: 315px) and (max-width: 480px) {
    padding: 10px 15vw 20px 5vw;
    font-size: 1rem;
}

h5 {
    font-family: 'Montserrat',sans-serif;
    font-size: 1.5rem;
    letter-spacing: 1px;

    @media (min-width: 315px) and (max-width: 480px) {
    font-size: 1rem;
    margin: 0;
    }
    }

a {
    @media (min-width: 315px) and (max-width: 480px) {
    font-size: 0.8rem;
    }
 }    
`

const List = styled.ul`
margin: 10px 0;
font-weight: lighter;

@media (min-width: 315px) and (max-width: 480px) {
    margin-left: -8vw;
    width: 60vw;
    font-size: 0.8em;
}
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

@media (min-width: 315px) and (max-width: 480px) {
    font-size: 0.6rem;
    height: 100px;
    width: 100px;
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
align-self:center;
justify-content: center;
`

/* const LinkTag = styled.link`
color:red;
` */

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
            removeFav: false,
            userID: undefined,
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let { recipes, checkUser, getFavs } = this.props;
        checkUser().then(() => {
            if (this.props.user) getFavs(this.props.user.userID).then(() => this.heartFill());
            this.setState({ userID: this.props.user.userID });
        })
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

    heartClick = () => {
        let { addFav, user } = this.props;
        let { id } = this.state;
        document.getElementById('heart').style.fill = 'red'
        addFav(user.userID, id);
        this.setState({ removeFav: true });
    }

    heartFill = () => {
        let { favorites } = this.props;
        let { id } = this.props.match.params
        if (favorites.length > 0) {
            favorites.forEach(e => {
                if (+e.recipeid === +id) {
                    document.getElementById('heart').style.fill = 'red';
                    this.setState({ removeFav: true })
                }
            })
        }
    }

    deleteFavorites = () => {
        let { id } = this.props.match.params;
        this.props.deleteFav(this.props.user.userID, id);
        this.setState({ removeFav: false })
        document.getElementById('heart').style.fill = 'grey';
    }

    render() {
        let { id, img, name, cost, time, rating, serves, ingredients, steps, source, sourceURL, removeFav, userID } = this.state;
        let ingDisplay = []
        if (ingredients) {
            ingDisplay = ingredients.split('*').map((e, i) => {
                if (e !== '') {
                    return (
                        <List key={i}>{i + 1}. {e}</List>
                    )
                }
            })
        }
        let stepDisplay = []
        if (steps) {
            stepDisplay = steps.split('*').map((e, i) => {
                if (e !== '') {
                    return (
                        <List key={i}>{i + 1}. {e}</List>
                    )
                }
            })
        }

        return (
            <Page>
                <AppHeader fixed={true} />
                <Menu fixed={true} />
                <Header>
                    <img className='backpic' src={img} alt={id} />
                    <div className='header-info'>
                        <img className='frontpic' src={img} alt={id} />
                        <BigSection>{name}</BigSection>
                        <FirstInfo>
                            <article>
                                {userID ?
                                    <FavButton onClick={this.heartClick}><SVG id='heart' xmlns='http://www.w3.org/2000/SVG' viewBox='0 0 297.5 259.04'><defs />
                                        <polyline className='heart' points='78.29 78.16 149.73 148.51 219.21 78.16' />
                                        <path className='heart' d='M153.5,262.14,26.31,136.9a78.23,78.23,0,1,1,110-111.29L152,41.06l14.51-14.68A78.23,78.23,0,0,1,278,136.14Z' transform='translate(-3 -3.1)' />
                                    </SVG></FavButton>
                                    :
                                    null
                                }
                                <ul><i className="fas fa-dollar-sign"></i>: {cost}</ul>
                                <ul><i className="fas fa-clock"></i>: {time}</ul>
                                <ul><i className="fas fa-star-half-alt"></i>: {rating}</ul>
                                <ul><i className="fas fa-user"></i>: {serves}</ul>
                                {removeFav ?
                                    <button className='remove-fav' onClick={this.deleteFavorites}>Remove from Favorites</button>
                                    :
                                    null
                                }
                            </article>
                        </FirstInfo>
                    </div>
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
                }} style={{ display: 'flex', width: '100%', textDecoration: 'none', justifyContent: 'center', padding: '50px 0' }}> <RecipeButton> Get Recipes</RecipeButton> </Link>
            </Page>
        )
    }
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        user: state.user,
        favorites: state.favorites
    }
}

export default connect(mapStateToProps, { getRecipes, addFav, getFavs, checkUser, deleteFav })(RecipeDetail);