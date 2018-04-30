import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import CategorySelect from './CategorySelect'
import RankingChanger from './RankingChanger'
import PostList from './PostList'
import './App.css';

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.selectCateGory = this.selectCateGory.bind(this)
    this.changeRanking = this.changeRanking.bind(this)
  }  

  state = {
    ranking: '评分'
  }

  selectCateGory(category) {
    if (category) {
      this.setState({
        redirectToReferrer: true,
        toCategory: category
      })
      this.props.history.push('/' + category + '/posts')
    }
  }

  changeRanking(ranking) {
    this.setState({
      ranking: ranking
    })
  }

  render() {
    const posts = this.props.posts.sort((() => {
        if (this.state.ranking === '评分') return (a, b) => b.voteScore - a.voteScore
        else return (a, b) => b.timestamp - a.timestamp
      })())
      return (
        <div className="Home">
          <Header title="所有帖子"/>
          <header className="home-header">
            <label>排序：</label><RankingChanger value={this.state.ranking} changeRanking={this.changeRanking}/>
            <Link to='/add'><img className="create-btn" alt="create post" src={require('../Add.png')}/></Link><br/>
            <label>标签：</label>
            <p>
            {this.props.categorys.map((category) => <span className="type-tab" key={category.path} onClick={() => this.selectCateGory(category.path)}>{category.name}</span>)}
            </p>
            
          </header>
        <PostList posts={posts}/>
      </div>)
  }
}

export default HomePage;
