import React, { Component } from 'react';
import recipedata from './recipedata';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { hasScrolled, checkUser } from '../../ducks/reducer';
import LoginMenu from '../user/Login';
import penLogo from '../../media/penLogo.svg';

let lastScrollY = 0;
let ticking = false;

const MenuLine = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 110vh;
    width: 6.5vw;
    z-index: 150;
    border-right: 1px solid #A3B7C4;

    @media (max-width: 900px){
    z-index: 150;
    width: 40px;
}
`

const MenuBox = styled.div`
    position: absolute;
    left: 2vw;
    top: ${props => props.type};
    width: 15vw;
    background-color: white;
    padding: 5vh 0;
    box-shadow: 0px 0px 15px #888888;
    transition: 1s;
    z-index: 160;

    ul {
        margin: 0;
        width: 90%;
    }

    button {
        padding: 1.8vh 0 1.6vh ;
        text-align: left;
        margin-left: -3vh;
        background-color: white;
        width: 90%;
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

@media (max-width: 900px){
    left: 0;
    width: 100vw;
    z-index: 350;

button {
    width: 100%;
}
}

`

const MobileLogo = styled.div`
display: none;

@media (max-width: 900px){
    display: flex;
    width: 100%;
    justify-content: center;
    z-index: 300;

div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    height: 75px;
    width: 75px;
    margin-bottom: 3vh;
    background: white;
    box-shadow: 0 0 5px rgb(190, 190, 190);
    transition: 1s;

&:hover {
    -webkit-transform:scale(1.08);
    -moz-transform:scale(1.08);
    -ms-transform:scale(1.08);
    -o-transform:scale(1.08);
    transform: scale(1.08);
    }
}
img {
    height: 75%;
    width: 75%;
    margin: auto;
}
}
`

const Links = styled.a`
    text-decoration: none;
    color: black;
`

const HamburgerMenu = styled.div`
z-index: 155;

    button {
        position: fixed;
        top: ${props => props.name};
        left: 3.5vw;
        border-radius: 50%;
        height: 6vw;
        width: 6vw;
        background: white;
        box-shadow: 0 0 5px rgb(190, 190, 190);
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

    @media (max-width: 900px){
        button {
            z-index: 300;
            left: 15px;
            height: 50px;
            width: 50px;
        }
    }
`

const LoginExt = styled.div`
margin-left: -1.5vw;

h5 {
    padding-top: 1.8vh;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 11px;
    letter-spacing: 1.5px;
}

input {
    outline: none;
    border: none;
    border: 1px solid lightgray;
    width: 80%;
}

button {
    padding: 1.8vh 0 1.6vh;
    text-align: left;
    margin-left: -3vh;
    background-color: white;
    width: 90%;
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

.button2 {
    margin-left: 30%;
    margin-top: 2vh;
    width: 2vw;
    height: 2vw;
    border-radius: 50%;
    border: 1px solid lightgray;
    text-align: center;
    transition: ease-out 0.1s;
    padding: 1vh 0 1vh 0.1vw;

        &:hover {
        padding-left: 0 !important;
}
}

a {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 100;
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
}
`

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: recipedata,
            loginToggle: false,
            hamburgerToggle: false,
            menuToggle: false,
            username: '',
            email: '',
            password: '',
            error: '',
            loggedIn: '',
            register: false,
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        let {profToggle} = this.props;
        this.setState({ loginToggle: false })
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

    hamburgerToggle = () => {
        this.setState({
            hamburgerToggle: !this.state.hamburgerToggle,
            menuToggle: !this.state.menuToggle,
            loginToggle: false,
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
        let { user, scrolling, profToggle } = this.props;
        let { loginToggle, menuToggle} = this.state;
        return (
            <MenuLine>
                <MenuBox type={menuToggle ? '0' : '-60vh'}>
                <MobileLogo>
                    <Link to='/' replace>
                        <div>
                            <img src={penLogo}/>
                        </div>
                    </Link>
                </MobileLogo>
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
                        <ul name='loginToggle' style={{ margin: '0', width: '90%' }}>
                            <button onClick={this.loginToggleFn}>
                                Login / Sign Up
                            </button>
                            {
                                !this.state.loginToggle
                                    ?
                                    null
                                    :
                                    <LoginMenu loginToggleFn={this.loginToggleFn} />
                            }
                        </ul>
                    }
                    <ul>
                        <button onClick={this.hamburgerToggle}>Close Menu</button>  
                    </ul>
                    {/* <Login loginToggle={loginToggle} toggleFn={this.loginToggleFn} />
                    <button className='getSingle' onClick={this.getSingle}>Get Random Recipes</button>
                    {this.state.recipe ? this.state.recipe.title : 'N/A'} */}
                </MenuBox>

                <HamburgerMenu name={this.props.fixed? '4vh' : scrolling ? '4vh' : '-20vh'}>
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
        profToggle: state.profToggle,
        scrolling: state.scrolling
    }
}

export default connect(mapStateToProps, { hasScrolled, checkUser })(Menu);