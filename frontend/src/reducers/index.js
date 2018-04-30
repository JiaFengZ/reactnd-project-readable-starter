import { combineReducers } from 'redux'

import {
  ADD_POST,
  UPDATE_POST,
  DELETE_POST,
  ADD_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
  GET_ALLPOSTS,
  GET_CATEGORYPOSTS,
  GET_POSTDETAIL
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