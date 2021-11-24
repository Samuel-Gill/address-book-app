import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE
} from '../user/userTypes.js'

export const fetchUsers = (nat='CH',results=50,page=1) => {
  console.log("Fetch results "+results);
  return (dispatch) => {
    dispatch(fetchUsersRequest())
    axios
      .get(`https://randomuser.me/api/?results=${results}&nat=${nat}&page=${page}`)
      .then(response => {
        // response.data.results is the users
        const users = response.data.results
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