import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import _ from 'lodash'
import { getRecipes } from '../../ducks/reducer'

const SuperParentMakesStickyWork = styled.div`
position: -webkit-sticky;
display: flex;
justify-content: center;
position: sticky;
top: 5vh;
left: 0;
width:100%;
margin: 0 auto;
align-items:center;
align-content: center;
z-index: 8;
`

const Parent = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
height:100%;
background: white;
box-shadow: 0 0 5px rgb(190, 190, 190);
border-radius: 5px;
.checks {
    appearance:none;    
    }

@media (min-width: 315px) and (max-width: 480px) {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
    justify-content: center;
    width: 60vw;
    }    
`
const Child = styled.div`
height: 6vh;
padding-right: 1.5vw;
padding-left: .75vw;
text-align: center;
line-height: 6vh;
padding: auto 0;
&:hover{
    background:#cdd6d0
}
@media (min-width: 315px) and (max-width: 480px) {
	height: 6vh;
    font-size: 12px;
    padding-top: 0;
    padding-bottom: 0;
    } 
`

class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Dessert: false, //4 -
            Appetizer: false, //5 -
            MainCourse: false, //6 -
            SideDish: false, //7 -
            Beverage: false, //8
            Soup: false, //9 -
            Salad: false, //10 -
            Pasta: false, //11 -
            Spread: false, //12 -
            Snack: false, //13
            Seasoning: false, //14
            filtering: false
        }

    }

    theCheckBoxChecker = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
        this.props.theGreatFilter(this.props.arraySearch(e.target.checked, +e.target.id))
    }


    render() {
        let { Dessert, Appetizer, MainCourse, SideDish, Beverage, Soup, Salad, Pasta, Spread, Snack, Seasoning } = this.state;
        return (
            <SuperParentMakesStickyWork >
                <Parent>
                    <label htmlFor="5"><Child style={{ backgroundColor: Appetizer ? '#475A77' : null }}><input name="Appetizer" id='5' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Appetizer</Child></label>
                    <label htmlFor="12"><Child style={{ backgroundColor: Spread ? '#5F8198' : null }}><input name="Spread" id='12' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Spread</Child></label>
                    <label htmlFor="10"><Child style={{ backgroundColor: Salad ? '#7693A7' : null }}><input name="Salad" id='10' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Salad</Child></label>
                    <label htmlFor="9"><Child style={{ backgroundColor: Soup ? '#486857' : null }}><input name="Soup" id='9' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Soup</Child></label>
                    <label htmlFor="6"><Child style={{ backgroundColor: MainCourse ? '#5C8570' : null }}><input name="MainCourse" id='6' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Entrée</Child></label>
                    <label htmlFor="11"><Child style={{ backgroundColor: Pasta ? '#70A288' : null }}><input name="Pasta" id='11' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Pasta</Child></label>
                    <label htmlFor="7"><Child style={{ backgroundColor: SideDish ? '#C27D65' : null }}><input name="SideDish" id='7' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Sides</Child></label>
                    <label htmlFor="4"><Child style={{ backgroundColor: Dessert ? '#D5896F' : null }}><input name="Dessert" id='4' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Dessert</Child></label>
                    <label htmlFor="13"><Child style={{ backgroundColor: Snack ? '#E0A996' : null }}><input name="Snack" id='13' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Snack</Child></label>
                    <label htmlFor="14"><Child style={{ backgroundColor: Seasoning ? '#DAB785' : null }}><input name="Seasoning" id='14' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Seasoning</Child></label>
                    <label htmlFor="8"><Child style={{ backgroundColor: Beverage ? '#E4CAA6' : null }}><input name="Beverage" id='8' type="checkbox" className='checks' onClick={this.theCheckBoxChecker} />Beverage</Child></label>
                </Parent>
            </SuperParentMakesStickyWork>
        )
    }
}

function mapStateToProps(state) {
    return {
        byCategory: state.byCategory
    }
}

export default connect(mapStateToProps, { getRecipes })(Filter)