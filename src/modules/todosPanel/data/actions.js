export const REMOVE_TODO_LIST = 'TODOS\\REMOVE_TODO_LIST';
export const ADD_TODO_ITEM = 'TODOS\\ADD_TODO_ITEM';

export const removeTodoListAction = (id) => {
    return {
        type: REMOVE_TODO_LIST,
        payload: id
    }
};

export const addTodoItemAction = (todoListId, text) => {
    return {
        type: ADD_TODO_ITEM,
        payload: {
            todoListId,
            text
        }
    }
};
