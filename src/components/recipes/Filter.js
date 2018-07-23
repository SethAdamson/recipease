import React, { Component } from 'react';
import styled from 'styled-components';

const DropCheck = styled.dl`
.dropdown {
    position: absolute;
    top:50%;
    transform: translateY(-50%);
  }
  
  a {
    color: #fff;
  }
  
  .dropdown dd,
  .dropdown dt {
    margin: 0px;
    padding: 0px;
  }
  
  .dropdown ul {
    margin: -1px 0 0 0;
  }
  
  .dropdown dd {
    position: relative;
  }
  
  .dropdown a,
  .dropdown a:visited {
    color: #fff;
    text-decoration: none;
    outline: none;
    font-size: 12px;
  }
  
  .dropdown dt a {
    background-color: #4F6877;
    display: block;
    padding: 8px 20px 5px 10px;
    min-height: 25px;
    line-height: 24px;
    overflow: hidden;
    border: 0;
    width: 272px;
  }
  
  .dropdown dt a span,
  .multiSel span {
    cursor: pointer;
    display: inline-block;
    padding: 0 3px 2px 0;
  }
  
  .dropdown dd ul {
    background-color: #4F6877;
    border: 0;
    color: #fff;
    display: none;
    left: 0px;
    padding: 2px 15px 2px 5px;
    position: absolute;
    top: 2px;
    width: 280px;
    list-style: none;
    height: 100px;
    overflow: auto;
  }
  
  .dropdown span.value {
    display: none;
  }
  
  .dropdown dd ul li a {
    padding: 5px;
    display: block;
  }
  
  .dropdown dd ul li a:hover {
    background-color: #fff;
  }
  
  button {
    background-color: #6BBE92;
    width: 302px;
    border: 0;
    padding: 10px 0;
    margin: 5px 0;
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
`



export default class Filter extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

    }


    render() {

        return (
            <div>
                <h2>Fold Out</h2>

                <DropCheck>

                    <dl class="dropdown">

                        <dt>
                            <a href="#">
                                <span class="hida">Select</span>
                                <p class="multiSel"></p>
                            </a>
                        </dt>

                        <dd>
                            <div class="mutliSelect">
                                <ul>
                                    <li>
                                        <input type="checkbox" value="Apple" />Apple</li>
                                    <li>
                                        <input type="checkbox" value="Blackberry" />Blackberry</li>
                                    <li>
                                        <input type="checkbox" value="HTC" />HTC</li>
                                    <li>
                                        <input type="checkbox" value="Sony Ericson" />Sony Ericson</li>
                                    <li>
                                        <input type="checkbox" value="Motorola" />Motorola</li>
                                    <li>
                                        <input type="checkbox" value="Nokia" />Nokia</li>
                                </ul>
                            </div>
                        </dd>
                        <button>Filter</button>
                    </dl>
                </DropCheck>
            </div>
        )
    }
}
