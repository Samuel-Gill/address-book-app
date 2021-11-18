import changeNationality from "./nationality";
import getAPI from "./api";
import userReducer from '../user/userReducer'

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeNationality,
        getAPI,
        user: userReducer
    }
);

export default reducers;