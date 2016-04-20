//error handling not done properly,
// in case of errors, action should have been dispatched saying loading error


export const loadToDosAPI = (dispatch) => fetch(
    'http://localhost:3000/todos'
).then((response) => {
        //check fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        if (response.ok) {
            dispatch({
                type: "LOADING_TODOS",
                loadingToDos: false
            });
            return response.json();
        } else {
            return Promise.reject(response.statusText);
        }
    });

export const updateToDoAPI = (todo) => fetch(
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

export const addToDoAPI = (todo) => fetch(
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

export const deleteToDoAPI = (id) => fetch(
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

