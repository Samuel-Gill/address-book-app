import axios from 'axios'
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from './userTypes.js'

export const fetchUsers = (nat,results,page) => {
  console.log("Fetch results "+results);
  console.log("Fetch nat "+nat);
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get(`https://randomuser.me/api/?results=${results}&nat=${nat}&page=${page}`) //https://jsonplaceholder.typicode.com/users
      .then(response => {
        // response.data is the users
        const users = response.data.results
        console.log("User Action => ");
        console.log(users);
        dispatch(fetchUsersSuccess(users))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  }
}

export const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  }
}

export const fetchUsersFailure = error => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}