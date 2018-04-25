import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './App.css';

class Header extends Component {


  render() {
    return (
    	<div className="App-header">
        {this.props.backLink && <Link to={this.props.backLink} className="nav-link"><img src={require('../back.png')}/></Link>}
        <span>{this.props.title}</span>
      </div>
    )
  }
}

export default Header;
