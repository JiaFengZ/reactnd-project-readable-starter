import React, { Component } from 'react'
import './App.css';

class CategorySelect extends Component {
  constructor(props) {
    super(props)
    this.selectCateGory = this.selectCateGory.bind(this)
  }

  selectCateGory(event) {
    this.props.selectCateGory(event.target.value)
  }
  
  render() {
    return (
      
      <select className="select-input" onChange={this.selectCateGory} value='none'>
        {this.props.categorys.map((category) => <option key={category.path} value={category.path}>{category.name}</option>)}
      </select>
    )
  }
}

export default CategorySelect;
