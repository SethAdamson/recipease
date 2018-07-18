import React, { Component } from 'react';
import styled from 'styled-components'
import RecipeBox from './recipes/RecipeBox';
import ByCategoryBox from './recipes/ByCategoryBox'

const Homepage = styled.div`
background-color: #e8e2dc;
`

const HomeHeader = styled.div`
width: 100%;
height: 100vh;
background-color: transparent;

h1 {
    position: relative;
    z-index: 1;
    float: left;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);   
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
}

video {
    position: absolute;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}
`

const Title1 = styled.h2`
    position : relative;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    color: white;
    z-index:2;
    font-size: 9rem;
    padding-left: 20vw;
`

const Recipes = styled.div`
position: relative;
`

const Img1 = styled.img`
src: url(${ props => props.src});
position: absolute;
margin-top: -7vh;
width: 93vw;
height: 90vh;
`

const Img2 = styled.img`
src: url(${ props => props.src});
position: absolute;
width: 50vw;
margin-top: 100vh;
float:left;
`

const Img3 = styled.img`
src: url(${ props => props.src});
position: absolute;
width: 50vw;
margin-top: 110vh;
margin-left: 50vw;
float:right;
`

const RecipeBox1 = styled.div`
position: absolute;
margin-top: 50vh;
margin-left: 55vw;
`

const RecipeBox2 = styled.div`
position: absolute;
margin-top: 130vh;
margin-left: 20vw;
`

const RecipeBox3 = styled.div`
position: absolute;
margin-top: 140vh;
margin-left: 65vw;
`

const ListTitle = styled.h4`
margin-top: 200vh;
margin-left: 10vw;
font-family: Times New Roman;
font-size: 2rem;
`

const RecipeList = styled.div`
margin: auto 10vw;
display: flex;
justify-content: space-around;
margin-top: 2vh;

`

const RecipeButton = styled.button`
text-transform: uppercase;
font-size: 1rem;
padding: 5% 4%;
border-radius: 50%;
margin: 8vh 44vw;
background-color: #ffc277;
`

const Categories = styled.div`
position: relative;
`


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }

    render() {
        return (
            <Homepage>
                <HomeHeader>
                    <h1>Recipease</h1>
                    <video src=""></video>
                </HomeHeader>

                <Title1>Recipes</Title1>
                <Recipes>
                    <div>
                        <Img1
                            src="https://lepetitmondedelilie.files.wordpress.com/2016/12/chouquette-12.jpg?w=1200" alt="" />
                        <RecipeBox1>
                            <RecipeBox />
                        </RecipeBox1>
                    </div>
                    <br />
                    <div>
                        <Img2 src="http://www.planticize.com/wp-content/uploads/2016/04/withAvocado_01_WEB.jpg" alt="" />
                        <RecipeBox2>
                            <RecipeBox />
                        </RecipeBox2>
                    </div>
                    <br />
                    <Img3 src="https://www.simplyrecipes.com/wp-content/uploads/2012/11/vegetarian-lasagna-horiz-a-2000.jpg" alt="" />
                    <RecipeBox3>
                        <RecipeBox />
                    </RecipeBox3>
                </Recipes>


                <ListTitle>
                    More recipes
                </ListTitle>
                <RecipeList>
                    <RecipeBox />
                    <RecipeBox />
                    <RecipeBox />

                </RecipeList>

                <RecipeButton>
                    More
                    <br />
                    Recipes
                </RecipeButton>

                <h2>Categories</h2>
                <Categories>
                    <ByCategoryBox />
                    <ByCategoryBox />
                    <ByCategoryBox />
                </Categories>

                <div>
                    <h2>Classics</h2>
                    <p>Description</p>
                    <button>Learn More</button>
                </div>

                <div>
                    <h2>Seasonal</h2>
                    <p>Description</p>
                    <button>Learn More</button>
                </div>

                <div>
                    <h2>Healthy</h2>
                    <p>Description</p>
                    <button>Learn More</button>
                </div>
            </Homepage >
        )
    }
}

