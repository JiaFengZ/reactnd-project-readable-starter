import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getCategories }  from '../API'
import { getPostsByCategory, fetchAllPosts, getPostDetail, addPost, updatePost, deletePost, addComment, updateComment, deleteComment } from '../actions'
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
              <Route exact path='/' render={() => <HomePage categorys={this.state.categorys} posts={this.props.posts.allPosts}/>} />
              <Route path='/:category/posts' render={(props) => <PostCategory match={props.match} goBack={props.history.goBack} getPosts={this.props.getPostsByCategory} posts={this.props.posts.categoryPosts}/>} />
              <Route path='/posts/:id' render={(props) => <PostDetail match={props.match} goBack={props.history.goBack} getDetail={this.props.getPostDetail} post={this.props.posts.postDetail}/>}/>
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
    getPostsByCategory: (category) => dispatch(getPostsByCategory(category)),
    getPostDetail: (id) => dispatch(getPostDetail(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
