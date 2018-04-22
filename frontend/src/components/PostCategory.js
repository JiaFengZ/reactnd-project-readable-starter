import React, { Component } from 'react';
import './App.css';

class PostCategory extends Component {
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
      <div className="category-container">
          <ul className="post-list">
            {
              this.state.posts.map((post) => {
                return (<li key={post.id}>
                  <div className="post-title">{post.title}</div>
                  <div className="post-author">{post.author}</div>
                  <div className="post-body">{post.body}</div>
                  <i>详情</i>
                </li>)
              })
            }
          </ul>
        </div>
    );
  }
}

export default PostCategory;
