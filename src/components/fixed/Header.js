import React, { Component } from 'react';
import { connect } from 'react-redux';
import chef from '../../media/chef-icon-13717.png';
import styled from 'styled-components';
import { getRecipes } from '../../ducks/reducer';
import {Link} from 'react-router-dom'
import axios from 'axios'

const Logo = styled.img`
position: fixed;
top: 4vw;
right: 3.5vw;
border-radius: 50%;
height: 6vw;
width: 6vw;
&:hover {
    -webkit-transform:scale(1.08);
    -moz-transform:scale(1.08);
    -ms-transform:scale(1.08);
    -o-transform:scale(1.08);
    transform: scale(1.08);
}
`

const Outer = styled.div`
position: fixed;
right: 0;
height: 100%;
width: 6.5vw;
z-index: 100;
border-left: 1px solid #d3cec3;
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
        window.scrollTo(0,0);
    }

    render() {
        let { user } = this.props;
        console.log(this);
        return (
            <Outer>
                <Link to='/' replace>
                    <Logo src={chef} onClick={this.scroll}/>
                </Link>
            </Outer>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        allRecipes: state.recipes
    }
};

export default connect(mapStateToProps, { getRecipes })(Header);
