import * as API from '../API'
export const ADD_POST = 'ADD_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const UPDATE_COMMENT = 'UPDATE_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const GET_ALLPOSTS = 'GET_ALLPOSTS'


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
      .then(data =>
        dispatch(receivePosts(data)) //接收到数据
      )
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
