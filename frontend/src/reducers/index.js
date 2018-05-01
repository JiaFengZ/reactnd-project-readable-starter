import { combineReducers } from 'redux'

import {
  GET_ALLPOSTS,
  GET_CATEGORYPOSTS,
  GET_POSTDETAIL,
  GET_COMMENTS,
  GET_CATEGORYS,
  CHNAGE_RANKING,
  CHNAGE_COMMENT_RANKING
} from '../actions'

const initialPostState = {
  allPosts: [],
  categoryPosts: [],
  postDetail: {}
}

function post (state = initialPostState, action) {
  const { allPosts, categoryPosts, postDetail } = action
  switch (action.type) {
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

const commentState = {
  comments: []
}
function comment (state = commentState, action) {
  const { comments } = action
  switch (action.type) {
    case GET_COMMENTS:
      return {
        ...state,
        comments: comments
      }
    default :
      return state
  }
}

function category(state = {categories: []}, action) {
  const { categories } = action
  switch (action.type) {
    case GET_CATEGORYS:
      return {
        ...state,
        categories: categories
      }
    default :
      return state
  }
}


function ranking(state = {ranking: '评分', commentRanking:'评分'}, action) {
  const { ranking, commentRanking } = action
  switch (action.type) {
    case CHNAGE_RANKING:
      return {
        ...state,
        ranking: ranking
      }
    case CHNAGE_COMMENT_RANKING:
      return {
        ...state,
        commentRanking: commentRanking
      }
    default :
      return state
  }
}

export default combineReducers({
  post,
  comment,
  category,
  ranking
})