import React, { Component } from 'react'
import { updatePost, addPost } from '../API'
import Header from './Header'
import CategorySelect from './CategorySelect'
import './App.css';

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.selectCateGory = this.selectCateGory.bind(this)
  }

  state = {
    post: this.props.match.params.id ? this.props.post : {},
    isAdd: !this.props.match.params.id
  }

  componentDidMount() {
    if (!this.state.post.id && !this.state.isAdd) {
      const that = this
      this.props.getDetail(this.props.match.params.id).then((res) => {
        that.input.value = res.postDetail.title
        that.textarea.value = res.postDetail.body
      })
    }
  }


  selectCateGory(category) {
    this.categorySelect = category
  }

  handleSubmit(event) {
    event.preventDefault();
    const that = this
    if (this.props.match.params.id) {
      updatePost(this.props.match.params.id, {
        title: that.input.value,
        body: that.textarea.value
      }).then(() => {
        that.props.goBack();
      })
    } else {
      addPost({
        title: that.input.value,
        body: that.textarea.value,
        id: new Date().getTime(),
        timestamp: new Date().getTime(),
        author: that.authorInput.value,
        category: that.categorySelect
      }).then(() => {
        that.props.goBack();
      })
    }
  }

  render() {
    return (
    	<div>
    		<Header title="编辑帖子" backLink={true} goBack={this.props.goBack}/>    	
	    	<form className="post-edit" onSubmit={this.handleSubmit}>
	    		{this.state.isAdd&&(<p><label>作者：</label><input type="text" ref={(input) => this.authorInput = input}/></p>)}
                     {this.state.isAdd&&(<p><label>标签：</label><CategorySelect categorys={this.props.categorys} selectCateGory={this.selectCateGory}/></p>)}
                     <p><label>标题：</label><input type="text" defaultValue={this.state.post.title} ref={(input) => this.input = input}/></p>
	    		<p><label>正文：</label><textarea row="4"defaultValue={this.state.post.body} ref={(textarea) => this.textarea = textarea}></textarea></p>
	    		<button type="submit" className="submit-btn">确定</button><button className="cancel-btn"><a onClick={this.props.goBack}>取消</a></button>
	    	</form>
    	</div>
    )
  }
}

export default PostEdit;
