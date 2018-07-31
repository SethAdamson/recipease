import React, { Component } from 'react';
import Login from '../user/Login'
import axios from 'axios';
import recipedata from './recipedata';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hasScrolled, checkUser } from '../../ducks/reducer';

let lastScrollY = 0;
let ticking = false;

const MenuLine = styled.div`
    position: fixed;
    height: 110vh;
    width: 6.5vw;
    z-index: 150;
    border-right: 1px solid #A3B7C4;
`

const MenuBox = styled.div`
    position: absolute;
    left: 3vw;
    top: -40vh;
    width: 11vw;
    height: 27vh;
    background-color: white;
    padding: 5vh 0;
    box-shadow: 0px 0px 15px #888888;
    transition: 1s;

    .collapse {
    animation: collapse 0.5s ease forwards;
    }

    .open {
    animation: open 0.5s ease forwards;
    }

    @keyframes collapse {
    from { opacity: 1; top: 0; }
    to { opacity: 0; top: -27vh;  }
    }

    @keyframes open {
    from { opacity: 0; top: -27vh; }
    to { opacity: 1; top: 0; }
    }

    ul {
        margin: 0;
    }

    button {
        padding: 1.8vh 0 1.6vh ;
        text-align: left;
        margin-left: -3vh;
        background-color: white;
        width: 8.7vw;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: 100;
        font-size: 11px;
        letter-spacing: 1.5px;
        border: none;
        outline: none;
        border-bottom: 1px solid lightgrey;
        -webkit-transition: ease-out 0.3s;
        -moz-transition: ease-out 0.3s;
        transition: ease-out 0.3s;

        &:hover {
        box-shadow: inset 0 -5vh 0 0 #DAB785;
        padding-left: 1vw;
    }
}    
`

const Links = styled.a`
    text-decoration: none;
    color: black;
`

const HamburgerMenu = styled.div`

    button {
        position: fixed;
        top: ${props => props.type};
        left: 3vw;
        border-radius: 50%;
        height: 7vw;
        width: 7vw;
        background: white;
        box-shadow: 0 0 10px #031D44;
        outline: none;
        border: none;
        transition: 1s;
    }

    .menu-wrapper {
        top: 30%;
        left: 75%;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 20px;
        height: 2px + 10px*2;
        cursor: pointer;
    }

    .hamburger-menu,
    .hamburger-menu:after,
    .hamburger-menu:before {
        width: 20px;
        height: 2px;
        border-radius: 20%;
        background: #DAB785;

    }

    .hamburger-menu {
        position: relative;
        transition: 0ms;
    }

    .hamburger-menu:before {
        content: "";
        position: absolute;
        left: 0;
        bottom: 6px;
        transition: .25s;
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .hamburger-menu:after {
        content: "";
        position: absolute;
        left: 0;
        top: 6px;
        transition: .25s;
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .active {
        background: white;
    }

    .active:before {
        background: #DAB785; 
        bottom: 0;
        transform: rotate(-45deg);
        transition: .25s;
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        transition: .25s ease-in-out;
    }

    .active:after {
        background: #DAB785; 
        top: 0;
        transform: rotate(45deg);
        transition: .25s;
        -webkit-transition: .25s ease-in-out;
        -moz-transition: .25s ease-in-out;
        -o-transition: .25s ease-in-out;
    }
`

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: recipedata,
            loginToggle: false,
            hamburgerToggle: false
        }
    }
    // === undefined
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        console.log(this.props.user)
        if (!this.props.user) {
            // this.props.checkUser()
            this.setState({ loginToggle: false })
        } else {
            this.setState({ loginToggle: true })
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        lastScrollY = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                ticking = false;
            });
            ticking = true;
        }
        if (lastScrollY >= 100) {
            this.props.hasScrolled(true);
        } else if (lastScrollY < 100) {
            this.props.hasScrolled(false);
        }
    };

    loginToggleFn = () => {
        this.setState({ loginToggle: !this.state.loginToggle });
    }

    hamburgerToggle() {
        this.setState({
            hamburgerToggle: !this.state.hamburgerToggle
        })
    }

    // getSingle = () => {
    //     for(let i = 5; i < 15; i++){
    //         axios.get(`/recipe/random/${i}`).then(res => {
    //             console.log(res);
    //             axios.get('/recipe/lookup/'+ res.data.results[0].id).then(res => {
    //                 this.setState({recipe: res.data})
    //                 this.newRecipe();
    //             })
    //         })
    //     }
    // }

    // newRecipe = () => {
    //     let{recipe} = this.state;
    //     let name = recipe.title;
    //     let steps = recipe.analyzedInstructions.map(s => s.steps.map(e => e.step).join("*")).join("*");
    //     let ingredients = recipe.extendedIngredients.map(i => i.original).join("*");
    //     let rating = recipe.spoonacularScore;
    //         if(rating >= 80) rating = 5;
    //             else if(rating < 80 && rating >= 60) rating = 4;
    //             else if(rating < 60 && rating >= 40) rating = 3;
    //             else if(rating < 40 && rating >= 20) rating = 2;
    //             else rating = 1;
    //     let prepTime = recipe.readyInMinutes;
    //     let servings = recipe.servings;
    //     let cost = Math.floor(recipe.pricePerServing/100);
    //         if(cost >= 10) cost = 3;
    //             else if(cost < 10 && cost > 5) cost = 2;
    //             else cost = 1;
    //     let recipeImg = recipe.image;
    //     let spoonID = recipe.id;
    //     let dishType = recipe.dishTypes.join('*');
    //     let source = recipe.sourceName;
    //     let sourceURL = recipe.sourceUrl;

    //     axios.post('/api/addrecipe', {name, steps, ingredients, rating, prepTime, servings, cost, recipeImg, spoonID, dishType, source, sourceURL})
    //     // console.log(name, steps, ingredients, rating, prepTime, servings, cost, recipeImg, spoonID, dishType, source, sourceURL)
    //     }


    render() {
        let { user } = this.props;
        let { loginToggle } = this.state;
        return (
            <MenuLine>
                <MenuBox className="collapse open" >
                    {/* these links are just a styled a component in case you were wondering */}
                    <Links href='#/recipes'>
                        <ul>
                            <button>
                                Recipes
                            </button>
                        </ul>
                    </Links>

                    <Links href='#/classics'>
                        <ul>
                            <button>
                                Classics
                            </button>
                        </ul>
                    </Links>

                    <Links href='#/seasonal'>
                        <ul>
                            <button>
                                Seasonal
                            </button>
                        </ul>
                    </Links>

                    <Links href='#/healthy'>
                        <ul>
                            <button>
                                Healthy
                            </button>
                        </ul>
                    </Links>

                    {user ?
                        <Link to={`/profile/${user.userID}`} style={{ textDecoration: 'none', color: 'black' }}>
                            <ul>
                                <button>
                                    Profile
                                </button>
                            </ul>
                        </Link>
                        :
                        <ul name='loginToggle' onClick={this.loginToggleFn}>
                            <button>
                                Login / Sign Up
                            </button>
                        </ul>
                    }
                    <Login loginToggle={loginToggle} toggleFn={this.loginToggleFn} />
                    {/* <button className='getSingle' onClick={this.getSingle}>Get Random Recipes</button>
                    {this.state.recipe ? this.state.recipe.title : 'N/A'} */}
                </MenuBox>

                <HamburgerMenu type={this.props.scrolling ? '4vh': '-20vh'}>
                    <button
                        onClick={() => this.hamburgerToggle()}>
                        <div className='menu-wrapper'>
                            {this.state.hamburgerToggle ?
                                <div className='hamburger-menu active'></div>
                                :
                                <div className='hamburger-menu'></div>}
                        </div>
                    </button>
                </HamburgerMenu>



            </MenuLine>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        scrolling: state.scrolling,
    }
}

export default connect(mapStateToProps, { hasScrolled, checkUser })(Menu);