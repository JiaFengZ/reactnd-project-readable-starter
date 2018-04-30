import React, { Component } from 'react';
import Header from './Header'
import PostList from './PostList'
import './App.css';

class PostCategory extends Component {
  componentDidMount() {
    this.props.getPosts(this.props.match.params.category)
  }

  render() {
    return (
      <div className="category-container">
          <Header title="React" backLink={true} goBack={this.props.goBack}/>
          <div className="home-header"> 
            <label>排序：</label><select className="select-input"><option>评分</option><option>时间</option></select>            
          </div>
          <PostList posts={this.props.posts}/>
        </div>
    );
  }
}

export default PostCategory;
