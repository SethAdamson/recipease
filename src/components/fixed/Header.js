import React, { Component } from 'react';
import styled from 'styled-components';

const ThinLines = styled.div`
position:fixed;
border-color: #d3cec3;
width: 85vw;
height:100vh;
margin: 0 6.5vw;
border-left: 1px solid #d3cec3;
border-right: 1px solid #d3cec3;
z-index: 100;

`

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {

        return (
            <ThinLines>

            </ThinLines>
        )
    }
}
