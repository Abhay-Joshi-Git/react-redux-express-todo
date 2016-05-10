import _ from "lodash";
import Immutable from "immutable";

const initialState = Immutable.List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case "TOGGLE_TODO" :
            let todo = action.todo;
            if (!todo) {
                return state;
            }
            return state.map(item => {
                if (item.get("id") === todo.get("id")) {
                    return Immutable.Map(todo);
                } else {
                    return item;
                }
            })
        case "DELETE_TODO" :
            return state.filter(item => item.get("id") !== action.id);
        default:
            return state;
    }
};
