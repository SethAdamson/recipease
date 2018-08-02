import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import hello from '../../media/hello.png';
import { createRecipe } from './../../ducks/reducer'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import styles from 'react-dropzone'

// position: -webkit-sticky;
const Idek = styled.div`
display: flex;
justify-content: center;
position: relative;
top: -1.5vh;
left: 0;
width: 100%;
margin: 0 auto;
align-items:center;
align-content: center;
z-index: 8;
` 

const InParent = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
height:100%;
background: white;
box-shadow: 0px 0px 15px #888888;
border-radius: 5px;
.checks {
    appearance:none;    
    }
`
const Child = styled.div`
padding: 1vh 1vw 0 .5vw;
height: 6vh;
line-height: 100%;
text-align: center;
&:hover{
    background:#cdd6d0
}
`


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

var stepsArray = []
var ingsArray = []
class AddRecipe extends Component {
    constructor() {
        super();

        this.state = {
            Dessert: false, //4
            Appetizer: false, //5
            MainCourse: false, //6
            SideDish: false, //7
            Beverage: false, //8
            Soup: false, //9
            Salad: false, //10
            Pasta: false, //11
            Spread: false, //12
            Snack: false, //13
            Seasoning: false, //14
            filtering: false,
            numSteps: [1],
            numIngredients: [1],
            name: '',
            steps: '',
            rating: undefined,
            prept: undefined,
            diflevel: undefined,
            serves: undefined,
            cost: undefined,
            img: '',
            ingredients: '',
            catArray: [],
            error: '',
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
        stepsArray.push(this.state.steps)
        this.setState({ steps: '' })
    }
    addIngs = () => {
        this.pushIngs()
        let newArr = [...this.state.numIngredients]
        newArr.push(this.state.numIngredients.length + 1);
        this.setState({ numIngredients: newArr });
    }
    submitRecipe = () => {
        const { name, steps, rating, prept, diflevel, serves, cost, img, ingredients, catArray } = this.state
        const { userID, username } = this.props.user
        if (ingredients) this.pushIngs()
        if (steps) this.pushSteps()
        let ingsString = ingsArray.join('*')
        let stepsString = stepsArray.join('*')
        console.log(ingsString, stepsString)
        if (!this.props.user) {
            this.setState({ error: 'Please log in to add a recipe.' })
        } else if (
            !name || !stepsString || !rating || !prept || !diflevel
            || !serves || !cost || !img || !ingsString || catArray.length === 0) {
            console.log([name, stepsString, rating, prept, diflevel, serves, cost, img, ingsString, catArray])
            this.setState({ error: 'Please fill in all fields' })
        } else {
            const recipeData = { name, userID, stepsString, rating, prept, diflevel, serves, cost, img, ingsString, username, catArray }
            console.log(recipeData)
            this.props.createRecipe(recipeData)
        }
    }

    pushIngs = () => {
        ingsArray.push(this.state.ingredients)
        this.setState({ ingredients: '', })
    }

    pushCat = (e) => {
        this.setState({ [e.target.name]: e.target.checked })
        let newCats = [...this.state.catArray]
        newCats.push(+e.target.id)
        this.setState({ catArray: newCats })
    }

    cancelNew = () => {
        this.props.toggleFn();
        this.setState({
            Dessert: false, //4
            Appetizer: false, //5
            MainCourse: false, //6
            SideDish: false, //7
            Beverage: false, //8
            Soup: false, //9
            Salad: false, //10
            Pasta: false, //11
            Spread: false, //12
            Snack: false, //13
            Seasoning: false, //14
            filtering: false,
            numSteps: [1],
            numIngredients: [1],
            name: '',
            steps: '',
            rating: undefined,
            prept: undefined,
            diflevel: undefined,
            serves: undefined,
            cost: undefined,
            img: '',
            ingredients: '',
            catArray: [],
        })
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
        let { Dessert, Appetizer, MainCourse, SideDish, Beverage, Soup, Salad, Pasta, Spread, Snack, Seasoning } = this.state;
        return (
            <Parent type={newToggle ? 'block' : 'none'} >
                <Add>
                    <h2>
                        <h3>Add New Recipe</h3>
                        <button onClick={this.cancelNew}>Cancel</button>
                    </h2>
                    {/* onChange={this.pushCat()} */}
                    <ul>
                        Dish Type:
                    </ul>
                    <br />
                    <Idek>
                        <InParent>
                            <label htmlFor="4"><Child style={{ backgroundColor: Dessert ? '#475A77' : null }}><input name="Dessert" id='4' type="checkbox" className='checks' onClick={this.pushCat} />Dessert</Child></label>
                            <label htmlFor="5"><Child style={{ backgroundColor: Appetizer ? '#5F8198' : null }}><input name="Appetizer" id='5' type="checkbox" className='checks' onClick={this.pushCat} />Appetizer</Child></label>
                            <label htmlFor="14"><Child style={{ backgroundColor: Seasoning ? '#7693A7' : null }}><input name="Seasoning" id='14' type="checkbox" className='checks' onClick={this.pushCat} />Seasoning</Child></label>
                            <label htmlFor="6"><Child style={{ backgroundColor: MainCourse ? '#486857' : null }}><input name="MainCourse" id='6' type="checkbox" className='checks' onClick={this.pushCat} />Entrée</Child></label>
                            <label htmlFor="10"><Child style={{ backgroundColor: Salad ? '#5C8570' : null }}><input name="Salad" id='10' type="checkbox" className='checks' onClick={this.pushCat} />Salad</Child></label>
                            <label htmlFor="7"><Child style={{ backgroundColor: SideDish ? '#70A288' : null }}><input name="SideDish" id='7' type="checkbox" className='checks' onClick={this.pushCat} />Sides</Child></label>
                            <label htmlFor="8"><Child style={{ backgroundColor: Beverage ? '#C27D65' : null }}><input name="Beverage" id='8' type="checkbox" className='checks' onClick={this.pushCat} />Beverage</Child></label>
                            <label htmlFor="11"><Child style={{ backgroundColor: Pasta ? '#D5896F' : null }}><input name="Pasta" id='11' type="checkbox" className='checks' onClick={this.pushCat} />Pasta</Child></label>
                            <label htmlFor="12"><Child style={{ backgroundColor: Spread ? '#E0A996' : null }}><input name="Spread" id='12' type="checkbox" className='checks' onClick={this.pushCat} />Spread</Child></label>
                            <label htmlFor="9"><Child style={{ backgroundColor: Soup ? '#DAB785' : null }}><input name="Soup" id='9' type="checkbox" className='checks' onClick={this.pushCat} />Soup</Child></label>
                            <label htmlFor="13"><Child style={{ backgroundColor: Snack ? '#E4CAA6' : null }}><input name="Snack" id='13' type="checkbox" className='checks' onClick={this.pushCat} />Snack</Child></label>
                        </InParent>
                    </Idek>
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
                    {this.state.error}
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