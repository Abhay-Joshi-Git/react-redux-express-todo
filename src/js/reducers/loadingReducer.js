export const loadingToDos = (state = false, action = {}) => {
    switch (action.type) {
        case "LOADING_TODOS" :
            return  action.loadingToDos;
            break;
        default :
            return state;
    }
};