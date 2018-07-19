import React, { Component } from 'react';
import { connect } from 'react-redux';
import chef from '../../media/chef-icon-13717.png';
import styled from 'styled-components';
import { getRecipes } from '../../ducks/reducer'
import axios from 'axios'

const Logo = styled.img`
position: fixed;
margin: 4vw;
right: 0;
border-radius: 50%;
height: 70px;
width: 70px;
z-index: 100;
&:hover {
    -webkit-transform:scale(1.08);
    -moz-transform:scale(1.08);
    -ms-transform:scale(1.08);
    -o-transform:scale(1.08);
    transform: scale(1.08);
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
        this.props.getRecipes()
    }
    render() {
        let { user } = this.props;
        console.log(this.props.allRecipes);
        return (
            <div>
                <Logo src={chef} />
            </div>
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
