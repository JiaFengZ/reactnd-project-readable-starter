import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import './App.css';

class HomePage extends Component {
  state = {
    posts: [{
      id: '1',
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: '都好都好都好都好都好都好很多很好的'
    },{
      id: '2',
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: '都好都好都好都好都好都好很多很好的'
    },{
      id: '3',
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: '都好都好都好都好都好都好很多很好的'
    },{
      id: '5',
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: '都好都好都好都好都好都好很多很好的'
    }]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <label>排序：</label><select><option>评分</option><option>时间</option></select>
        </header>
        <div className="App-main">
          <ul className="post-list">
            {
              this.state.posts.map((post) => {
                return (<li key={post.id}>
                  <div className="post-title">{post.title}</div>
                  <div className="post-author">{post.author}</div>
                  <div className="post-body">{post.body}</div>
                  <i><Link to='/detail'>详情</Link></i>
                  <i>类型：<Link to='/category'>{post.category}</Link></i>
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
