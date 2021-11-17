import changeNationality from "./nationality";
import getAPI from "./api";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeNationality,
        getAPI
    }
);

export default reducers;