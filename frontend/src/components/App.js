import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import HomePage from './Home'
import PostCategory from './PostCategory'
import PostDetail from './PostDetail'

class App extends Component {
  state = {
    
  }

  render() {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/category' component={PostCategory} />
            <Route path='/detail' component={PostDetail} />
        </Switch>
    )
  }
}

export default App;
