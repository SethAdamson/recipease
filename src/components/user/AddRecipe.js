import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import hello from '../../media/hello.png';
import { createRecipe } from './../../ducks/reducer'
import Dropzone from 'react-dropzone'
import axios from 'axios'
import styles from 'react-dropzone'

const Idek = styled.div`
display: flex;
justify-content: center;
position: relative;
top: -1.5vh;
left: 0;
width: 100%;
margin: 0 auto;
align-items:flex-start;
align-content: center;
z-index: 8;
`

const InParent = styled.div`
display: flex;
flex-direction: row;
align-items:center;
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
padding: 0 1vw 2.5vh .5vw;
height: 6vh;
line-height: 100%;
text-align: center;
align-items:center
input[type='checkbox']:focus {
    outline:0;
}

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
    width: 65vw;
    height: 75vh;
    opacity: 1;
    margin: auto;
    overflow: auto;
    background-color: #E6E2DD;

    ul {
        display: flex;
        justify-content: space-between;
        padding: 0 3vw;
    }

    input {
        width: 55%;
        height: 20px;
        align-items:flex-start;
    }

    .add-title {
        height: 15%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    
    h3 {
        margin: 1vw;
        font-size: 2rem;
    }
    .cancel-btn {
        margin: 1vw;
        padding: auto;
    }
`

const List = styled.ul`
    flex-direction: column;
    justify-content: start;

    div {
        display: flex;
        flex-direction: row;
    align-items: center;    
    }
`
const CreateButton = styled.button`
background-color: #DAB785;
text-transform: uppercase;
font-weight: 400;
color: white;
border: 1px solid lightgrey;
width: 100%;
justify-content: center;
padding: 20px;
border-radius: 5px;

letter-spacing: 0.2vw;
-webkit-transition: ease-out 0.5s;
-moz-transition: ease-out 0.5s;
transition: ease-out 0.5s;
  
&:hover {
    box-shadow: inset 0 -100px 0 0 #D5896F;
}
`
const Button = styled.button`


    background-color: #DAB785;
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    border: 1px solid lightgrey;
    width: 30%;
    border-radius: 5px;
    padding: 20px;
  
    letter-spacing: 0.2vw;
    -webkit-transition: ease-out 0.5s;
    -moz-transition: ease-out 0.5s;
    transition: ease-out 0.5s;
      
    &:hover {
        box-shadow: inset 0 -100px 0 0 #D5896F;
    }
  
`
const INPUT = styled.input`
text-decoration:none;
border:none;
`
const PictureUL = styled.ul`
display:flex;
align-items:flex-start;
`
const MappedInput = styled.input`
display:flex;
align-items: center;
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
            recipetitle: '',
            steps: '',
            rating: undefined,
            prept: undefined,
            diflevel: undefined,
            serves: undefined,
            cost: undefined,
            img: '',
            ingredients: '',
            catArray: [],
            error: ''
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
        if (!this.props.user) {
            this.setState({ error: 'Please log in to add a recipe.' })
        } else if (
            !name || !stepsString || !rating || !prept || !diflevel
            || !serves || !cost || !img || !ingsString || catArray.length === 0) {
            this.setState({ error: 'Please fill in all fields' })
        } else {
            const recipeData = { name, userID, stepsString, rating, prept, diflevel, serves, cost, img, ingsString, username, catArray }
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
                    <MappedInput name='ingredients' onChange={(e) => this.setState({ ingredients: e.target.value })} />
                </div>
            )
        })
        let { Dessert, Appetizer, MainCourse, SideDish, Beverage, Soup, Salad, Pasta, Spread, Snack, Seasoning } = this.state;
        return (
            <Parent type={newToggle ? 'block' : 'none'} >
                <Add>
                    <div className='add-title'>
                        <h3>Add New Recipe</h3>
                        <Button className='cancel-btn' onClick={this.cancelNew}>Cancel</Button>
                    </div>
                    {/* onChange={this.pushCat()} */}
                    <ul>
                        Dish Type:
                    </ul>
                    <br />
                    <Idek>
                        <InParent>
                            <label htmlFor="5"><Child style={{ backgroundColor: Appetizer ? '#475A77' : null }}><input name="Appetizer" id='5' type="checkbox" className='checks' onClick={this.pushCat} />Appetizer</Child></label>
                            <label htmlFor="12"><Child style={{ backgroundColor: Spread ? '#5F8198' : null }}><input name="Spread" id='12' type="checkbox" className='checks' onClick={this.pushCat} />Spread</Child></label>
                            <label htmlFor="10"><Child style={{ backgroundColor: Salad ? '#7693A7' : null }}><input name="Salad" id='10' type="checkbox" className='checks' onClick={this.pushCat} />Salad</Child></label>
                            <label htmlFor="9"><Child style={{ backgroundColor: Soup ? '#486857' : null }}><input name="Soup" id='9' type="checkbox" className='checks' onClick={this.pushCat} />Soup</Child></label>
                            <label htmlFor="6"><Child style={{ backgroundColor: MainCourse ? '#5C8570' : null }}><input name="MainCourse" id='6' type="checkbox" className='checks' onClick={this.pushCat} />Entrée</Child></label>
                            <label htmlFor="11"><Child style={{ backgroundColor: Pasta ? '#70A288' : null }}><input name="Pasta" id='11' type="checkbox" className='checks' onClick={this.pushCat} />Pasta</Child></label>
                            <label htmlFor="7"><Child style={{ backgroundColor: SideDish ? '#C27D65' : null }}><input name="SideDish" id='7' type="checkbox" className='checks' onClick={this.pushCat} />Sides</Child></label>
                            <label htmlFor="4"><Child style={{ backgroundColor: Dessert ? '#D5896F' : null }}><input name="Dessert" id='4' type="checkbox" className='checks' onClick={this.pushCat} />Dessert</Child></label>
                            <label htmlFor="13"><Child style={{ backgroundColor: Snack ? '#E0A996' : null }}><input name="Snack" id='13' type="checkbox" className='checks' onClick={this.pushCat} />Snack</Child></label>
                            <label htmlFor="14"><Child style={{ backgroundColor: Seasoning ? '#DAB785' : null }}><input name="Seasoning" id='14' type="checkbox" className='checks' onClick={this.pushCat} />Seasoning</Child></label>
                            <label htmlFor="8"><Child style={{ backgroundColor: Beverage ? '#E4CAA6' : null }}><input name="Beverage" id='8' type="checkbox" className='checks' onClick={this.pushCat} />Beverage</Child></label>

                         
                        </InParent>
                    </Idek>
                    <ul>
                        Recipe Title:
                        <INPUT name='name' onChange={(e) => this.setState({ recipetitle: e.target.value })} />
                    </ul>
                    <ul>
                        Rating:
                        <INPUT name='rating' onChange={(e) => this.setState({ rating: e.target.value })} />
                    </ul>
                    <ul>
                        Time:
                        <INPUT name='prepT' onChange={(e) => this.setState({ prept: e.target.value })} />
                    </ul>
                    <ul>
                        Serves:
                        <INPUT name='serves' onChange={(e) => this.setState({ serves: e.target.value })} />
                    </ul>
                    <ul>
                        Difficulty:
                        <INPUT name='difLevel' onChange={(e) => this.setState({ diflevel: e.target.value })} />
                    </ul>
                    <ul>
                        Cost:
                        <INPUT name='cost' onChange={(e) => this.setState({ cost: e.target.value })} />
                    </ul>
                    <PictureUL class='picture'>
                        Picture:
                        <Dropzone
                            onDrop={this.handleDrop}
                            multiple
                            accept="image/*"
                            style={{"width":"54%", "height": "200px", "border":"5px solid #DAB785", "textAlign": "center"}}
                        >
                            <p>Drop your files or click here to upload</p>
                            {/* {() => this.setState({ img: this.handledrop.fileURL })}
                            {console.log(this.handleDrop.fileURL)} */}
                        </Dropzone>
                    </PictureUL>
                    <List>
                        Ingredients:
                        {ingredients}
                        <Button onClick={this.addIngs}>New Ingredient</Button>
                    </List>
                    <List>
                        Directions:
                        {stepDisplay}
                        <Button onClick={this.addSteps}>New Step</Button>
                    </List>
                    {this.state.error}
                    <CreateButton className='create' onClick={this.submitRecipe}>Create Recipe</CreateButton>
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