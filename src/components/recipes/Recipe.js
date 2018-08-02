import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import StarRatings from 'react-star-ratings';
import Ratings from 'react-ratings-declarative';
import Fade from 'react-reveal/Fade';

const Parent = styled.div`
    height: 50vh;
    width: 22vw;
    background: white;
    display: flex;
    flex-direction: column;    
    color: #031D44;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    margin: 3%;
    box-shadow: 0px 0px 15px #888888;
    -webkit-transition: ease-out 0.3s;
    -moz-transition: ease-out 0.3s;
    transition: ease-out 0.3s;

    &:hover {
        transform: scale(1.05);
        color: #e28468;
    }

h2 {
    width: 90%;
    height: 10%;
    margin: auto;
    font-size: 2rem;
    text-align: center;
}

h1 {
    width: 90%;
    height: 25%;
    padding: 8px 0 0 0;
    font-size: 1rem;
    text-align: center;
    vertical-align: center;
    margin: auto;
    letter-spacing: 1px;
    }
}
`

const BGImg = styled.div`
    height: 65%;
    width: 100%;
    background-position: center;
    background-size: cover;
`

export default class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rating: props.rating || 3,
        }
    }

    render() {
        return (
            <Fade bottom>
                <Parent>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: 'row',
                            justifyContent: "center",
                            margin: "2vh auto"
                        }}>
                        <StarRatings
                            rating={this.state.rating}
                            starRatedColor="#e28468"
                            numberOfStars={5}
                            name='rating'
                            starDimension="2.2vw"
                            starSpacing="0.1vw"
                        />
                    </div>
                        <BGImg
                            style={{
                                height: "28vh",
                                imageSize: "contain"
                            }}>
                        </BGImg>
                    <h1>{this.props.name}</h1>
                </Parent>
            </Fade>
        )
    }
}