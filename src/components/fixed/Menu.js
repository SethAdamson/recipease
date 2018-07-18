import React, { Component } from 'react';
import Login from '../user/Login'
import axios from 'axios';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipe: undefined,
        }

    }

    getSingle = () => {
        axios.get('/recipe/random').then(res => {
            console.log(res);
            axios.get('/recipe/lookup/'+ res.data.results[0].id).then(res => {
                this.setState({recipe: res.data})
            })
        })
    }


    render() {
        console.log(this.state.recipe)
        return (
            <div>
                <button className='getSingle' onClick={this.getSingle}>Get One Random Recipe</button>
                {this.state.recipe ? this.state.recipe.title : 'N/A'}
                {/* <Login /> */}
            </div>
        )
    }
}
