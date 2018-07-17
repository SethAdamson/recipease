import React, { Component } from 'react';


export default class Recipe extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {

        return (
            <div>
                <div>Image</div>
                <button>Next</button>
                <button>Before</button>
                <article>
                    <h3>Category name</h3>
                    <p>Description</p>
                    <button>See the Category</button>
                </article>
            </div>
        )
    }
}