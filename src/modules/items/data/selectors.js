export const getItems = (state) => state.items;

export const getItemsByTodoListId = (state, id) => getItems(state)[id];
