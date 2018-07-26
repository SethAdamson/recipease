import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash'

const SuperParentMakesStickyWorkPieceOfCrap = styled.div`
position: -webkit-sticky;
position: sticky;
top: 5vh;
left: 0;
justify-content: space-between;
margin: 0 auto;
align-self: flex-start;
z-index: 8;
width: 63vw;



}
`
const Parent = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: space-between;
align-items: baseline;
align-content: stretch;
padding: .8vh .5vw;
width: 63vw;
background: white;
box-shadow: 0px 0px 15px #888888;
.checks {
    appearance:none;    
    }

`
const Child = styled.div`
`
const Label = styled.label`

&:hover{
    background:#cdd6d0
}
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
            filtering: false
        }

    }

    
    theCheckBoxChecker = (e) => {
        console.log(e.target.id)
        this.setState({ [e.target.name]: e.target.checked })
        this.props.theGreatFilter(this.props.arraySearch(e.target.checked, +e.target.id))
    }

    filterToggle = () => {
        this.setState({filtering: true});
    }

    render() {
        let {filtering} = this.state;
        return (
            <SuperParentMakesStickyWorkPieceOfCrap onClick={this.filterToggle}>
                {filtering ? 
                    <Parent>
                        <Child><input name="Dessert" id='4' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="4">Dessert</Label></Child>
                        <Child><input name="Appetizer" id='5' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="5">Appetizer</Label></Child>
                        <Child><input name="MainCourse" id='6' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="6">Main Course</Label></Child>
                        <Child><input name="SideDish" id='7' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="7">Side Dish</Label></Child>
                        <Child><input name="Beverage" id='8' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="8">Beverage</Label></Child>
                        <Child><input name="Soup" id='9' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="9">Soup</Label></Child>
                        <Child><input name="Salad" id='10' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="10">Salad</Label></Child>
                        <Child><input name="Pasta" id='11' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="11">Pasta</Label></Child>
                        <Child><input name="Spread" id='12' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="12">Spread</Label></Child>
                        <Child><input name="Snack" id='13' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="13">Snack</Label></Child>
                        <Child><input name="Seasoning" id='14' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /> <Label htmlFor="14">Seasoning</Label></Child>
                    </Parent>
                    :
                    <Parent>
                        <h2>Filter</h2>
                    </Parent>
                }
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