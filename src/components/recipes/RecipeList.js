import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getRecipes } from './../../ducks/reducer'
import Recipe from './Recipe'
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Parent = styled.div`
display: flex;
flex-wrap: wrap;
width: 80vw;
justify-content: space-around;
margin: 0 auto;
`


class RecipeList extends Component {
    constructor() {
        super();

        this.state = {
            recipes: []
        }

    }

    componentDidMount() {
        this.setState({ recipes: this.props.recipes })
    }

    componentDidUpdate(props) {
        if (props.recipes !== this.props.recipes) {
            this.setState({ recipes: this.props.recipes })
        }
    }

    render() {
        let allRecipes = this.state.recipes.map(e => {

            return (
                <Link to={`/recipes/${e.recipeid}`} style={{textDecoration: 'none', color: 'black'}} key={e.recipeid}>
                    <Recipe
                        rating={e.rating}
                        name={e.name}
                        img={e.img}
                    />
                </Link>
            )
        })
        return (
            <Parent>
                {allRecipes}
            </Parent>
        )
    }
}
function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { getRecipes })(RecipeList)