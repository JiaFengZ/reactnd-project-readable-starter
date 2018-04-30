import React, { Component } from 'react'
import Header from './Header'
import './App.css';

class PostEdit extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    post: this.props.post
  }

  componentDidMount() {
    if (!this.state.post.id) {
      const that = this
      this.props.getDetail(this.props.match.params.id).then((res) => {
        that.input.value = res.postDetail.title
        that.textarea.value = res.postDetail.body
      })
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
    	<div>
    		<Header title="编辑帖子" backLink={true} goBack={this.props.goBack}/>    	
	    	<form className="post-edit" onSubmit={this.handleSubmit}>
	    		<p><label>标题：</label><input type="text" defaultValue={this.props.post.title} ref={(input) => this.input = input}/></p>
	    		<p><label>正文：</label><textarea row="4"defaultValue={this.props.post.body} ref={(textarea) => this.textarea = textarea}></textarea></p>
	    		<button type="submit" className="submit-btn">确定</button><button className="cancel-btn"><a onClick={this.props.goBack}>取消</a></button>
	    	</form>
    	</div>
    )
  }
}

export default PostEdit;
