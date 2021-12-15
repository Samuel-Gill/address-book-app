import axios from 'axios';
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CLEAR_USERS
} from '../types/usertypes.js'

export const fetchUsers = (nat = 'CH', results = 50, page = 1) => {

  if (page > 1) {
    results = 50;
  }

  nat = nat.nationality;

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

export const clearUsers = () => {
  return {
    type: CLEAR_USERS
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