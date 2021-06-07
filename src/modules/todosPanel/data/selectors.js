export const getLists = (state) => state.todos;

export const getTodoListTitle = (state, id) => getLists(state)[id].title;
