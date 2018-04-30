import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'
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
          <ul className="post-list">
            {
              this.props.posts.map((post) => {
                return (<li key={post.id}>
                  <div className="post-header">
                    <img alt="user" src={require('../cc-head.png')}/>
                    <span>{post.author}</span>
                    <span>{post.timestamp}</span>
                  </div>
                  <div className="post-title">{post.title}</div>
                  <div className="post-profile">{post.body}</div>
                  <span className="vote-score"><img alt="vote" src={require('../love.png')}/>{post.voteScore}</span>
                  <Link to={'/posts/'+post.id} className="detail-tab"><img alt="user" src={require('../detail-icon.png')}/></Link>
                </li>)
              })
            }
          </ul>
        </div>
    );
  }
}

export default PostCategory;
