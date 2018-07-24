import React, { Component } from 'react';
import styled from 'styled-components';

const SuperParentMakesStickyWorkPieceOfCrap = styled.div`
position: -webkit-sticky;
position:sticky;
top: 40vh;
align-self: flex-start;
z-index: 100;
`
const Parent = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: baseline;
align-content: stretch;
padding: .8vh .5vw;
height: 26.5vh;
width 9vw;
background: white;
`
const Child = styled.div``


export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Dessert: false,
            Appetizer: false,
            MainCourse: false,
            SideDish: false,
            Beverage: false,
            Soup: false,
            Salad: false,
            Pasta: false,
            Spread: false,
            Snack: false,
            Seasoning: false,
        }

    }

    toggleCheckBox(){
       document.getElementsByClassName('checks');
       
      
    }

    render() {

        return (
            <SuperParentMakesStickyWorkPieceOfCrap>
                <Parent>
                    <Child><input id="box1" type="checkbox" className='checks'/> <label for="box1">Dessert</label></Child>
                    <Child><input id="box2" type="checkbox" className='checks'/> <label for="box2">Appetizer</label></Child>
                    <Child><input id="box3" type="checkbox" className='checks'/> <label for="box3">Main Course</label></Child>
                    <Child><input id="box4" type="checkbox" className='checks'/> <label for="box4">Side Dish</label></Child>
                    <Child><input id="box5" type="checkbox" className='checks'/> <label for="box5">Beverage</label></Child>
                    <Child><input id="box6" type="checkbox" className='checks'/> <label for="box6">Soup</label></Child>
                    <Child><input id="box7" type="checkbox" className='checks'/> <label for="box7">Salad</label></Child>
                    <Child><input id="box8" type="checkbox" className='checks'/> <label for="box8">Pasta</label></Child>
                    <Child><input id="box9" type="checkbox" className='checks'/> <label for="box9">Spread</label></Child>
                    <Child><input id="box10" type="checkbox" className='checks'/> <label for="box10">Snack</label></Child>
                    <Child><input id="box11" type="checkbox" className='checks'/> <label for="box11">Seasoning</label></Child>
                </Parent>
            </SuperParentMakesStickyWorkPieceOfCrap>
        )
    }
}
