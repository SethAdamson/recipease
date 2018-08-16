import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import penLogo from '../../media/penLogo.svg';


const Outer = styled.div`
position: fixed;
width: 100vw;
background-color: #e1936e;
animation-name: slide-up;
animation-duration: 2s;
padding: auto;
z-index: 140;

@keyframes slide-up {

from {
height: 100vh;
animation-timing-function: ease-out;
}
50%{
    height: 100vh;
animation-timing-function: ease-out;
}

to {
    height: 0;
    animation-timing-function: ease-in;
}

}
`

const Parent = styled.div`
position: fixed;
width: 100vw;
z-index: 210;
background-color: #e1936e;
`

const Load = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 0;
background-color: #F1E4D2 ;
animation-name: slide-down-back;
animation-duration: 2s;
padding: auto;
overflow: hidden;


@keyframes slide-down-back {

from {
height: 0;
animation-timing-function: ease-out;
}

50% {
    height: 100vh;
    animation-timing-function: ease-in-out;
}

to {
    height: 0;
    animation-timing-function: ease-in;
}

}

@keyframes slide-down {

from {
height: 0;
animation-timing-function: ease-out;
}

to {
    height: 100vh;
    animation-timing-function: ease-in;
}
}
`

const Pen = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 300px;
width: 300px;
border-radius: 50%;
background-color: white;
box-shadow: 0 0 5px rgb(190, 190, 190);
text-shadow: 1px 1px 15px rgb(125, 125, 125);
overflow: hidden;

img {
    height: 80%;
    width: 80%;
}

h1 {
    position: absolute;
    color: white;
}

@keyframes bounce {

from {
margin-bottom: 0;
animation-timing-function: ease-out;
}

20% {
    margin-bottom: 16px;
animation-timing-function: ease-out;
}

20% {
    margin-bottom: 48px;
animation-timing-function: ease-out;
}

20% {
    margin-bottom: 32px;
animation-timing-function: ease-out;
}

20% {
    margin-bottom: 16px;
animation-timing-function: ease-out;
}

to {
    margin-bottom: 0;
    animation-timing-function: ease-in;
}
}
`



function Loading (props) {
    let fixedStyle = {}
    let loadStyle = {}
    let penStyle = {}
    if(props.fixed){
        fixedStyle = {height: '100vh', animationName: 'none', animationDuration: '1.5s'}
        loadStyle = {animationName: 'slide-down', animationDuration: '1.5s', height: '100vh'}
    }
    return (
        <Outer style={fixedStyle}>
            <Load style={loadStyle}>
                <Pen >
                    <img src={penLogo} alt='logo' />
                </Pen>
            </Load>
        </Outer>
    )
}

function mapStateToProps(state) {
    return {
        scrolling: state.scrolling,
    }
};

export default connect(mapStateToProps)(Loading);