const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case 'REMOVE_TODO':
            const {[action.payload]: value, ...rest} = state;
            return {...rest};
        case 'REMOVE_TODO_ITEM':
            const {todoListId} = action.payload;
            const {todoItemId} = action.payload;
            const todoList = state[todoListId];
            const updatedItemsIds = todoList.itemsIds.filter(itemId => itemId !== todoItemId);
            return {...state, [todoListId]: {...todoList, itemsIds: updatedItemsIds}};
        default:
            return state;
    }
};

export default todosReducer;
