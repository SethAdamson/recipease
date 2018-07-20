import React, { Component } from 'react';
import styled from 'styled-components'
import { Parallax } from 'react-scroll-parallax';
import RecipeBox from './recipes/RecipeBox';
import ByCategoryBox from './recipes/ByCategoryBox'
import CookingVideo from '../media/14875489.mp4'
import { connect } from 'react-redux';

const Homepage = styled.div`
background-color: #e8e2dc;
`

const Video = styled.video`
    position: relative;
    left: 0;
    margin: 0;
    margin-top: -21vh;
    width: 100vw;
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
`

const Title1 = styled.h2`
    position : relative;
    margin: 0;
    margin-top: 10vh;
    font-family: 'Montserrat', sans-serif;
    color: white;
    z-index:2;
    font-size: 9rem;
    padding-left: 15vw;
`

const Recipes = styled.div`
position: relative;
`

const Img = styled.div`
    background-attachment: fixed;
    background-size: cover ;
    background-position: center;
    background-repeat: no-repeat ;


${props => props.photo1 && `
    background-image: url(${"http://www.delibread.fr/200/mini-pain-aux-raisins.jpg"});
    position: absolute;
    margin-top: -7vh;
    width: 93.5vw;
    height: 90vh;`

    };

${props => props.photo2 && `
    background-image: url(${"http://www.delibread.fr/200/mini-pain-aux-raisins.jpg"});
    position: absolute;
    margin-top: 105vh;
    width: 50vw;
    height: 60vh;`
    };

${props => props.photo3 && `
    background-image: url(${"https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/tbagzeanc4qhrnlanzgi.jpg"});
    position: absolute;
    margin-top: 120vh;
    width: 50vw;
    margin-left: 50vw;
    height: 60vh;`
    };   

${props => props.photo4 && `
    background-image: url(${"https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/tbagzeanc4qhrnlanzgi.jpg"});
    position: absolute;
    width: 50vw;
    margin-top: -6vh;
    height: 55vh;`
    };

${props => props.photo5 && `
    background-image: url(${"https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/tbagzeanc4qhrnlanzgi.jpg"});
    position: absolute;
    width: 50vw;
    margin-top: 61vh;
    margin-left: 50vw;
    height: 55vh;`
    };

 ${props => props.photo6 && `
    background-image: url(${"https://res.cloudinary.com/norgesgruppen/image/upload/c_fill,f_auto,h_574,q_80,w_945/tbagzeanc4qhrnlanzgi.jpg"});
    position: absolute;
    width: 50vw;
    margin-top: 128vh;
    height: 55vh;`
    }; 

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
margin-top: 145vh;
margin-left: 65vw;
`

const ListTitle = styled.h4`
margin-top: 210vh;
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
color: white;
font-size: 1rem;
padding: 3.5% 3%;
border-radius: 50%;
margin: 8vh 44vw;
border : 10px double #e8e2dc;
background-color: #85C1E9;
-webkit-transition: all .5s ease-in-out;
-moz-transition: all .5s ease-in-out;
transition: all .5s ease-in-out;

&:hover {
transform: scale(1.2);
background-color: #2E86C1;
box-shadow: 0px 0px 15px #888888;
}
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

const CategoryBox1 = styled.div` 
float: right;
margin-top: -9.6vh;
`

// const CategoryBox2 = styled.div` 
// float: left;
// margin-top: 59.5vh;
// `

// const CategoryBox3 = styled.div` 
// float: right;
// margin-top: 79.5vh;
// `

const Section = styled.div`
position : relative;
margin-top: 75vh;
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


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe1: {},
            recipe2: {},
            recipe3: {},
            recipe4: {},
            recipe5: {},
            recipe6: {},
        }

    }
    componentDidUpdate(props) {
        if (props.recipes !== this.props.recipes) {
            this.setState({
                recipe1: this.props.recipes[0],
                recipe2: this.props.recipes[1],
                recipe3: this.props.recipes[2],
                recipe4: this.props.recipes[3],
                recipe5: this.props.recipes[4],
                recipe6: this.props.recipes[5]

            })
        }
    }
    render() {
        let { recipes } = this.state
        // let display = recipes.filter(e => {

        // })
        console.log(this.props)
        console.log(this.state)
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
                    <Parallax
                        className="parallax"
                        offsetYMax={'200%'}
                        offsetYMin={'200%'}
                        slowerScrollRate
                        tag="figure"
                    >
                        <Img photo1 className='photo1'>
                        </Img>

                        <RecipeBox1>
                            <RecipeBox />
                        </RecipeBox1>

                        <Img photo2 className='photo2'>
                        </Img>
                        <RecipeBox2>
                            <RecipeBox />
                        </RecipeBox2>

                        <Img photo3 className='photo3'>
                        </Img>
                        <RecipeBox3>
                            <RecipeBox
                                rating={3}
                                prept={3}
                                serves={3}
                                source={'example 3'}
                                name={'example 3'}
                                key={3}
                            />
                        </RecipeBox3>
                    </Parallax>
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

                    <Img photo4>
                    </Img>
                    <CategoryBox1>
                        <ByCategoryBox />
                    </CategoryBox1>

                    {/* <Img photo5>
                    </Img>
                    <CategoryBox2>
                        <ByCategoryBox />
                    </CategoryBox2>

                    <Img photo6>
                    </Img>
                    <CategoryBox3>
                        <ByCategoryBox />
                    </CategoryBox3> */}
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
function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}
export default connect(mapStateToProps)(Home)
