import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import Header from './Header'
import CategorySelect from './CategorySelect'
import './App.css';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.selectCateGory = this.selectCateGory.bind(this)
  }  

  state = {
    redirectToReferrer: false,
    toCategory: ''
  }

  selectCateGory(category) {
    if (category) {
      this.setState({
        redirectToReferrer: true,
        toCategory: category
      })
    }
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={'/'+this.state.toCategory+'/posts'} />
    } else {
      return (
        <div className="Home">
        <Header title="所有帖子"/>
        <header className="home-header">
          <label>排序：</label><select className="select-input"><option>评分</option><option>时间</option></select>
          <label>分类：</label><CategorySelect categorys={this.props.categorys} selectCateGory={this.selectCateGory}/>
        </header>
        <div className="home-main">
          <ul className="post-list">
            {
              this.props.posts.map((post) => {
                return (<li key={post.id}>
                  <div className="post-header">
                    <img alt="user" src={require('../cc-head.png')}/>
                    <span>{post.author}</span>
                    <span>{post.timestamp}</span>
                  </div>
                  <div className="post-title">{post.title}</div>
                  <div className="post-profile">{post.body}</div>
                  <span className="vote-score"><img alt="vote" src={require('../love.png')}/>{post.voteScore}</span>
                  <Link to={'/posts/'+post.id} className="detail-tab"><img alt="detail" src={require('../detail-icon.png')}/></Link>
                  <Link to={'/'+post.category+'/posts'} className="type-tab">{post.category}</Link>
                </li>)
              })
            }
          </ul>
        </div>
      </div>)
    }
  }
}

export default HomePage;
