import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { upVoteComment, downVoteComment, upVotePost, downVotePost, getPostDetail, deletePost, getComments, addComment, updateComment, deleteComment, changeCommentRanking } from '../actions'
import Header from './share/Header'
import RankingChanger from './share/RankingChanger'
import './App.css';

function htmlEncode(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

class PostDetail extends Component {

  constructor(props) {
    super(props)
    this.postComment = this.postComment.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
    this.cancelComment = this.cancelComment.bind(this)
    this.editComment = this.editComment.bind(this)
    this.deletePost = this.deletePost.bind(this)
  }  

  deletePost(post) {
    this.props.deletePost(post).then(() => this.props.goBack())
  }

  postComment() {
    if (this.curCommentId) {
      this.props.updateComment(this.props.postDetail.id, this.curCommentId, {
        timestamp: new Date().getTime(),
        body: htmlEncode(this.commentInput.value)
      }).then(() => {
        this.commentInput.value = ''
        this.curCommentId = null
      })
    } else if (this.commentInput.value) {
      this.props.addComment({
        id: new Date().getTime(),
        timestamp: new Date().getTime(),
        body: htmlEncode(this.commentInput.value),
        author: '匿名用户',
        parentId: this.props.postDetail.id
      }).then(() => {
        this.commentInput.value = ''
      })
    }
  }

  deleteComment(id) {
    this.curCommentId = null
    this.props.deleteComment(id, this.props.postDetail.id)
  }


  editComment(comment) {
    this.curCommentId = comment.id
    this.commentInput.value = comment.body
    this.commentInput.focus()
  }

  cancelComment() {
    this.commentInput.value = ''
    this.curCommentId = null
  }

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
    this.props.getComments(this.props.match.params.id)
  }

  render() {
    const goBack = this.props.goBack
    const post = this.props.postDetail
    const comments = Array.isArray(this.props.comments) ? this.props.comments.sort((() => {
        if (this.props.commentRanking === '评分') return (a, b) => b.voteScore - a.voteScore
        else return (a, b) => b.timestamp - a.timestamp
      })()) : []
    return (
      <div className="post-detail">
        <Header title="帖子详情" backLink={true} goBack={goBack}/>
        <p className="post-header">
          <img alt="user" src={require('../images/cc-head.png')}/>
          <span>{post.author}</span>
          <span>{post.date}</span>
          <i className="edit-btns">
            <button onClick={() => this.props.upVotePost(post)}><img alt="delete" src={require('../images/upvote.png')}/></button>
            <button onClick={() => this.props.downVotePost(post)}><img alt="delete" src={require('../images/downvote.png')}/></button>
            <button onClick={() => this.deletePost(post)}><img alt="delete" src={require('../images/delete.png')}/></button>
            <button><Link to={'/edit/'+post.id}><img alt="edit" src={require('../images/edit.png')}/></Link></button>
          </i>
        </p>
        <p className="post-title">{post.title}</p>
        <p className="vote-score"><img alt="vote" src={require('../images/love.png')}/>{post.voteScore}</p>
        <p className="post-content">
          {post.body}
        </p>
        <div className="post-comment">
          <h2 className="comment-title">
            <span>评论</span>
            <span className="comment-total">({comments.length})</span>
          </h2>
          
          <div className="comment-reply">
            <textarea className="comment-input"  cols="30" rows="10" ref={(input) => {this.commentInput=input}}></textarea>
            <button className="js-add-comment" onClick={this.postComment}>发表</button>
            <button className="js-add-comment" onClick={this.cancelComment}>取消</button>
          </div>
          <label>排序：</label><RankingChanger value={this.props.commentRanking} changeRanking={this.props.changeRanking}/>
         <ul className="post-list">
            {
              comments.map((comment, index) => {
                return (<li key={comment.id}>
                  <div className="post-header">
                    <img alt="user" src={require('../images/cc-head.png')}/>
                    <span>{comment.author}</span>
                    <span>{comment.date}</span>
                  </div>
                  <div className="post-profile">{comment.body}</div>
                  <span className="vote-score"><img alt="vote" src={require('../images/love.png')}/>{comment.voteScore}</span>
                  <p className="comment-handle">
                    <img alt="upvote" onClick={() => this.props.upVoteComment(comment.id, this.props.postDetail.id)} src={require('../images/upvote.png')}/>
                    <img alt="downvote" onClick={() => this.props.downVoteComment(comment.id, this.props.postDetail.id)} src={require('../images/downvote.png')}/>
                    <img onClick={() => this.deleteComment(comment.id)} alt="delete" src={require('../images/delete.png')}/>
                    <img alt="edit" onClick={() => this.editComment(comment)} src={require('../images/edit.png')}/>
                  </p>
                  </li>)
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ post, comment, ranking }) { 

  return {
    ...post,
    ...comment,
    commentRanking: ranking.commentRanking
  }
}

function mapDispatchToProps (dispatch) {  //注册派发action的事件
  return {
    deletePost: (post) => dispatch(deletePost(post)),
    addComment: (data) => dispatch(addComment(data)),
    updateComment: (postId, commentId, comment) => dispatch(updateComment(postId, commentId, comment)),
    deleteComment: (id, parentId) => dispatch(deleteComment(id, parentId)),
    getComments: (id) => dispatch(getComments(id)),
    upVotePost: (post) => dispatch(upVotePost(post)),
    downVotePost: (post) => dispatch(downVotePost(post)),
    upVoteComment: (id, postId) => dispatch(upVoteComment(id, postId)),
    downVoteComment: (id, postId) => dispatch(downVoteComment(id, postId)),
    getDetail: (id) => dispatch(getPostDetail(id)),
    changeRanking: (ranking) => dispatch(changeCommentRanking(ranking)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail)
