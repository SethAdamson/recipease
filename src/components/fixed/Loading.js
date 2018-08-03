import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import penLogo from '../../media/penLogo.svg';


const Outer = styled.div`
position: fixed;
width: 100vw;
height: 100vh;
background-color: #e1936e;
`

const Load = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
background-color: #F1E4D2 ;
animation-name: slide-down;
animation-duration: 1.5s;
padding: auto;
overflow: hidden;


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
`



function Loading (props) {
    return (
        <Outer>
            <Load>
                <Pen>
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