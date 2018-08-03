import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hello from '../../media/hello.png';
import AddRecipe from './AddRecipe';
import EditProfile from './EditProfile';
import AppHeader from '../fixed/Header';
import Recipe from '../recipes/Recipe';
import { checkUser, logOut, getFavs, menuProfile } from '../../ducks/reducer';
import Menu from '../fixed/Menu';
import Loading from '../fixed/Loading';


const Page = styled.div`
position: relative;
background-color: #F1E4D2;
height: 125vh;
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
background-color: #F1E4D2;

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
display:flex;
background-color:#F1E4D2;
width: 100%;
justify-content:center;
margin:auto;
text-decoration:none;
`

const GeneralButton = styled.button`
  
   flex-wrap:nowrap;
    background-color: #DAB785;
    text-transform: uppercase;
    font-weight: 400;
    color: white;
    border: 1px solid lightgrey;
    width: auto;
    height: 30px;
    margin: 4px;
    border-radius: 5px;
    letter-spacing: 0.2vw;
    -webkit-transition: ease-out 0.5s;
    -moz-transition: ease-out 0.5s;
    transition: ease-out 0.5s;
      
    &:hover {
        box-shadow: inset 0 -100px 0 0 #D5896F;
    }
  
`
// const MyProfile = styled.h3`
// font-size: 40px;
// padding: 0 15vw 0 25vw;
// `


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
        let { checkUser, getFavs } = this.props;
        window.scrollTo(0, 0);
        checkUser().then(() => {
            if (this.props.user) this.setState({
                id: this.props.user.userID,
                username: this.props.user.username,
                email: this.props.user.email,
            })
            if (this.props.user.userID) getFavs(this.props.user.userID)
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
        let { user, favorites } = this.props
        let favsDisplay = [];
        favsDisplay = favorites.filter((e, i) => i < 3).map(e => {
            return (
                <Link to={`/detail/${e.recipeid}`} key={e.recipeid}>
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
                <SecondInfo>
                    <GeneralButton onClick={this.profileToggle}>Edit Profile</GeneralButton>
                    <EditProfile profileToggle={profileToggle} user={user} />
                    <Link to={`/profile/${id}/shopping`} style={{ textDecoration: 'none' }}><GeneralButton> Get My List</GeneralButton></Link>
                    <GeneralButton onClick={this.newToggle}> Create New Recipe</GeneralButton>
                    <Link to={`/profile/${id}/myrecipes`} style={{ textDecoration: 'none' }}><GeneralButton>Manage My Recipes </GeneralButton></Link>
                    <Link to={`/recipes`} style={{ textDecoration: 'none' }}><GeneralButton>Back To Recipes</GeneralButton></Link>
                    <GeneralButton onClick={this.logout}> Log Out</GeneralButton>
                </SecondInfo>
                <FirstInfo>
                    <article>
                        <h2>Favorites</h2>
                        <div className='fav-profile'>
                            {favsDisplay}
                        </div>
                        <Link to={`/profile/${id}/favorites`} style={{ textDecoration: 'none' }}>
                            <GeneralButton>All Favorites</GeneralButton>
                        </Link>
                    </article>
                </FirstInfo>
                    {/* <MyProfile>My Profile</MyProfile> */}
                
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