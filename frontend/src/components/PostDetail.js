import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './App.css';

class PostDetail extends Component {

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
    this.props.getComments(this.props.match.params.id)
  }

  render() {
    const { post, comments, goBack }= this.props;
    return (
      <div className="post-detail">
        <Header title="帖子详情" backLink={true} goBack={goBack}/>
        <p className="post-header">
          <img alt="user" src={require('../cc-head.png')}/>
          <span>{post.author}</span>
          <span>{post.timestamp}</span>
          <i className="edit-btns">
            <button><img alt="delete" src={require('../delete.png')}/></button>
            <button><Link to={'/edit/'+post.id}><img alt="edit" src={require('../edit.png')}/></Link></button>
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
              comments.map((comment, index) => {
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
