import React, { Component } from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import hello from '../../media/hello.png';
import AddRecipe from './AddRecipe';

const Page = styled.div`
position: relative;
background-color: #e8e2dc;

h2 {
   font-size: 40px;
}

p {
   font-size: 18px;
}
`

const Header = styled.img`
position: relative;
height: 100%;
width: 100%;
`
const BigSection = styled.h1`
position: relative;
font-size: 10vh;
font-family: 'Montserrat', sans-serif;
margin: 0 6.5vw;
padding: 0 34px;
bottom: 15vh;
color: #fff;
`
const FirstInfo = styled.div`
align-content: center;
text-align: left;
padding: 0 15vw 80px 25vw;
`
const SecondInfo = styled.div`
align-content: center;
text-align: left;
padding: 80px 15vw 80px 25vw;
background-color: #fff;
`
const ThirdInfo = styled.div`
align-content: center;
text-align: left;
padding: 80px 15vw 80px 25vw;

ul{
    cursor: pointer;
}
`

const RecipeButton = styled.button`
text-transform: uppercase;
color: white;
font-size: 1rem;
padding: 3.5% 3%;
border-radius: 50%;
margin: 8vh 44vw;
border : 10px double #e8e2dc;
background-color: #85C1E9;
-webkit-transition: all .05s linear;
-moz-transition: all .05s linear;
transition: all .05s linear;

&:hover {
transform: scale(1.2);
background-color: #2E86C1;
box-shadow: 0px 0px 15px #888888;
}
`



class Profile extends Component {
    constructor() {
        super();

        this.state = {
            id: undefined,
            username: undefined,
            email: undefined,
            newToggle: false,
        }

    }

    componentDidMount(){
        if(this.props.user) this.setState({
            id: this.props.user.userID,
            username: this.props.user.username,
            email: this.props.user.email,
        })
    }

    newRecipe = () => {
        
    }

    newToggle = () => {
        this.setState({newToggle: !this.state.newToggle})
    }

    render() {
        let {username, email, newToggle, numSteps} = this.state;
        let {user} = this.props
        let favsDisplay = [];
        let shopList = [];
        console.log(username, email, newToggle);
        return (
            <Page>
                <Header src={hello} alt='Photo by Calum Lewis on Unsplash' />
                <AddRecipe newToggle={newToggle} />
                <BigSection>Enjoy RecipEase, {username}!</BigSection>
                <FirstInfo>
                    <article>
                        <h2>Favorites</h2>
                        <div>
                            {favsDisplay}
                        </div> 
                    </article>
                </FirstInfo>
                <SecondInfo>
                    <article>
                        <h2>Shopping</h2>
                        <div>
                            {shopList}
                        </div> 
                    </article>
                </SecondInfo>
                <ThirdInfo>
                    <article>
                        <h2>My Profile</h2>
                            <ul onClick={this.newToggle}>Add New Recipe</ul>
                            <ul>Manage My Recipes</ul>
                            <ul>Edit Profile</ul>
                    </article>
                </ThirdInfo>
                <Link to={{
                    pathname: `../recipes/Recipe.js/${this.props.testvalue}`
                }}> <RecipeButton> Get Recipes</RecipeButton> </Link>
            </Page>
        )
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile);