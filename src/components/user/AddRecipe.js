import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import hello from '../../media/hello.png';
import { createRecipe } from './../../ducks/reducer'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import styles from 'react-dropzone'


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
            name: '',
            steps: '',
            rating: 0,
            prept: 0,
            diflevel: 0,
            serves: 0,
            cost: 0,
            img: '',
            ingredients: '',
            stepsArray: [],
            ingsArray: [],
        }
    }
    handleDrop = files => {
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", `codeinfuse, medium, gist`);
            formData.append("upload_preset", "wlyjinyx"); // Replace the preset name with your own
            formData.append("api_key", "557474441515322"); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post("https://api.cloudinary.com/v1_1/recipease/image/upload", formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                const fileURL = data.secure_url // You should store this URL for future references in your app
                this.setState({ img: fileURL })
                console.log(data);
            })
        });

        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            // ... perform after upload is successful operation
        });
    }
    addSteps = () => {
        this.pushSteps()
        let newArr = [...this.state.numSteps]
        newArr.push(this.state.numSteps.length + 1);
        this.setState({ numSteps: newArr });
    }
    pushSteps = () => {
        let newArray = [...this.state.stepsArray]
        newArray.push(this.state.steps)
        this.setState({ steps: '', stepsArray: newArray })
    }
    addIngs = () => {
        this.pushIngs()
        let newArr = [...this.state.numIngredients]
        newArr.push(this.state.numIngredients.length + 1);
        this.setState({ numIngredients: newArr });
    }
    submitRecipe = () => {
        const { name, steps, rating, prept, diflevel, serves, cost, img, ingredients, stepsArray, ingsArray } = this.state
        const { userID, username } = this.props.user
        if (ingredients) this.pushIngs()
        if (steps) this.pushSteps()
        let ingsString = ingsArray.join('*')
        let stepsString = stepsArray.join('*')
        const recipeData = { name, userID, stepsString, rating, prept, diflevel, serves, cost, img, ingsString, username }
        console.log(recipeData)
        this.props.createRecipe(recipeData)
    }
    pushIngs = () => {
        let newArray = [...this.state.ingsArray]
        newArray.push(this.state.ingredients)
        this.setState({ ingredients: '', ingsArray: newArray })
    }
    pushCat = (rid, cid) => {
        axios.post('/api/recipecat', { rid, cid }).then(res => (res.data))
    }
    render() {
        console.log(this.state)
        let { newToggle, toggle } = this.props;
        let { numSteps, numIngredients } = this.state;
        let stepDisplay = numSteps.map(e => {
            return (
                <div key={e}>
                    <p>{e}.</p>
                    <input name='steps' onChange={(e) => this.setState({ steps: e.target.value })} />
                </div>
            )
        })
        let ingredients = numIngredients.map(e => {
            return (
                <div key={e}>
                    <p>{e}.</p>
                    <input name='ingredients' onChange={(e) => this.setState({ ingredients: e.target.value })} />
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
                    {/* onChange={this.pushCat()} */}
                    Dish Type:
                    <br />
                    <input id='4' name='Dessert' type="checkbox" Dessert />
                    <input id='5' type="checkbox" Appetizer />
                    <input id='14' type="checkbox" Seasoning />
                    <input id='6' type="checkbox" Entree />
                    <input id='10' type="checkbox" Salad />
                    <input id='7' type="checkbox" Side />
                    <input id='8' type="checkbox" Beverage />
                    <input id='11' type="checkbox" Pasta />
                    <input id='12' type="checkbox" Spread />
                    <input id='9' type="checkbox" Soup />
                    <input id='13' type="checkbox" Snack />
                    <ul>
                        Recipe Title:
                        <input name='name' onChange={(e) => this.setState({ name: e.target.value })} />
                    </ul>
                    <ul>
                        Rating:
                        <input name='rating' onChange={(e) => this.setState({ rating: e.target.value })} />
                    </ul>
                    <ul>
                        Time:
                        <input name='prepT' onChange={(e) => this.setState({ prept: e.target.value })} />
                    </ul>
                    <ul>
                        Serves:
                        <input name='serves' onChange={(e) => this.setState({ serves: e.target.value })} />
                    </ul>
                    <ul>
                        Difficulty:
                        <input name='difLevel' onChange={(e) => this.setState({ diflevel: e.target.value })} />
                    </ul>
                    <ul>
                        Cost:
                        <input name='cost' onChange={(e) => this.setState({ cost: e.target.value })} />
                    </ul>
                    <ul>
                        Picture:
                        <Dropzone
                            onDrop={this.handleDrop}
                            multiple
                            accept="image/*"
                            style={styles.dropzone}
                        >
                            <p>Drop your files or click here to upload</p>
                            {/* {() => this.setState({ img: this.handledrop.fileURL })}
                            {console.log(this.handleDrop.fileURL)} */}
                        </Dropzone>
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
                    <button onClick={this.submitRecipe}>Create Recipe</button>
                </Add>
            </Parent >
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { createRecipe })(AddRecipe);