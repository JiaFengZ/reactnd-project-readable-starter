import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { getCategories, getPostsByCategory, fetchAllPosts, getPostDetail, addPost, updatePost } from '../actions'
import HomePage from './Home'
import PostCategory from './PostCategory'
import PostDetail from './PostDetail'
import PostEdit from './PostEdit' 

class App extends Component {

  componentDidMount() {
    const { fetchAllPosts, getCategories } = this.props
    fetchAllPosts()
    getCategories()
  }

  render() {
    return (
        <BrowserRouter>
          <Switch>
              <Route exact path='/' render={(props) => <HomePage history={props.history} categorys={this.props.category.categories} posts={this.props.post.allPosts}/>} />
              <Route path='/:category/posts' render={(props) => <PostCategory match={props.match} goBack={props.history.goBack} getPosts={this.props.getPostsByCategory} posts={this.props.post.categoryPosts}/>} />
              <Route path='/posts/:id' render={(props) => <PostDetail match={props.match} goBack={props.history.goBack} />}/>
              <Route path='/edit/:id' render={(props) => <PostEdit match={props.match} updatePost = {this.props.updatePost}
                goBack={props.history.goBack} post={this.props.post.postDetail}  getDetail={this.props.getPostDetail}/>}/>
              <Route path='/add' render={(props) => <PostEdit match={props.match} addPost = {this.props.addPost}
                goBack={props.history.goBack} categorys={this.props.category.categories}/>}/>
          </Switch>
        </BrowserRouter>
    )
  }
}

function mapStateToProps ({ post, category }) { // state = {post: {}, category: {}}
  return {
    post: post,
    category: category
  }
}

function mapDispatchToProps (dispatch) {  //注册派发action的事件
  return {
    getCategories: () => dispatch(getCategories()),
    getPostDetail: (id) => dispatch(getPostDetail(id)),
    addPost: (data) => dispatch(addPost(data)),
    updatePost: (id, data) => dispatch(updatePost(id, data)),
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    getPostsByCategory: (category) => dispatch(getPostsByCategory(category))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
