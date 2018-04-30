import { combineReducers } from 'redux'

import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  UPDATE_POSTVOTE,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  GET_ALLPOSTS,
  GET_CATEGORYPOSTS,
  GET_POSTDETAIL,
  GET_COMMENTS
} from '../actions'

const initialPostState = {
  allPosts: [],
  categoryPosts: [],
  postDetail: {}
}

function post (state = initialPostState, action) {
  const { allPosts, categoryPosts, postDetail } = action
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
    case GET_ALLPOSTS:
      return {
        ...state,
        allPosts: allPosts
      }
    case GET_CATEGORYPOSTS:
      return {
        ...state,
        categoryPosts: categoryPosts
      }
    case GET_POSTDETAIL: 
      return {
        ...state,
        postDetail: postDetail
      }
    case UPDATE_POSTVOTE:
      return {
        ...state,
        voteChange: true
      }
    default:
      return state
  }
}

const commentState = {
  comments: []
}
function comment (state = commentState, action) {
  const { comments } = action
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
    case GET_COMMENTS:
      return {
        ...state,
        comments: comments
      }
    default :
      return state
  }
}

export default combineReducers({
  post,
  comment,
})