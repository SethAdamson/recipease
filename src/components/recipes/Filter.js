import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash'

const SuperParentMakesStickyWorkPieceOfCrap = styled.div`
position: -webkit-sticky;
position: sticky;
top: 5vh;
margin-left: 15.5vw;
align-items: center;
align-content: center;
z-index: 8;
width: 70.3vw;
`

const Parent = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
height:100%;
background: white;
box-shadow: 0px 0px 15px #888888;
padding-left: 2vw;

.checks {
    appearance:none;    
    }
`
const Child = styled.div`
height: 6vh;
line-height: 6vh;
font-weight: 100;
padding: 0 0.9vw 0 0.6vw;

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
        this.setState({ filtering: true });
    }

    render() {
        let { filtering, Dessert, Appetizer, MainCourse, SideDish, Beverage, Soup, Salad, Pasta, Spread, Snack, Seasoning } = this.state;
        return (
            <SuperParentMakesStickyWorkPieceOfCrap onClick={this.filterToggle}>
                {filtering ?
                    <Parent>
                        <Child style={{ backgroundColor: Dessert ? '#304666' : null }}><input name="Dessert" id='4' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="4">Dessert</label></Child>
                        <Child style={{ backgroundColor: Appetizer ? '#475A77' : null }}><input name="Appetizer" id='5' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="5">Appetizer</label></Child>
                        <Child style={{ backgroundColor: Seasoning ? '#8CA5B5' : null }}><input name="Seasoning" id='14' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="14">Seasoning</label></Child>
                        <Child style={{ backgroundColor: MainCourse ? '#486857' : null }}><input name="MainCourse" id='6' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="6">Main Course</label></Child>
                        <Child style={{ backgroundColor: Salad ? '#5C8570' : null }}><input name="Salad" id='10' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="10">Salad</label></Child>
                        <Child style={{ backgroundColor: SideDish ? '#A4C3B3' : null }}><input name="SideDish" id='7' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="7">Side Dish</label></Child>
                        <Child style={{ backgroundColor: Beverage ? '#C27D65' : null }}><input name="Beverage" id='8' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="8">Beverage</label></Child>
                        <Child style={{ backgroundColor: Pasta ? '#D5896F' : null }}><input name="Pasta" id='11' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="11">Pasta</label></Child>
                        <Child style={{ backgroundColor: Spread ? '#E0A996' : null }}><input name="Spread" id='12' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="12">Spread</label></Child>
                        <Child style={{ backgroundColor: Soup ? '#DAB785' : null }}><input name="Soup" id='9' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="9">Soup</label></Child>
                        <Child style={{ backgroundColor: Snack ? '#E4CAA6' : null }}><input name="Snack" id='13' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} /><label htmlFor="13">Snack</label></Child>
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