import React, { Component } from 'react';
import Parallax from 'react-rellax';
import styled from 'styled-components';

const Recipease = styled.h1`

h1 {
    display: flex;
    position: absolute;
    text-shadow: 1px 1px 5px grey;
    z-index: 1;
    float: left;
    top: 48%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    font-family: 'Montserrat', sans-serif;
    background: transparent;
    font-size: 4.5rem;
    text-transform: uppercase;
    letter-spacing: 1rem;
}
`

export default class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {

        return (
            <Recipease>
                <h1>
                    <Parallax speed={0.5}>
                        <span>
                            <strong>R</strong>
                        </span>
                    </Parallax>
                    <Parallax speed={-0.5}>
                        <span>
                            <strong>E</strong>
                        </span>
                    </Parallax>
                    <Parallax speed={1}>
                        <span>
                            <strong>C</strong>
                        </span>
                    </Parallax>
                    <Parallax speed={0}>
                        <span>
                            <strong>I</strong>
                        </span>
                    </Parallax>
                    <Parallax speed={1}>
                        <span>
                            <strong>P</strong>
                        </span>
                    </Parallax>
                    <Parallax speed={0.5}>
                        <span>
                            <strong>E</strong>
                        </span>
                    </Parallax>
                    <Parallax speed={-0.5}>
                        <span>
                            <strong>A</strong>
                        </span>
                    </Parallax>
                    <Parallax speed={1}>
                        <span>
                            <strong>S</strong>
                        </span>
                    </Parallax>
                    <Parallax speed={0}>
                        <span>
                            <strong>E</strong>
                        </span>
                    </Parallax>
                </h1>
            </Recipease>
        )
    }
}