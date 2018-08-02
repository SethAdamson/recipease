import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getRecipes } from '../../ducks/reducer';
import { Link } from 'react-router-dom'
import penLogo from '../../media/penLogo.svg';
import axios from 'axios'

const Logo = styled.img`
height: 75%;
width: 75%;
margin: auto;
`

const Outer = styled.div`
position: fixed;
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
    right: 3vw;
    border-radius: 50%;
    height: 7vw;
    width: 7vw;
    background: white;
    box-shadow: 0 0 10px #031D44;
    transition: 1s;

&:hover {
    -webkit-transform:scale(1.08);
    -moz-transform:scale(1.08);
    -ms-transform:scale(1.08);
    -o-transform:scale(1.08);
    transform: scale(1.08);
    }
}
`


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            recipes: []
        }
    }
    componentDidMount() {
        this.props.getRecipes();
    }

    scroll = () => {
        window.scrollTo(0, 0);
    }

    render() {
        let { user } = this.props;
        return (
            <Outer type={this.props.fixed ? '4vh' : this.props.scrolling ? '4vh' : '-20vh'} >
                <Link to='/' replace>
                    <div>
                        <Logo src={penLogo} onClick={this.scroll} />
                    </div>
                </Link>
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

export default connect(mapStateToProps, { getRecipes })(Header);
