//error handling not done properly,
// in case of errors, action should have been dispatched saying loading error
import { createAction } from "redux-actions";

const setLoadingToDos = (loading) => ({
    type: "LOADING_TODOS",
    loadingToDos: loading
});

const loadToDosAPI = () => {
    return fetch('http://localhost:3000/todos')
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                return Promise.reject(response.statusText);
            }
        });
};

/*
* what is happening here ? - we are using 2 middle-wares - provided by redux-thunk and redux-promise
* reason - thunk as we want to use dispatch for loading actions. promise for sugar allows us to return promise
* */
export const loadToDos = () => (dispatch) => {
    dispatch(createAction('LOAD_TODOS', async () => {
        dispatch(setLoadingToDos(true));
        try {
            return await loadToDosAPI();
        } finally {
            dispatch(setLoadingToDos(false));
        }
    })());
};

const addToDoAPI = (todo) => fetch(
    'http://localhost:3000/todo',
    {
        method: 'POST',
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({todo})
    }
).then((response) => {
        if (response.ok) {
            return todo;
        } else {
            return Promise.reject(response.statusText);
        }
    });
export const addToDo = createAction("ADD_TODO", addToDoAPI);

const updateToDoAPI = (todo) => fetch(
    'http://localhost:3000/todo',
    {
        method: 'PUT',
        headers: new Headers({
            "Content-Type": "application/json"
        }),
        body: JSON.stringify({todo})
    }
).then((response) => {
        if (response.ok) {
            return todo;
        } else {
            return Promise.reject(response.statusText);
        }
    });
export const updateToDo = createAction("TOGGLE_TODO", updateToDoAPI);


const deleteToDoAPI = (id) => fetch(
    'http://localhost:3000/todo/' + id,
    {
        method: 'DELETE'
    }
).then((response) => {
        if (response.ok) {
            return id;
        } else {
            return Promise.reject(response.statusText);
        }
    });
export const deleteToDo = createAction("DELETE_TODO", deleteToDoAPI);






