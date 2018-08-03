import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';


const Outer = styled.div`
display: fixed;
width: 100vw;
height: 100vh;
background-color: grey;
`

const Load = styled.div`
display: fixed;
width: 100vw;
background-color: blue;
animation-name: slide-down;
animation-duration: 1.5s;

@keyframes slide-down {

from {
height: 0;
animation-timing-function: ease-in-out;
}

to {
    height: 100vh;
    animation-timing-function: ease-in-out;
}

}
`



function Loading (props) {
    return (
        <Outer>
            <Load />
        </Outer>
    )
}

function mapStateToProps(state) {
    return {
        scrolling: state.scrolling,
    }
};

export default connect(mapStateToProps)(Loading);