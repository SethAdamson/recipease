import React, { Component } from 'react';


export default class RecipeBox extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {

        return (
            <div>
                <a href="">
                    <h3>Category</h3>
                    <article>
                        <span>Author</span>
                        <h4>Recipe Title</h4>
                        <footer>
                            <div>Quantity</div>
                            <div>
                                <h3>Quantity</h3>
                                <p>Method</p>
                                <p>Cooking</p>
                            </div>
                        </footer>
                    </article>
                    <button>View Recipe</button>
                </a>
            </div>
        )
    }
}