import changeNationality from "./nationality.js";
import userReducer from './user.js';

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        nationality: changeNationality,
        user: userReducer
    }
);

export default reducers;