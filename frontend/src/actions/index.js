import * as API from '../API'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const GET_ALLPOSTS = 'GET_ALLPOSTS'
export const GET_CATEGORYPOSTS = 'GET_CATEGORYPOSTS'
export const GET_POSTDETAIL = 'GET_POSTDETAIL'
export const GET_COMMENTS = 'GET_COMMENTS'
export const UPDATE_POSTVOTE = 'UPDATE_POSTVOTE'

function receivePosts(data) {
  return {
    type: GET_ALLPOSTS,
    allPosts: data,
    receivedAt: Date.now()
  }
}

export function fetchAllPosts() {

  return function (dispatch) {
    //dispatch(requestPosts(subreddit)) 正在发起请求
    return API.getAllPosts()
    .then(data => data.map((item) => {
      if (item.timestamp) {
        const date = new Date(item.timestamp)
        item.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes()
      }
      return item
    }))
      .then(data =>
        dispatch(receivePosts(data)) //接收到数据
      )
  }
}

function receivePostsByCategory(data) {
  return {
    type: GET_CATEGORYPOSTS,
    categoryPosts: data
  }
}

export function getPostsByCategory(category) {
  return function(dispatch) {
    return API.getPostsByCategory(category)
    .then(data => data.map((item) => {
      if (item.timestamp) {
        const date = new Date(item.timestamp)
        item.date = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDay() + ' ' + date.getHours() + ':' + date.getMinutes()
      }
      return item
    }))
    .then(data => dispatch(receivePostsByCategory(data)))
  }
}

function receivePostDetail(data) {
  return {
    type: GET_POSTDETAIL,
    postDetail: data
  }
}

export function getPostDetail(id) {
  return function(dispatch) {
    return API.getPostDetail(id)
    .then(data => dispatch(receivePostDetail(data)))
  }
}

function updatePostVote() {
  return {
    type: UPDATE_POSTVOTE
  }
}

export function votePost(id, type) {
  return function(dispatch) {
    return API.votePost(id, type)
    .then(data => dispatch(updatePostVote()))
  }
}

export function addPost ({}) {
  return {
    type: ADD_POST,
  }
}

export function updatePost ({}) {
  return {
    type: UPDATE_POST,
  }
}

export function deletePost ({}) {
  return {
    type: DELETE_POST,
  }
}

function receiveComments (data) {
  return {
    type: GET_COMMENTS,
    comments: data
  }
}

export function getComments(id) {
  return function(dispatch) {
    return API.getComments(id)
    .then(data => dispatch(receiveComments(data)))
  }
}

export function addComment ({}) {
  return {
    type: ADD_COMMENT,
  }
}

export function updateComment ({}) {
  return {
    type: UPDATE_COMMENT,
  }
}

export function deleteComment ({}) {
  return {
    type: DELETE_COMMENT,
  }
}
