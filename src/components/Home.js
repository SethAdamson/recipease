import React, { Component } from 'react';
import styled from 'styled-components'
import RecipeBox from './recipes/RecipeBox';
import ByCategoryBox from './recipes/ByCategoryBox'

const HomeHeader = styled.div`
width: 100%;
height: 100vh;
background-color: grey;

> h1 {
    position: relative;
    z-index: 1;
    float: left;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);   
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    background: transparent;
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
}

> video {
    position: absolute;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}
`


export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {

        return (
            <div>
                <HomeHeader>
                    <h1>Recipease</h1>
                    <video
                        autoplay loop
                        id="video-background"
                        muted
                        plays-inline
                        src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761" type="video/mp4">
                    </video>
                </HomeHeader>

                <h2>Recipes</h2>
                <RecipeBox />
                <RecipeBox />
                <RecipeBox />

                <h4>More recipes</h4>
                <RecipeBox />
                <RecipeBox />
                <RecipeBox />

                <button>More Recipes</button>

                <h2>By Categories</h2>
                <ByCategoryBox />
                <ByCategoryBox />
                <ByCategoryBox />

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
            </div>
        )
    }
}

