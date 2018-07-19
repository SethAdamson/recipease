import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getRecipes } from './../../ducks/reducer'
import Recipe from './Recipe'
class RecipeList extends Component {
    constructor() {
        super();

        this.state = {
            recipes: []
        }

    }
    componentDidUpdate(props) {
        if (props.recipes !== this.props.recipes) {
            this.setState({ recipes: this.props.recipes })
        }
    }
    render() {
        let allRecipes = this.state.recipes.map(e => {

            return (
                <Recipe
                    rating={e.rating}
                    name={e.name}
                    img={e.img}
                    rating={e.rating}
                    key={e.recipeid}
                />

            )
        })
        return (
            <div>
                {allRecipes}
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps, { getRecipes })(RecipeList)