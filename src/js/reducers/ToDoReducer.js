import _ from "lodash";

export default (state, action) => {
    switch (action.type) {
        case "TOGGLE_TODO" :
            let todo = action.todo;
            if (!todo) break;
            let index = _.findIndex(state, {id: todo.id});
            let updatedState = _.reject(state, {id: todo.id});
            updatedState.splice(index, 0, todo);
            return updatedState;
        case "DELETE_TODO" :
            return _.reject(state, {id: action.id});
        default:
            return state;
    }
};