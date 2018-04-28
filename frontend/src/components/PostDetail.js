import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
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
        <Header title="帖子详情" backLink="/category"/>
        <p className="post-header">
          <img alt="user" src={require('../cc-head.png')}/>
          <span>{post.author}</span>
          <span>{post.timestamp}</span>
          <i className="edit-btns">
            <button><img alt="delete" src={require('../delete.png')}/></button>
            <button><Link to='/edit'><img alt="edit" src={require('../edit.png')}/></Link></button>
          </i>
        </p>
        <p className="post-title">{post.title}</p>
        <p className="vote-score"><img alt="vote" src={require('../love.png')}/>{post.voteScore}</p>
        <p className="post-content">
          {post.body}
        </p>
        <div className="post-comment">
          <h2 className="comment-title">
            <span>评论</span>
            <span className="comment-total"></span>
            (排序：<select className="select-input"></select>)
          </h2>
          <div className="comment-reply">
            <textarea className="comment-input" name="" id="" cols="30" rows="10"></textarea>
            <button className="js-add-comment">发表评论</button>
          </div>
         <ul className="post-list">
            {
              this.state.comments.map((comment, index) => {
                return (<li key={comment.id}>
                  <div className="post-header">
                    <img alt="user" src={require('../cc-head.png')}/>
                    <span>{comment.author}</span>
                    <span>{comment.timestamp}</span>
                  </div>
                  <div className="post-profile">{comment.body}</div>
                  <span className="vote-score"><img alt="vote" src={require('../love.png')}/>{comment.voteScore}</span>
                  <img alt="delete" style={{'marginLeft':'10px'}} src={require('../delete.png')}/>
                  <img alt="edit" src={require('../edit.png')}/>
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
