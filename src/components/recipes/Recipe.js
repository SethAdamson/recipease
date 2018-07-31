import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
import StarRatings from 'react-star-ratings';

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
    height: 15%;
    padding: auto 0;
    font-size: 1rem;
    text-align: center;
    vertical-align: center;
    margin: auto;
    letter-spacing: 1px;
    }
}
`

export default class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {
        let { name, rating } = this.props;

        return (
            <Parent>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "2vh auto"
                    }}>
                    <StarRatings
                        rating={rating}
                        starRatedColor="#e28468"
                        numberOfStars={5}
                        name='rating'
                        starDimension="2.2vw"
                        starSpacing="0.1vw"
                    />
                </div>

                <Parallax
                    bgImage={this.props.img}
                    strenght={1}
                    bgWidth={"22vw"}
                    bgHeight={"34vh"}
                >
                    <div
                        style={{
                            height: "28vh",
                            imageSize: "contain"
                        }}>
                    </div>
                </Parallax>

                <h1>{name}</h1>
            </Parent >
        )
    }
}