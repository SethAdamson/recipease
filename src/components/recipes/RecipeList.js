import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getRecipes, getCategory } from './../../ducks/reducer'
import Recipe from './Recipe'
import styled from 'styled-components';
import FilterNav from '../recipes/Filter';
import { Link } from 'react-router-dom';
import AppHeader from '../fixed/Header';

const Parent = styled.div`
display: flex;
flex-wrap: wrap;
width: 80vw;
justify-content: space-around;
margin: 0 auto;
`
const TopImg = styled.img`
position: relative;
width:100%;
`


class RecipeList extends Component {
    constructor() {
        super();

        this.state = {
            recipes: [],
            isFiltered: false,
            filtered: [],
            searchNums: []
        }

    }

    componentDidMount() {
        this.setState({ recipes: this.props.recipes })
        this.props.getCategory()
    }
    componentDidUpdate(props) {
        if (props.recipes !== this.props.recipes) {
            this.setState({ recipes: this.props.recipes })
        }
    }
    updateSearch = (e) => {
        this.setState({ search: e.target.value })
    }
    theGreatFilter = () => {
        this.setState({ isFiltered: true })
        let newFilter = [...this.state.filtered]
        this.state.searchNums.forEach(val => {
            this.props.byCategory.forEach(r => {
                if (r.categoryid === val) {
                    newFilter.push(r)
                }
            })
        })
        this.setState({ filtered: newFilter })
    }
    arraySearches = (x, y) => {
        console.log(x, y)
        let newArray = [...this.state.searchNums]
        if (x) {
            newArray.push(y)
        } else {
            newArray.splice(newArray.indexOf(y), 1)
        }
        this.setState({ searchNums: newArray })
    }
    render() {
        console.log(this.state.filtered, this.state.searchNums)
        let allRecipes = []
        if (this.state.isFiltered) {
            allRecipes = this.state.filtered.map(e => {

                return (
                    <Link to={`/recipes/${e.recipeid}`} style={{ textDecoration: 'none', color: 'black' }} key={e.recipeid}>
                        <Recipe
                            rating={e.rating}
                            name={e.name}
                            img={e.img}
                        />
                    </Link>
                )
            })
        } else {
            allRecipes = this.props.recipes.map(e => {
                return (
                    <Link to={`/recipes/${e.recipeid}`} style={{ textDecoration: 'none', color: 'black' }} key={e.recipeid}>
                        <Recipe
                            rating={e.rating}
                            name={e.name}
                            img={e.img}
                        />
                    </Link>
                )
            })
        }
        return (
            <div>
                <AppHeader />
                {console.log(this.state)}
                <TopImg src='https://images.unsplash.com/photo-1529940316268-e245e031bcd1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5670e6ecbfb72bd2bf0b4166a1ba7367&auto=format&fit=crop&w=2850&q=80' alt='' />
                <FilterNav
                    theGreatFilter={this.theGreatFilter}
                    isFiltered={this.state.isFiltered}
                    arraySearch={this.arraySearches}
                />
                {/* <input type='' className='' onChange={this.updateSearch.bind(this)}></input> */}
                <Parent>
                    {allRecipes}
                </Parent>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        recipes: state.recipes,
        byCategory: state.byCategory
    }
}

export default connect(mapStateToProps, { getRecipes, getCategory })(RecipeList)