import _ from "lodash";

export default (state, action) => {

    //have a look at https://github.com/acdlite/redux-promise/blob/master/src/index.js
    // if error occurs action.error property gets added with value true.
    if (action.error) {
        return state;
    }


    let todo = action.payload;
    switch (action.type) {
        case "TOGGLE_TODO" :
            if (!todo) break;
            let index = _.findIndex(state, {id: todo.id});
            let updatedState = _.reject(state, {id: todo.id});
            updatedState.splice(index, 0, todo);
            return updatedState;
        case "DELETE_TODO" :
            return _.reject(state, {id: action.payload});
        default:
            return state;
    }
};