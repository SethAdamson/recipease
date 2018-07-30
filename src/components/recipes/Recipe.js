import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Parallax } from 'react-parallax';
// import { url } from 'inspector';

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
        box-shadow: inset 0 -501px 0 0 #D5896F;
        color: white;
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
    text-shadow: 1px 1px 0.5px #5F8198;
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
                <h2>{rating}</h2>
                {/* <div style={{
                    width: "22vw",
                    height: "28vh",
                    overflow: "hidden",
                    position: "relative"
                }}
                >
                    <div
                        style={{
                            position: "absolute"
                        }}>
                        <img
                            src={this.props.img}
                            style={{
                                position: "fixed"
                            }} />
                    </div>
                </div> */}

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