import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CHANGE_NATIONALITY
} from '../types/userTypes.js'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: [...state.users, ...action.payload],
        error: ''
      }
    case CHANGE_NATIONALITY:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default: return state
  }
}

export default reducer