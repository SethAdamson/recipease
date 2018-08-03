import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hello from '../../media/hello.png';
import AddRecipe from './AddRecipe';
import EditProfile from './EditProfile';
import AppHeader from '../fixed/Header';
import Recipe from '../recipes/Recipe';
import { checkUser, logOut, getFavs, menuProfile} from '../../ducks/reducer';
import Menu from '../fixed/Menu';
import Loading from '../fixed/Loading';


const Page = styled.div`
position: relative;
background-color: #e8e2dc;
height: 120vh;
overflow-y: ${props => props.type};

h2 {
   font-size: 40px;
}

p {
   font-size: 18px;
}
`

const Header = styled.img`
position: relative;
height: 100vh;
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
z-index: 1;
`
const FirstInfo = styled.div`
align-content: center;
text-align: left;
padding: 0 15vw 80px 25vw;
background-color: #e8e2dc;

.fav-profile {
    position: relative;
    left: -11vw;
    display: flex;
    flex-wrap: wrap;
    width: 70vw;
    justify-content: space-around;
    margin-bottom: 24px;
}
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
background-color: #e8e2dc;

ul{
    cursor: pointer;
}
`

const RecipeButton = styled.button`
text-transform: uppercase;
box-shadow: 0px 0px 15px #888888;
color: white;
text-align: center;
font-size: 1rem;
height: 200px;
width: 200px;
margin: 50px auto;
border-radius: 50%;
border : 10px double #e8e2dc;
background-color: #DAB785;
-webkit-transition: all .5s ease-in-out;
-moz-transition: all .5s ease-in-out;
transition: all .5s ease-in-out;

&:hover {
transform: scale(1.2);
background-color: #D5896F;
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
            profileToggle: false,
        }

    }

    componentDidMount() {
        let {checkUser, getFavs} = this.props;
        window.scrollTo(0, 0);
        checkUser().then(() => {
            if (this.props.user) this.setState({
                id: this.props.user.userID,
                username: this.props.user.username,
                email: this.props.user.email,
            })
            if(this.props.user.userID) getFavs(this.props.user.userID)
        }
        )
    }
    newToggle = () => {
        window.scrollTo(0, 0);
        this.setState({ newToggle: !this.state.newToggle });
    }
    profileToggle = () => {
        this.setState({ profileToggle: !this.state.profileToggle })
    }
    logout = () => {
        this.props.logOut()
        this.props.menuProfile(!this.props.profToggle);
        this.props.history.push('/')
    }

    render() {
        let { id, username, email, newToggle, numSteps, profileToggle } = this.state;
        let { user, favorites} = this.props
        let favsDisplay = [];
        favsDisplay = favorites.filter((e, i) => i < 3).map(e => {
            return (
                <Link to={`/detail/${e.recipeid}`} style={{ textDecoration: 'none', color: 'black' }} key={e.recipeid}>
                    <Recipe
                        rating={e.rating}
                        name={e.name}
                        img={e.img}
                    />
                </Link>
            )
        })
        let shopList = [];
        console.log(username, email, newToggle);
        return (
            <Page type={newToggle ? 'hidden' : 'inherit'}>
                <Loading />
                <AppHeader fixed={true} />
                <Menu fixed={true} />
                <Header src={hello} alt='Photo by Calum Lewis on Unsplash' />
                <AddRecipe newToggle={newToggle} toggleFn={this.newToggle} />
                <BigSection>Enjoy RecipEase, {username}!</BigSection>
                <FirstInfo>
                    <article>
                        <h2>Favorites</h2>
                        <div className='fav-profile'>
                            {favsDisplay}
                        </div>
                        <Link to={`/profile/${id}/favorites`} style={{ textDecoration: 'none', color: 'black'}}>
                            <a>All Favorites</a>
                        </Link>
                    </article>
                </FirstInfo>
                <SecondInfo>
                    <article>
                        <h2>Shopping</h2>
                        <div>
                            {shopList}
                        </div>
                        <Link to={`/profile/${id}/shopping`} style={{ textDecoration: 'none', color: 'black' }}>
                            <a>Get My List</a>
                        </Link>
                    </article>
                </SecondInfo>
                <ThirdInfo>
                    <article>
                        <h2>My Profile</h2>
                        <ul onClick={this.newToggle}>Create New Recipe</ul>
                        <Link to={`/profile/${id}/myrecipes`} style={{ textDecoration: 'none', color: 'black' }}>
                            <ul>Manage My Recipes</ul>
                        </Link>
                        <ul onClick={this.profileToggle}>Edit Profile</ul>
                        <ul onClick={this.logout}>Log Out</ul>
                        <EditProfile profileToggle={profileToggle} username={username} email={email} />
                    </article>
                </ThirdInfo>
                <Link to={{
                    pathname: `/recipes`
                }} style={{ display: 'flex', height: '200px', width: '100%', textDecoration: 'none', justifyContent: 'center' }}> 
                <RecipeButton> Get Recipes</RecipeButton> </Link>
            </Page>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        favorites: state.favorites,
        profToggle: state.profToggle
    }
}

export default connect(mapStateToProps, { checkUser, logOut, getFavs, menuProfile })(Profile);