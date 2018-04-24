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
    },

    comments: [{
      id: 1,
      timestamp: new Date().getTime(),
      body: '好极了乐乐乐乐乐乐乐乐乐乐',
      author: 'zjf',
      voteScore: 45,
      deleted: false
    },{
      id: 2,
      timestamp: new Date().getTime(),
      body: '好极了乐乐乐乐乐乐乐乐乐乐',
      author: 'zjf',
      voteScore: 45,
      deleted: false
    },{
      id: 3,
      timestamp: new Date().getTime(),
      body: '好极了乐乐乐乐乐乐乐乐乐乐',
      author: 'zjf',
      voteScore: 45,
      deleted: false
    },{
      id: 4,
      timestamp: new Date().getTime(),
      body: '好极了乐乐乐乐乐乐乐乐乐乐',
      author: 'zjf',
      voteScore: 45,
      deleted: false
    }]
  }

  render() {
    const post = this.state.post;
    return (
      <div className="post-detail">
        <p className="post-header">
          <img src={require('../cc-head.png')}/>
          <span>{post.author}</span>
          <span>{post.timestamp}</span>
          <i className="edit-btns">
            <button><img src={require('../delete.png')}/></button>
            <button><img src={require('../edit.png')}/></button>
          </i>
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
            <label>排序：</label><select className="select-input"></select>
          </h2>
          <div className="comment-reply">
            <img src=""  className="user-avatar"/>
            <textarea className="comment-input" name="" id="" cols="30" rows="10"></textarea>
            <button className="js-add-comment">发表评论</button>
          </div>
         <ul className="post-list">
            {
              this.state.comments.map((comment) => {
                return (<li key={post.id}>
                  <div className="post-header">
                    <img src={require('../cc-head.png')}/>
                    <span>{comment.author}</span>
                    <span>{comment.timestamp}</span>
                  </div>
                  <div className="post-profile">{comment.body}</div>
                  <span className="vote-score"><img src={require('../love.png')}/>{comment.voteScore}</span>
                </li>)
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default PostDetail;
