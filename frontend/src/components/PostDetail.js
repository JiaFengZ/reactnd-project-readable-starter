import React, { Component } from 'react';
import './App.css';

class PostDetail extends Component {
  state = {
    post: {
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: "hjghdjghjghfjghfjghjh后果会很孤鸿寡鹄孤鸿寡鹄孤鸿寡鹄红歌会金刚经金刚经呱唧呱唧呱唧呱唧就感觉感觉湖广会馆湖广会馆和韩庚韩庚韩庚韩庚韩寒"
    }
  }

  render() {
    const post = this.state.post;
    return (
      <div className="post-detail">
        <p className="post-header">
          <img src={require('../cc-head.png')}/>
          <span>{post.author}</span>
          <span>{post.timestamp}</span>
        </p>
        <p className="post-title">{post.title}</p>
        <p className="vote-score"><img src={require('../love.png')}/>{post.voteScore}</p>
        <p className="post-content">
          {post.body}
        </p>
        <div className="post-comment">
          <h2 className="comment-title">
            <span>评论</span>
            <span className="comment-total"></span>
          </h2>
          <div className="comment-reply">
            <img src=""  className="user-avatar"/>
            <textarea className="comment-input" name="" id="" cols="30" rows="10"></textarea>
            <button className="js-add-comment">发表评论</button>
          </div>
          <ul className="comment-list"></ul>
        </div>
      </div>
    );
  }
}

export default PostDetail;
