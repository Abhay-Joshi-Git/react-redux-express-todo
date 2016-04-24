import ToDoReducer from "./ToDoReducer.js";

const ToDoListReducer = (state = [], action = {}) => {

    if (action.error) {
        console.log(action.payload);
        return state;
    }

    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.payload];
        case "LOAD_TODOS":
            return action.payload;
        default :
            return state;
    }
};

const ToDos = (state, action) => {
    var newState = ToDoListReducer(state, action);
    return ToDoReducer(newState, action);
};

export default ToDos;