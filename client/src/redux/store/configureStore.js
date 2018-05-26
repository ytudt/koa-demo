/**
 * Created by Daguang Li on 11/27/2017.
 */
import { createStore, applyMiddleware } from "redux"
import rootReducer from "../reducers/index"
import thunk from "redux-thunk";

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;