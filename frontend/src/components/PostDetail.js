import React, { Component } from 'react';
import './App.css';

class PostDetail extends Component {
  state = {
    post: {
      body: "hjghdjghjghfjghfjghjh后果会很孤鸿寡鹄孤鸿寡鹄孤鸿寡鹄红歌会金刚经金刚经呱唧呱唧呱唧呱唧就感觉感觉湖广会馆湖广会馆和韩庚韩庚韩庚韩庚韩寒"
    }
  }

  render() {
    const post = this.state.post;
    return (
      <div className="post-detail">
        <p className="post-content">
          {post.body}
        </p>
        <div class="post-comment">
          <h2 class="comment-title">
            <span>评论</span>
            <span class="comment-total"></span>
          </h2>
          <div class="comment-reply">
            <img src=""  class="user-avatar"/>
            <textarea class="comment-input" name="" id="" cols="30" rows="10"></textarea>
            <button class="js-add-comment">发表评论</button>
            <div class="user-logout">
              <span class="user-name">cover</span>
              <a href="" class="js-logout">登出</a>
            </div>
          </div>
          <ul class="comment-list"></ul>
        </div>
      </div>
    );
  }
}

export default PostDetail;
