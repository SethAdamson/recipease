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

width 9vw;
background: white;
`
const Child = styled.div`

`



export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Dessert: false, //4
            Appetizer: false, //5
            MainCourse: false, //6
            SideDish: false, //7
            Beverage: false, //8
            Soup: false, //9
            Salad: false, //10
            Pasta: false, //11
            Spread: false, //12
            Snack: false, //13
            Seasoning: false, //14
        }

    }

   

    render() {
        console.log(this.state,'ITS DA STATE OF DA POLICE')
        return (
            <SuperParentMakesStickyWorkPieceOfCrap>
                <Parent>
                    <Child><input id="Dessert" type="checkbox" className='checks' onClick={ (e) => { this.setState({Dessert: !this.state.Dessert})}} /> <label for="box1">Dessert</label></Child>
                    <Child><input id="Appetizer" type="checkbox" className='checks' onClick={ (e) => { this.setState({Appetizer: !this.state.Appetizer})}} /> <label for="box2">Appetizer</label></Child>
                    <Child><input id="MainCourse" type="checkbox" className='checks' onClick={ (e) => { this.setState({MainCourse: !this.state.MainCourse})}}/> <label for="box3">Main Course</label></Child>
                    <Child><input id="SideDish" type="checkbox" className='checks' onClick={ (e) => { this.setState({SideDish: !this.state.SideDish})}}/> <label for="box4">Side Dish</label></Child>
                    <Child><input id="Beverage" type="checkbox" className='checks' onClick={ (e) => { this.setState({Beverage: !this.state.Beverage})}}/> <label for="box5">Beverage</label></Child>
                    <Child><input id="Soup" type="checkbox" className='checks' onClick={ (e) => { this.setState({Soup: !this.state.Soup})}}/> <label for="box6">Soup</label></Child>
                    <Child><input id="Salad" type="checkbox" className='checks' onClick={ (e) => { this.setState({Salad: !this.state.Salad})}}/> <label for="box7">Salad</label></Child>
                    <Child><input id="Pasta" type="checkbox" className='checks' onClick={ (e) => { this.setState({Pasta: !this.state.Pasta})}}/> <label for="box8">Pasta</label></Child>
                    <Child><input id="Spread" type="checkbox" className='checks' onClick={ (e) => { this.setState({Spread: !this.state.Spread})}}/> <label for="box9">Spread</label></Child>
                    <Child><input id="Snack" type="checkbox" className='checks' onClick={ (e) => { this.setState({Snack: !this.state.Snack})}}/> <label for="box10">Snack</label></Child>
                    <Child><input id="Seasoning" type="checkbox" className='checks' onClick={ (e) => { this.setState({Seasoning: !this.state.Seasoning})}}/> <label for="box11">Seasoning</label></Child>
                </Parent>
            </SuperParentMakesStickyWorkPieceOfCrap>
        )
    }
}
