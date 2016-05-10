import * as Redux from "redux";
import thunk from 'redux-thunk';
import ToDos  from './reducers/ToDosReducer.js';
import { loadingToDos } from './reducers/loadingReducer.js';
import Immutable from "immutable";
import { combineReducers } from "redux-immutablejs";

// const reducer = combineReducers(reducers);
// const state = Immutable.fromJS({});
//
// const store = reducer(state);
// export default createStore(reducer, store);

const reducers = combineReducers({
    ToDos,
    loadingToDos
});

const state = Immutable.fromJS({});
const store = reducers(state);

export default Redux.createStore(
    reducers,
    store,
    Redux.compose(
        Redux.applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);
