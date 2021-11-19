import changeNationality from "./nationality.js";
import userReducer from '../reducers/userReducer.js';

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        nationality: changeNationality,
        user: userReducer
    }
);

export default reducers;