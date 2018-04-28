import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { fetchAllPosts, addPost, updatePost, deletePost, addComment, updateComment, deleteComment } from '../actions'
import HomePage from './Home'
import PostCategory from './PostCategory'
import PostDetail from './PostDetail'
import PostEdit from './PostEdit'

class App extends Component {
  state = {
    preLink: '/',
    
  }

  componentDidMount() {
    const { fetchAllPosts } = this.props
    fetchAllPosts()
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
              <Route exact path='/' render={() => <HomePage posts={this.props.posts.allPosts}/>} />
              <Route path='/category' render={() => <PostCategory posts={this.props.posts.allPosts}/>} />
              <Route path='/detail' component={PostDetail} />
              <Route path='/edit' component={PostEdit} />
          </Switch>
        </BrowserRouter>
    )
  }
}

function mapStateToProps ({ post, comment }) { // state = {post: [], comment: []}

  return {
    posts: post,
    comments: comment
  }
}

function mapDispatchToProps (dispatch) {  //注册派发action的事件
  return {
    addPost: (data) => dispatch(addPost(data)),
    updatePost: (data) => dispatch(updatePost(data)),
    deletePost: (data) => dispatch(deletePost(data)),
    addComment: (data) => dispatch(addComment(data)),
    updateComment: (data) => dispatch(updateComment(data)),
    deleteComment: (data) => dispatch(deleteComment(data)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
