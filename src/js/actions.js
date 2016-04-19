import { createAction } from "redux-actions";
import { loadToDosAPI, AddToDoAPI } from "./APIs";

export const addToDo = createAction("ADD_TODO", AddToDoAPI);

export const loadToDos = createAction('LOAD_TODOS', loadToDosAPI);

export const setLoadingToDos = (loading) => ({
    type: "LOADING_TODOS",
    loadingToDos: loading
});