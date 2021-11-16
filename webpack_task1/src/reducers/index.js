import changeTheNumber from "./updown";
import changeNationality from "./nationality";
import getAPI from "./api";

import { combineReducers } from "redux";

const reducers = combineReducers(
    {
        changeTheNumber,
        changeNationality,
        getAPI
    }
);

export default reducers;