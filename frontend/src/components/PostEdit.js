import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import './App.css';

class PostEdit extends Component {
  state = {
    
  }

  render() {
    return (
    	<div>
    		<Header title="编辑帖子" backLink="/detail"/>    	
	    	<form className="post-edit">
	    		<p><label>标题：</label><input type="text"/></p>
	    		<p><label>正文：</label><textarea row="4"></textarea></p>
	    		<button className="submit-btn">确定</button><button className="cancel-btn"><Link to='/detail'>取消</Link></button>
	    	</form>
    	</div>
    )
  }
}

export default PostEdit;
