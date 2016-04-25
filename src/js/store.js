import * as Redux from "redux";
import promiseMiddleware from 'redux-promise';
import thunk from "redux-thunk";
import ToDos  from './reducers/ToDosReducer.js';
import { loadingToDos } from './reducers/loadingReducer.js';

var reducers = Redux.combineReducers({
    ToDos,
    loadingToDos
});

export default Redux.createStore(
    reducers,
    Redux.compose(
        Redux.applyMiddleware(thunk, promiseMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

