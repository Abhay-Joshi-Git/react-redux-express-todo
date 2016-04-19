import _ from "lodash";

export default (state, action) => {
    var todo = action.todo;
    switch (action.type) {
        case "TOGGLE_TODO":
            if (!todo) break;
            return [..._.reject(state, {id: todo.id}),
                {
                    ...todo,
                    completed: !todo.completed
                }
            ];
        default:
            return state;
    }
};