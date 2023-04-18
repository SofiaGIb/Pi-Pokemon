

import {createStore,applyMiddleware,compose} from "redux";
import rootReducer from "./Reducer";
import thunkMiddleware from "redux-thunk";

const composeRealizado = compose;

const store = createStore(
    rootReducer,
    composeRealizado(applyMiddleware(thunkMiddleware))
);
export default store; 