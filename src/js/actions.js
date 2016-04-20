import { createAction } from "redux-actions";
import { loadToDosAPI, addToDoAPI, updateToDoAPI, deleteToDoAPI } from "./APIs";

export const addToDo = createAction("ADD_TODO", addToDoAPI);

export const loadToDos = createAction('LOAD_TODOS', loadToDosAPI);

export const updateToDo = createAction("TOGGLE_TODO", updateToDoAPI);

export const deleteToDo = createAction("DELETE_TODO", deleteToDoAPI);

export const setLoadingToDos = (loading) => ({
    type: "LOADING_TODOS",
    loadingToDos: loading
});