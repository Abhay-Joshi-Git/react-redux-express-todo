export const loadToDosAPI = (dispatch) => fetch(
    'http://localhost:3000/todos'
).then(data => {
        dispatch({
            type: "LOADING_TODOS",
            loadingToDos: false
        });
        return data.json()
    }
);

export const AddToDoAPI = (todo) => fetch(
    'http://localhost:3000/todo',
    {
        method: 'POST',
        body: todo
    }
).then(data => data.json());

