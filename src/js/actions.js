//error handling not done properly,
// in case of errors, action should have been dispatched saying loading error

const setLoadingToDos = (loading) => ({
    type: "LOADING_TODOS",
    loadingToDos: loading
});


const loadToDosAPI = () => {
    return fetch(
        'http://localhost:3000/todos'
    ).then((response) => {
            //check fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            if (response.ok) {
                //we got the response but not the data yet. ya, that's right!!! it's another promise.
                return response.json().then((data) => {
                    return data;
                });
            } else {
                return Promise.reject(response.statusText);
            }
        });
};

export const loadToDos = () => {
    return async (dispatch) => {
        dispatch(setLoadingToDos(true));
        try {
            let data = await loadToDosAPI();
            dispatch({
                type: 'LOAD_TODOS',
                data: data
            });
        } catch (err) {
            // send error so that UI can be updated to show the error
            //dispatch({
            //    type: 'APP_ERROR',
            //    error: response.statusText
            //});
        } finally {
            dispatch(setLoadingToDos(false));
        }
    };

};

export const addToDo = (todo) => {
    return (dispatch) => {
        fetch(
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
                    dispatch({
                        type: "ADD_TODO",
                        todo: todo
                    });
                } else {
                    // send error so that UI can be updated to show the error
                    //return Promise.reject(response.statusText);
                }
            });
    }
};

export const updateToDo = (todo) => {
    return (dispatch) => {
        fetch(
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
                    dispatch({
                        type: "TOGGLE_TODO",
                        todo: todo
                    });
                }
            });
    };
};

export const deleteToDo = (id) => (dispatch) => {
    fetch(
        'http://localhost:3000/todo/' + id,
        {
            method: 'DELETE'
        }
    ).then((response) => {
            if (response.ok) {
                dispatch({
                    type: "DELETE_TODO",
                    id: id
                });
            }
        });
};





