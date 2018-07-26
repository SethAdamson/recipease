import React, { Component } from 'react';
import styled from 'styled-components';
import maskImage from '../../media/ChefMask.svg';
import { hasScrolled } from '../../ducks/reducer';
import { connect } from 'react-redux';

const Outer = styled.div`
position: absolute;
margin: 0;
top: 0;
left: 0;
height: 105vh;
width: 99.9%;
z-index: 110;
border-left: 1px solid #d3cec3;
overflow: hidden;
`

const MaskView = styled.div`
height: 100%;
width: 100%;
background-image: url(${maskImage});
background-size: cover;
background-position: center;
z-index: 100;
transition: 1s;
transform: ${props => props.type};
`

function Mask(props){
    return (
        <Outer>
            <MaskView type={props.scrolling ? 'scale(1.25)' : 'scale(9)'}/>
        </Outer>
    )
}

function mapStateToProps(state) {
    return {
        scrolling: state.scrolling,
    }
};

export default connect(mapStateToProps)(Mask);
