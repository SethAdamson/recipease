import React, { Component } from 'react';
import styled from 'styled-components';
import maskImage from '../../media/ChefMask.svg';

const Outer = styled.div`
position: fixed;
left: 0;
top: 0
height: 100vh;
width: 100vw;
`

const Mask = styled.div`
position: fixed;
height: 100%;
width: 100%;
ba

img {
    z-index: 1000;
}
`


export default function () {
    return (
        <Outer>
            <Mask>
                <img src={maskImage} alt='mask' />
            </Mask>
        </Outer>
    )
}
