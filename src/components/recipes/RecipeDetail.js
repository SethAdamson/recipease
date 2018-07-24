import React, { Component } from 'react';
import Header from '../fixed/Header';
import {connect} from 'react-redux';


class RecipeDetail extends Component {
    constructor() {
        super();

        this.state = {
            img: undefined,
            name: undefined,
            cost: undefined,
            difficulty: undefined,
            time: undefined,
            rating: undefined,
            serves: undefined,
            ingredients: undefined,
            steps: undefined,
            source: undefined,
            sourceURL: undefined,
        }
    }

    componentDidUpdate(props){
        if(props.recipes !== this.props.recipes){
            let {recipes} = this.props;
            let singleID = +this.props.match.params.id;
            if(recipes){
                let single = recipes.filter(e => e.recipeid === singleID)[0];
                this.setState({
                    img: single.img,
                    name: single.name,
                    cost: single.cost,
                    difficulty: single.dif,
                    time: single.prept,
                    rating: single.rating,
                    serves: single.serves,
                    ingredients: single.ingredients,
                    steps: single.steps,
                    source: single.source,
                    sourceURL: single.sourceURL,
                })
            }
        }
    }

    render() {
        console.log(this.props);
        let {img, name, cost, difficulty, time, rating, serves, ingredients, steps, source, sourceURL} = this.state;
        let ingDisplay = []
        if(ingredients){
            ingDisplay = ingredients.split('*').map((e, i) => {
                return (
                    <ul key={i}>{i+1}. {e}</ul>
                )
            })
        }
        let stepDisplay = []
        if(steps){
            stepDisplay = steps.split('*').map((e, i) => {
                return (
                    <ul key={i}>{i+1}. {e}</ul>
                )
            })
        }
            return (
                <div>
                    <Header />
                    <img src={img} />
                    <ul>Name: {name}</ul>
                    <ul>Cost: {cost}</ul>
                    <ul>Difficulty: {difficulty}</ul>
                    <ul>Time: {time}</ul>
                    <ul>Rating: {rating}</ul>
                    <ul>Serves: {serves}</ul>
                    <ul>Ingredients: {ingDisplay}</ul>
                    <ul>Steps: {stepDisplay}</ul>
                    <ul>Source: {source}</ul>
                </div>
            )
    }
}

function mapStateToProps(state){
    return {
        recipes: state.recipes
    }
}

export default connect(mapStateToProps)(RecipeDetail);