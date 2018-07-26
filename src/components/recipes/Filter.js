import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash'

const SuperParentMakesStickyWorkPieceOfCrap = styled.div`
position: -webkit-sticky;
position:sticky;
top: 40vh;
align-self: flex-start;
z-index: 100;
width 9vw;
`
const Parent = styled.div`
display: flex;
flex-direction: column;
flex-wrap: nowrap;
justify-content: flex-start;
align-items: baseline;
align-content: stretch;
padding: .8vh .5vw;
width: 9vw;
background: white;
`
const Child = styled.div`

`

class Filter extends Component {
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
    theCheckBoxChecker = (e) => {
        console.log(e.target.id)
        this.setState({ [e.target.name]: e.target.checked })
        this.props.theGreatFilter(this.props.arraySearch(e.target.checked, +e.target.id))
    }
    render() {
        return (
            <SuperParentMakesStickyWorkPieceOfCrap>
                <Parent>
                    <Child><input name="Dessert" id='4' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box1">Dessert</label></Child>
                    <Child><input name="Appetizer" id='5' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box2">Appetizer</label></Child>
                    <Child><input name="MainCourse" id='6' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box3">Main Course</label></Child>
                    <Child><input name="SideDish" id='7' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box4">Side Dish</label></Child>
                    <Child><input name="Beverage" id='8' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box5">Beverage</label></Child>
                    <Child><input name="Soup" id='9' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box6">Soup</label></Child>
                    <Child><input name="Salad" id='10' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box7">Salad</label></Child>
                    <Child><input name="Pasta" id='11' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box8">Pasta</label></Child>
                    <Child><input name="Spread" id='12' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box9">Spread</label></Child>
                    <Child><input name="Snack" id='13' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box10">Snack</label></Child>
                    <Child><input name="Seasoning" id='14' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <label htmlFor="box11">Seasoning</label></Child>
                </Parent>
            </SuperParentMakesStickyWorkPieceOfCrap>
        )
    }
}

function mapStateToProps(state) {
    return {
        byCategory: state.byCategory
    }
}

export default connect(mapStateToProps)(Filter)