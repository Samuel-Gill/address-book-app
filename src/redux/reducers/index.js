import Nationality from "./settings.js";
import userReducer from './user.js';

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        nationality: Nationality,
        user: userReducer
    }
);

export default reducers;