import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Header from './Header'
import logo from '../logo.svg';
import './App.css';

class HomePage extends Component {

  render() {
    return (
      <div className="Home">
        <Header title="所有帖子"/>
        <header className="home-header">
          <label>排序：</label><select className="select-input"><option>评分</option><option>时间</option></select>
        </header>
        <div className="home-main">
          <ul className="post-list">
            {
              this.props.posts.map((post) => {
                return (<li key={post.id}>
                  <div className="post-header">
                    <img src={require('../cc-head.png')}/>
                    <span>{post.author}</span>
                    <span>{post.timestamp}</span>
                  </div>
                  <div className="post-title">{post.title}</div>
                  <div className="post-profile">{post.body}</div>
                  <span className="vote-score"><img src={require('../love.png')}/>{post.voteScore}</span>
                  <Link to='/detail' className="detail-tab"><img src={require('../detail-icon.png')}/></Link>
                  <Link to='/category' className="type-tab">{post.category}</Link>
                </li>)
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default HomePage;
