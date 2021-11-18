import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools} from "redux-devtools-extension";
import reducers  from "./reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";

const store = createStore(reducers, composeWithDevTools(applyMiddleware(logger,thunk)));

export default store;