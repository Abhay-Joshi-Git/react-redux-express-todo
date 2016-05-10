import ToDoReducer from "./ToDoReducer.js";
import Immutable from "immutable";

const initialState = Immutable.List([]);

const ToDoListReducer = (state = initialState, action = {}) => {
    if (!action) {
        return state;
    }
    switch (action.type) {
        case "ADD_TODO":
            return state.push(Immutable.Map(action.todo));
        case "LOAD_TODOS":
            console.log(action);
            return Immutable.fromJS(action.data);
        default :
            return state;
    }
};

const ToDos = (state, action) => {
    var newState = ToDoListReducer(state, action);
    return ToDoReducer(newState, action);
};

export default ToDos;
