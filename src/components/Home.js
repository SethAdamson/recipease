import React, { Component } from 'react';
import styled from 'styled-components'
import RecipeBox from './recipes/RecipeBox';
import ByCategoryBox from './recipes/ByCategoryBox'
import CookingVideo from '../14875489.mp4'

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
    padding-left: 15vw;
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

const Title2 = styled.h2`
position : relative;
margin: 0;
font-family: 'Montserrat', sans-serif;
color: white;
z-index:2;
font-size: 9rem;
padding-left: 15vw;
padding-top: 10vh;
`

const Img4 = styled.img`
src: url(${ props => props.src});
position: absolute;
width: 50vw;
margin-top: -8vh;
height: 55vh;
`

const Img5 = styled.img`
src: url(${ props => props.src});
position: absolute;
width: 50vw;
margin-top: 60vh;
margin-left: 50vw;
height: 55vh;
`

const Img6 = styled.img`
src: url(${ props => props.src});
position: absolute;
width: 50vw;
margin-top: 128vh;
height: 55vh;
margin-left: -50vw;
`

const CategoryBox1 = styled.div` 
float: right;
margin-top: -9.6vh;
`

const CategoryBox2 = styled.div` 
float: left;
margin-top: 58.5vh;
`

const CategoryBox3 = styled.div` 
float: right;
margin-top: 79.5vh;
`

const Section = styled.div`
position : relative;
margin-top: 210vh;
`

const Img7 = styled.img`
src: url(${ props => props.src});
width: 100vw;
height: 100vh;
opacity: 0.9;
`

const Img8 = styled.img`
src: url(${ props => props.src});
width: 100vw;
height: 100vh;
opacity: 0.9;
`

const Img9 = styled.img`
src: url(${ props => props.src});
width: 100vw;
height: 100vh;
opacity: 0.9;
`

const SectionTitle = styled.h2`
position: absolute;
z-index: 3;
font-family: 'Montserrat', sans-serif;
font-size: 10rem;
color: white;
margin: -80vh 20vw;

${props => props.secondh2 && 'margin: -78vh 20vw ;'}
${props => props.thirdh2 && 'margin: 78vhvh 20vw ;'}
`

const SecDesc = styled.p`
position: absolute;
font-family: 'Montserrat', sans-serif;
margin: -50vh 0 0 20vw;
font-size: 3rem;
color: white;
`

const SecButton = styled.button`
position: absolute;
margin: 71vh 0 0 -80vw;
text-transform: uppercase;
font-weight: 200;
color: black;
border: 1px solid lightgrey;
width: 20%;
padding: 20px;
letter-spacing: 0.2vw;
`

const Video = styled.video`
    position: absolute;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
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

                    <Video autoPlay='true' loop muted>
                        <source src={CookingVideo} type='video/mp4' />
                    </Video>

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

                <Title2>Categories</Title2>
                <Categories>
                    <Img4 src="https://www.monpetitfour.com/wp-content/uploads/2015/04/croissants-1-copy.jpg" alt="" />
                    <CategoryBox1>
                        <ByCategoryBox />
                    </CategoryBox1>
                    <Img5 src="https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/tbagzeanc4qhrnlanzgi.jpg" alt="" />
                    <CategoryBox2>
                        <ByCategoryBox />
                    </CategoryBox2>
                    <Img6 src="https://www.interiale.fr/prevention/media/2017/10/shutterstock_519817276-768x512.jpg" alt="" />
                    <CategoryBox3>
                        <ByCategoryBox />
                    </CategoryBox3>
                </Categories>

                <Section>
                    <div>
                        <Img7 src="http://blog.ossogoodbones.com/wp-content/uploads/2017/08/shutterstock_323139527.jpg" alt="" />
                        <SectionTitle>Classics</SectionTitle>
                        <SecDesc>Description</SecDesc>
                        <SecButton>Learn More</SecButton>
                    </div>

                    <div>
                        <Img8 src="https://cdn.shopify.com/s/files/1/0276/7495/files/healthy-lifestyle-1.jpg?13882323012555101936" alt="" />
                        <SectionTitle secondh2>
                            Seasonal
                        </SectionTitle>
                        <SecDesc>Description</SecDesc>
                        <SecButton>Learn More</SecButton>
                    </div>

                    <div>
                        <Img9 src="https://cdnexpatwomanfood.expatwoman.com/s3fs-public/healthy.jpg" alt="" />
                        <SectionTitle thirdh2>
                            Healthy
                        </SectionTitle>
                        <SecDesc>Description</SecDesc>
                        <SecButton>Learn More</SecButton>
                    </div>
                </Section>
            </Homepage >
        )
    }
}

