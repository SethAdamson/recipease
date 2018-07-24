import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import hello from '../../media/hello.png';

const Parent = styled.div`
    position: fixed;
    display: ${props => props.type};
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.75);
    z-index: 10;
`

const Add = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 60vw;
    height: 75vh;
    opacity: 1;
    margin: auto;
    overflow: auto;
    background-color: white;

    ul {
        display: flex;
        justify-content: space-between;
        padding: 0 3vw;
    }

    input {
        width: 75%;
    }

    h2 {
        height: 10%;
        display: flex;
        justify-content: space-between
    }
    
    h3 {
        margin: 0;
    }
`

const List = styled.ul`
    flex-direction: column;
    justify-content: start;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button {
        width: 50%;
        margin: auto;
    }
`


class AddRecipe extends Component {
    constructor() {
        super();

        this.state = {
            numSteps: [1],
            numIngredients: [1],
        }
    }

    addSteps = () => {
        let newArr = [...this.state.numSteps]
        newArr.push(this.state.numSteps.length+1);
        this.setState({numSteps: newArr});
    }

    addIngs = () => {
        let newArr = [...this.state.numIngredients]
        newArr.push(this.state.numIngredients.length+1);
        this.setState({numIngredients: newArr});
    }

    render() {
        let {newToggle, toggle} = this.props;
        let {numSteps, numIngredients} = this.state;
        let stepDisplay = numSteps.map(e => {
            return(
                <div key={e}>
                  <p>{e}.</p> 
                  <input name='steps' />
                </div>
            )
        })
        let ingredients = numIngredients.map(e => {
            return(
                <div key={e}>
                    <p>{e}.</p>
                    <input name='ingredients' />
                </div>
            )
        })
        return (
            <Parent type={newToggle ? 'block' : 'none'} >
                <Add>
                    <h2>
                        <h3>Add New Recipe</h3>
                        <button onClick={this.props.toggleFn}>Cancel</button>
                    </h2>
                    <ul>
                        Recipe Title:
                        <input name='name' />
                    </ul>
                    <ul>
                        Rating:
                        <input name='rating' />
                    </ul>
                    <ul>
                        Time:
                        <input name='prepT' />
                    </ul>
                    <ul>
                        Serves:
                        <input name='serves' />
                    </ul>
                    <ul>
                        Difficulty:
                        <input name='difLevel' />
                    </ul>
                    <ul>
                        Cost:
                        <input name='cost' />
                    </ul>
                    <ul>
                        Picture:
                        <input name='img' />
                    </ul>
                    <List>
                        Ingredients:
                        {ingredients}
                        <button onClick={this.addIngs}>New Ingredient</button>
                    </List>
                    <List>
                        Directions:
                        {stepDisplay}
                        <button onClick={this.addSteps}>New Step</button>
                    </List>
                </Add>
            </Parent>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(AddRecipe);