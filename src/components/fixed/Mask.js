import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import penMask from '../../media/penMask.svg';

const Outer = styled.div`
position: absolute;
margin: 0;
top: 0;
left: 0;
height: 110vh;
width: 99.9%;
z-index: 110;
border-left: 1px solid #d3cec3;
overflow: hidden;

@media (min-width: 315px) and (max-width: 480px) {
  height: 80vh;
}

`

const MaskView = styled.div`
height: 100%;
width: 100%;
background-image: url(${penMask});
background-size: cover;
background-position: center;
z-index: 100;
transition: .5s;
transform: ${props => props.type};

@media (min-width: 315px) and (max-width: 480px) {
  height: 72vh;
}
`

function Mask(props) {
    return (
        <Outer>
            <MaskView type={props.scrolling ? 'scale(1)' : 'scale(20)'} />
        </Outer>
    )
}

function mapStateToProps(state) {
    return {
        scrolling: state.scrolling,
    }
};

export default connect(mapStateToProps)(Mask);
