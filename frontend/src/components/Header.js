import React, { Component } from 'react'
import './App.css';

class Header extends Component {

  render() {
    return (
    	<div className="App-header">
        {this.props.backLink && <i onClick={this.props.goBack} className="nav-link"><img alt="goback" src={require('../goback.png')}/></i>}
        <span>{this.props.title}</span>
      </div>
    )
  }
}

export default Header;
