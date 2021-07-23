export const TOGGLE_TODO_ITEM = 'ITEMS\\TOGGLE_TODO_ITEM';
export const REMOVE_TODO_ITEM = 'ITEMS\\REMOVE_TODO_ITEM';

export const toggleTodoItemActions = (todoListId, todoItemId) => {
    return {
        type: TOGGLE_TODO_ITEM,
        payload: {
            todoListId: todoListId, todoItemId: todoItemId
        }
    }
};

export const removeTodoItem = (todoListId, todoItemId) => {
    return {
        type: REMOVE_TODO_ITEM,
        payload: {
            todoListId: todoListId, todoItemId: todoItemId
        }
    }
};
