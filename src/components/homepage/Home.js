import React, { Component } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick';
import { Parallax } from 'react-parallax';
import Header from '../fixed/Header';
import Title from './Title';
import RecipeB1 from './RecipeB1';
import RecipeB2 from './RecipeB2';
import RecipeB3 from './RecipeB3';
import Starter from './Starter';
import MainCourse from './MainCourse';
import Dessert from './Dessert';
import CookingVideo from './../../media/BurgerVideo.mp4'
import { connect } from 'react-redux';
import Recipe1 from './../../media/quiche.jpg';
import Recipe2 from './../../media/cookie.jpg';
import Recipe3 from './../../media/pizza.jpg';
import StarterPic from './../../media/starter.jpg';
import MainCoursePic from './../../media/maincourse.jpg';
import DessertPic from './../../media/dessert.jpg';
import Cookin from './../../media/cookin.jpg';
import Pancakes from './../../media/pancakes.jpg';
import Vegetables from './../../media/vegetables.jpg';
import Mask from '../fixed/Mask';
import { Link } from 'react-router-dom';
import RecipeSingle from '../recipes/Recipe';
import Menu from '../fixed/Menu';
import Loading from '../fixed/Loading';
import Fade from 'react-reveal/Fade';


const Homepage = styled.div`
background-color: #F1E4D2;
overflow: hidden;

@media (min-width: 315px) and (max-width: 480px) {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: stretch;
  align-content: center;
}

`
// #endregion
// #region Video
const Video = styled.video`
width: 100%;

@media (min-width: 315px) and (max-width: 480px) {
    display: none;
}
`

const HeaderImg = styled.div`
img {
display: none;

@media (min-width: 315px) and (max-width: 480px) {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
}
}
`

// #endregion
// #region HomeHeader
const HomeHeader = styled.div`
width: 100vw;
height: 110vh;
background-color: transparent;
overflow: hidden;

@media (min-width: 315px) and (max-width: 480px) {
  height: 80vh;
}
`
// #endregion
// #region Title1
const Title1 = styled.h2`
    position : absolute;
    text-shadow: 1px 1px 15px rgb(125, 125, 125);
    background-attachment: fixed;
    margin: 0;
    margin-top: 6%;
    font-family: 'Montserrat', sans-serif;
    color: white;
    font-size: 9rem;
    padding-left: 15vw;
    z-index:2;

    @media (min-width: 315px) and (max-width: 480px) {
        font-size: 4em;
        position: initial;
        margin-top: 0vh;
    }
    `
// #endregion
// #region Recipes
const Recipes = styled.div`
position: relative;

.RBox1 {
    @media (min-width: 315px) and (max-width: 480px) {
    margin-top: -2.5vh !important;
    }

    .RECIPE1 {
        div { 
            @media (min-width: 315px) and (max-width: 480px) {
            height: 50vh;
            overflow: hidden;
            }
        }
    }
}

.RBox2 {
    @media (min-width: 315px) and (max-width: 480px) {
    margin-top: 50vh !important;
    margin-left: 6.3vw !important;
    }

    .RECIPE2 {
        div { 
            @media (min-width: 315px) and (max-width: 480px) {  
            height: 50vh;
            width: 93.3vw;
            overflow: hidden;
            }
        }
    }
}

.RBox3 {
    @media (min-width: 315px) and (max-width: 480px) {
    margin-top: 102.5vh !important;
    margin-left: 0 !important;
    }

    .RECIPE3 {
        div { 
            @media (min-width: 315px) and (max-width: 480px) {
            height: 50vh;
            width: 93.3vw;
            overflow: hidden;
            }
        }
    }
}
`
// #endregion
// #region RecipeBox1
const RecipeBox1 = styled.div`
position: absolute;
margin-top: 90vh;
margin-left: 55vw;
z-index:10;

@media (min-width: 315px) and (max-width: 480px) {
    margin-top: 9vh !important;
    margin-left: 55vw;
    }

`
// #endregion
// #region RecipeBox2
const RecipeBox2 = styled.div`
position: absolute;
top: 180vh;
margin-left: 20vw;
z-index:10;

@media (min-width: 315px) and (max-width: 480px) {
    margin-top: -121.5vh !important;
    margin-left: 55vw;
    }
`
// #endregion
// #region RecipeBox3
const RecipeBox3 = styled.div`
position: absolute;
top: 190vh;
margin-left: 65vw;
z-index:10;

@media (min-width: 315px) and (max-width: 480px) {
    margin-top: -78.5vh !important;
    margin-left: 55vw;
    }
`
// #endregion
// #region ListTitle
const ListTitle = styled.h4`
margin-top: 261vh;
margin-bottom: 2vh;
margin-left: 15vw;
font-family: 'Playfair Display', serif;
font-size: 3rem;
color: #031D44;

@media (min-width: 315px) and (max-width: 480px) {
    margin-top: 160vh;
    font-size: 1.5rem;
    }
`
// #endregion
// #region RecipeList
const RecipeList = styled.div`
margin: 0 10vw;
display: flex;
justify-content: space-around;

@media (min-width: 315px) and (max-width: 480px) {
    display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
    }
`
// #endregion
// #region RecipeButton
const RecipeButton = styled.button`
text-transform: uppercase;
box-shadow: 0px 0px 15px #888888;
margin-top: 5vh;
color: white;
text-align: center;
outline: none;
font-size: 1rem;
height: 200px;
width: 200px;
border-radius: 50%;
margin-top: 50px;
border : 10px double #e8e2dc;
background-color: #DAB785;
-webkit-transition: all .5s ease-in-out;
-moz-transition: all .5s ease-in-out;
transition: all .5s ease-in-out;

@media (min-width: 315px) and (max-width: 480px) {
    font-size: 0.6rem;
    height: 100px;
    width: 100px;
    }

&:hover {
transform: scale(1.2);
background-color: #D5896F;
}
`
// #endregion
// #region Categories
const Categories = styled.div`
position: relative;

@media (min-width: 315px) and (max-width: 480px) {
    display: none;
}

img {
    position: relative;
    left: 0px;
    width: 49.9vw;
    height: 60vh;
    z-index: 1;
    margin: 26vh 0;
    box-shadow: 1px 1px 5px grey;
    opacity: 0.9;
}
`
// #endregion
// #region Title2
const Title2 = styled.h2`
position : absolute;
text-shadow: 1px 1px 15px rgb(125, 125, 125);
margin: 0%;
font-family: 'Montserrat', sans-serif;
color: white;
z-index:2;
font-size: 9rem;
padding-left: 15vw;
padding-top: 10.5vh;

@media (min-width: 315px) and (max-width: 480px) {
    display: none;
}
`
// #endregion
// #region CategoryBox
const CategoryBox = styled.div` 
position: absolute;
float: right;
margin: -87vh ;
background-color: #F1E4D2;

@media (min-width: 315px) and (max-width: 480px) {
        font-size: 4em;
        position: initial;
}

article {
    margin: 6vh;
}
`
// #endregion
// #region Section
const Section = styled.div`
position : relative;
width: 100vw;
`

// #endregion 
// #region SectionTitle
const SectionTitle = styled.h2`
position: absolute;
width: 100%;
text-align: center;
font-family: 'Montserrat', sans-serif;
text-shadow: 1px 1px 15px rgb(125, 125, 125);
z-index: 3;
font-size: 10rem;
color: white;
margin: -80vh 0;
padding: 0 auto;

@media (min-width: 315px) and (max-width: 480px) {
    font-size: 4rem;
    margin-top: -42vh;
}
`
// #endregion
// #region SecDesc
const SecDesc = styled.p`
position: absolute;
text-align: center;
padding: 0 10vw;
text-shadow: 1px 1px 15px rgb(125, 125, 125);
font-family: 'Playfair Display', serif;
margin: -50vh 0;
font-size: 2rem;
color: white;

@media (min-width: 315px) and (max-width: 480px) {
    margin: -62vh 0;
    font-size: 1.25rem;
    margin-top: -30vh;
}
`
// #endregion
// #region SecButton
const SecButton = styled.button`
position: absolute;
z-index: 100;
margin-top: -30vh;
margin-left: 40vw;
background-color: #DAB785;
text-transform: uppercase;
font-weight: 400;
color: black;
border: 1px solid lightgrey;
width: 20%;
padding: 20px;
letter-spacing: 0.2vw;
-webkit-transition: ease-out 0.5s;
-moz-transition: ease-out 0.5s;
transition: ease-out 0.5s;

@media (min-width: 315px) and (max-width: 480px) {
margin-top: -12vh;
margin-left: 35vw;
width: 30%;
padding: 10px;
font-size: 10px
}

&:hover {
    box-shadow: inset 0 -100px 0 0 #D5896F;
}
`

const ImgSec = styled.div`
@media (min-width: 315px) and (max-width: 480px) {
    width: 100vw !important;
    height: 50vh !important;
}
`

// #endregion
// #region NextArrow
const NextArrow = styled.div`
margin: 29vh 49vw;
box-shadow: 1px 1px 5px grey;
z-index:10;
background: white;
height: 43px !important;
width: 43px !important;
border-radius: 50%;
border: none;

&:hover {
    background: white;
    height: 43px !important;
    width: 43px !important;
}

&:before, :after {
    content: "⇾" !important;
    color: black;
    margin: 0 1vw;
    line-height: 1.9 !important;
}
`
// #endregion
// #region PrevArrow
const PrevArrow = styled.div`
margin: 34vh 47vw;
box-shadow: 1px 1px 5px grey;
z-index:10;
background: white;
height: 43px;
width: 43px;
border-radius: 50%;
border: none;

&:hover {
    background: white;
    height: 43px !important;
    width: 43px !important;
}

&:before, :after {
    content: "⇽" !important;
    color: black;
    margin: 0 1vw;
    line-height: 1.8 !important;
}
`

// #endregion
// #endregion
class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        let { recipes } = this.props

        const settings = {
            arrows: true,
            infinite: true,
            speed: 3000,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
        }

        let displayFilter = [];
        if (recipes) {
            displayFilter = recipes.filter(e => e.recipeid === 433 || e.recipeid === 62 || e.recipeid === 173).map(e => {
                return (
                    <Link to={`/detail/${e.recipeid}`} style={{ textDecoration: 'none', color: 'black' }} key={e.recipeid}>
                        <RecipeSingle
                            rating={e.rating}
                            name={e.name}
                            img={e.img}
                        />
                    </Link>
                )
            })
        }

        return (
            <Homepage>
                <Loading />
                <Mask />
                <Header />
                <Menu />
                <HomeHeader>
                    <Title />

                    <Video autoPlay='true' loop muted>
                        {/* <Transition> 

                    <ChefTransition/>
                    </Transition> */}
                        <source src={CookingVideo} type='video/mp4' />
                    </Video>
                    <HeaderImg>
                        <img src="https://files.slack.com/files-pri/T039C2PUY-FC9HZ2C2D/image.png" alt="" />
                    </HeaderImg>
                </HomeHeader>


                <Title1>Recipes</Title1>

                <Recipes>

                    <div className="RBox1"
                        style={{
                            marginTop: "26.5vh",
                            position: "absolute",
                            boxShadow: "1px 1px 5px grey",
                            opacity: "0.9",

                        }}>
                        <Parallax className="RECIPE1"
                            bgImage={Recipe1}
                            strength={150}
                        >
                            <div style={{
                                height: "90vh",
                                width: "92vw",
                                overflow: "hidden",
                                backgroundAttachment: "cover"
                            }}></div>
                        </Parallax>
                    </div>

                    <RecipeBox1>
                        <RecipeB1 />
                    </RecipeBox1>

                    <div className="RBox2"
                        style={{
                            marginTop: "130vh",
                            position: "absolute",
                            boxShadow: "1px 1px 5px grey",
                            opacity: "0.9"
                        }}>
                        <Parallax className="RECIPE2"
                            bgImage={Recipe2}
                            strength={150}
                        >
                            <div style={{
                                height: "60vh",
                                width: "50vw",
                                overflow: "hidden",
                                backgroundAttachment: "cover",
                                backgroundPosition: "top"
                            }}></div>
                        </Parallax>
                    </div>

                    <RecipeBox2>
                        <RecipeB2 />
                    </RecipeBox2>

                    <div className="RBox3"
                        style={{
                            marginTop: "140vh",
                            marginLeft: "50vw",
                            position: "absolute",
                            boxShadow: "1px 1px 5px grey",
                            opacity: "0.9"
                        }}>
                        <Parallax className="RECIPE3"
                            bgImage={Recipe3}
                            strength={150}
                        >
                            <div style={{
                                height: "60vh",
                                width: "50vw",
                                overflow: "hidden",
                                backgroundAttachment: "cover",
                                backgroundPosition: "top"
                            }}></div>
                        </Parallax>
                    </div>
                    <RecipeBox3>
                        <RecipeB3 />
                    </RecipeBox3>

                </Recipes >


                <ListTitle>
                    More recipes
                </ListTitle>
                <RecipeList>
                    {displayFilter}
                </RecipeList>
                <div style={{ display: 'flex', height: '200px', width: '100%', textDecoration: 'none', justifyContent: 'center' }}>
                    <Link to={"/recipes"}>
                        <RecipeButton>
                            More
                        <br />
                            Recipes
                        </RecipeButton>
                    </Link>
                </div>
                <Title2>Courses</Title2>
                <Categories>
                    <Slider {...settings}>

                        <div>
                            <img
                                src={StarterPic}
                                alt=''
                            />
                            <CategoryBox>
                                <Dessert />
                            </CategoryBox>
                        </div>
                        <div>
                            <img
                                src={MainCoursePic}
                                alt=''
                            />
                            <CategoryBox>
                                <Starter />
                            </CategoryBox>
                        </div>
                        <div>
                            <img
                                src={DessertPic}
                                alt=''
                            />
                            <CategoryBox>
                                <MainCourse />
                            </CategoryBox>
                        </div>
                    </Slider>

                </Categories>

                <Section>
                    <div>
                        <Parallax
                            bgImage={Pancakes}
                            strength={150}
                        >
                            <ImgSec
                                style={{
                                    boxSshadow: "1px 1px 5px grey",
                                    width: "100vw",
                                    height: "100vh",
                                    opacity: "0.25",
                                    background: "#816852"
                                }} >
                            </ImgSec>
                        </Parallax>
                        <Fade bottom>
                            <SectionTitle firsth2>
                                Classics
                        </SectionTitle>
                        </Fade>
                        <Fade bottom>
                            <SecDesc>Take a nostalgic trip to back to your childhood with our collection of classic recipes from home.</SecDesc>
                        </Fade>
                        <Fade bottom>
                            <Link to={"/classics"}>
                                <SecButton>
                                    Learn More
                            </SecButton>
                            </Link>
                        </Fade>
                    </div>
                    <div>
                        <Parallax
                            bgImage={Vegetables}
                            strength={150}
                        >
                            <ImgSec
                                style={{
                                    boxSshadow: "1px 1px 5px grey",
                                    width: "100vw",
                                    height: "100vh",
                                    opacity: "0.25",
                                    background: "#816852"
                                }} >
                            </ImgSec>
                        </Parallax>
                        <Fade bottom>
                            <SectionTitle secondh2>
                                Seasonal
                        </SectionTitle>
                        </Fade>
                        <Fade bottom>
                            <SecDesc>Fruit, vegetables, meat and fish tastes best with it's in season and at its peak! Find the perfect recipe to fit.</SecDesc>
                        </Fade>
                        <Fade bottom>
                            <Link to={"/seasonal"}>
                                <SecButton>
                                    Learn More
                            </SecButton>
                            </Link>
                        </Fade>
                    </div>
                    <div>
                        <Parallax
                            bgImage={Cookin}
                            strength={150}
                        >
                            <ImgSec
                                style={{
                                    boxSshadow: "1px 1px 5px grey",
                                    width: "100vw",
                                    height: "100vh",
                                    opacity: "0.25",
                                    background: "#816852"
                                }} >
                            </ImgSec>
                        </Parallax>
                        <Fade bottom>
                            <SectionTitle thirdh2>
                                Healthy
                        </SectionTitle>
                        </Fade>
                        <Fade bottom>
                            <SecDesc>Healthy meals packed with flavour, crunch and punch! Explore our healthy recipes, meal ideas and more.</SecDesc>
                        </Fade>
                        <Fade bottom>
                            <Link to={"/healthy"}>
                                <SecButton>
                                    Learn More
                            </SecButton>
                            </Link>
                        </Fade>
                    </div>
                </Section>
            </Homepage >
        )
    }
}
function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        loading: state.loading
    }
}
export default connect(mapStateToProps)(Home)
