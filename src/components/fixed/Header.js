import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getRecipes, searchFn } from '../../ducks/reducer';
import { Link } from 'react-router-dom'
import penLogo from '../../media/penLogo.svg';
import axios from 'axios'
import { FULFILLED } from 'redux-promise-middleware';

const Logo = styled.img`
height: 75%;
width: 75%;
margin: auto;
`

const Search = styled.span`
position: fixed;
display: flex;
flex-direction: column;
align-items: center;
top: 15vh;
right: ${props => props.right};
background: white;
box-shadow: 0 0 5px rgb(190, 190, 190);
width: ${props => props.type};
height: ${props => props.name};
transition: .5s;
overflow: hidden;
border-radius: 5px;

h3 {
 margin: 8px;
 cursor: pointer;
}

input {
    width: 80%;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 5px rgb(190, 190, 190);
}

p {
    margin: 8px;
}

button {
    margin: 0 4px;
    height: 2vw;
    border: none;
    border-radius: 5px;
}
`

const SearchInput = styled.span`
width: 100%;
display: flex;
flex-direction:column;
align-items: center;
`

const Outer = styled.div`
position: fixed;
top: 0;
right: 0;
height: 110vh;
width: 6.5vw;
z-index: 150;
border-left: 1px solid #A3B7C4;


div {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: ${props => props.type};
    right: 3.5vw;
    border-radius: 50%;
    height: 6vw;
    width: 6vw;
    background: white;
    box-shadow: 0 0 5px rgb(190, 190, 190);
    transition: 1s;

&:hover {
    -webkit-transform:scale(1.08);
    -moz-transform:scale(1.08);
    -ms-transform:scale(1.08);
    -o-transform:scale(1.08);
    transform: scale(1.08);
    }
}

@media (max-width: 900px){
    width: 40px;
    top: 0;

    div {
        right: 15px;
        height: 50px;
        width: 50px;
    }
}
`


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            searchTog: false,
            searchInput: ''
        }
    }
    componentDidMount() {
        this.props.getRecipes();
    }

    scroll = () => {
        window.scrollTo(0, 0);
    }

    searchTogFn = () => {
        this.setState({searchTog: !this.state.searchTog})
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    clearSearch = () => {
        this.setState({searchInput: '', searchTog: false});
        this.props.searchFn('');
    }

    render() {
        let { user, search } = this.props;
        let {searchTog} = this.state;
        console.log(searchTog);
        return (
            <Outer type={this.props.fixed ? '4vh' : this.props.scrolling ? '4vh' : '-20vh'} >
                <Link to='/' replace>
                    <div>
                        <Logo src={penLogo} onClick={this.scroll} />
                    </div>
                </Link>
                {
                    search ? 
                    <Search type={searchTog ? '12vw' : '6vw'} name={searchTog ? '8vw' : '3vw'} right={searchTog ? '.5vw' : '3.5vw'}>
                        <h3 onClick={this.searchTogFn}>Search</h3>
                        {
                            searchTog ?
                                <SearchInput>
                                    <input name='searchInput' onChange={this.handleChange} />
                                    <p>
                                        <button onClick={() => this.props.searchFn(this.state.searchInput)}>Go</button>
                                        <button onClick={this.clearSearch}>Clear</button>
                                    </p>
                                </SearchInput>
                        :
                            null
                        }
                    </Search>
                :
                    null
                }
            </Outer>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        allRecipes: state.recipes,
        scrolling: state.scrolling,
    }
};

export default connect(mapStateToProps, { getRecipes, searchFn })(Header);
