import { combineReducers } from 'redux'

import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT
} from '../actions'

const postState = [{
      id: '1',
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: '都好都好都好都好都好都好很多很好的'
    },{
      id: '2',
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: '都好都好都好都好都好都好很多很好的'
    },{
      id: '3',
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: '都好都好都好都好都好都好很多很好的'
    },{
      id: '5',
      timestamp: new Date().getTime(),
      title: '我是帖子',
      author: 'zjf',
      category: 'react',
      voteScore: 100,
      deleted: false,
      body: '都好都好都好都好都好都好很多很好的'
    }]

function post (state = postState, action) {
  switch (action.type) {
    case ADD_POST:      

      return {
        ...state
      }
    case UPDATE_POST:      

      return {
        ...state
      }
    case DELETE_POST:      

      return {
        ...state
      }
    default:
      return state
  }
}

const commentState = [];
function comment (state = commentState, action) {
  switch (action.type) {
    case ADD_COMMENT:      

      return {
        ...state
      }
    case UPDATE_COMMENT:      

      return {
        ...state
      }
    case DELETE_COMMENT:      

      return {
        ...state
      }
    default :
      return state
  }
}

export default combineReducers({
  post,
  comment,
})