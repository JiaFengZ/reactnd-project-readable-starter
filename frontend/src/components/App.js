import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getCategories }  from '../API'
import { getPostsByCategory, fetchAllPosts, getPostDetail, addPost, updatePost, deletePost, getComments, addComment, updateComment, deleteComment } from '../actions'
import HomePage from './Home'
import PostCategory from './PostCategory'
import PostDetail from './PostDetail'
import PostEdit from './PostEdit' 

class App extends Component {
  state = {
    preLink: '/',
    categorys: []
  }

  componentDidMount() {
    const { fetchAllPosts } = this.props
    fetchAllPosts()
    this.fetchCategorys()
  }

  fetchCategorys() {
    getCategories().then((data) => {
      this.setState({
        categorys: data
      })
    })
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
              <Route exact path='/' render={(props) => <HomePage history={props.history} categorys={this.state.categorys} posts={this.props.post.allPosts}/>} />
              <Route path='/:category/posts' render={(props) => <PostCategory match={props.match} goBack={props.history.goBack} getPosts={this.props.getPostsByCategory} posts={this.props.post.categoryPosts}/>} />
              <Route path='/posts/:id' render={(props) => <PostDetail match={props.match} goBack={props.history.goBack} getDetail={this.props.getPostDetail} getComments={this.props.getComments} comments={this.props.comment.comments} post={this.props.post.postDetail}/>}/>
              <Route path='/edit/:id' render={(props) => <PostEdit match={props.match} goBack={props.history.goBack} post={this.props.post.postDetail}  getDetail={this.props.getPostDetail}/>}/>
              <Route path='/add' render={(props) => <PostEdit match={props.match} goBack={props.history.goBack} categorys={this.state.categorys}/>}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

function mapStateToProps ({ post, comment }) { // state = {post: [], comment: []}

  return {
    post: post,
    comment: comment
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
    getPostsByCategory: (category) => dispatch(getPostsByCategory(category)),
    getPostDetail: (id) => dispatch(getPostDetail(id)),
    getComments: (id) => dispatch(getComments(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
