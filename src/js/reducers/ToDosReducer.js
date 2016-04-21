import ToDoReducer from "./ToDoReducer.js";

const ToDoListReducer = (state = [], action = {}) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.todo];
        case "LOAD_TODOS":
            return action.data;
        default :
            return state;
    }
};

const ToDos = (state, action) => {
    var newState = ToDoListReducer(state, action);
    return ToDoReducer(newState, action);
};

export default ToDos;