import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { Reducer } from "./Reducer";

const Store = createStore(Reducer, applyMiddleware(thunk));

export default Store;