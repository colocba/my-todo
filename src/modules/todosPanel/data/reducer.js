import {ADD_TODO_ITEM, REMOVE_TODO_LIST} from "./actions";
import {REMOVE_TODO_ITEM} from "../../items/data/actions";

const todosReducer = (state = {}, action) => {
    switch (action.type) {
        case REMOVE_TODO_LIST:
            const {[action.payload]: value, ...rest} = state;
            return {...rest};
        case REMOVE_TODO_ITEM: {
            const {todoListId} = action.payload;
            const {todoItemId} = action.payload;
            const todoList = state[todoListId];
            const updatedItemsIds = todoList.itemsIds.filter(itemId => itemId !== todoItemId);
            return {...state, [todoListId]: {...todoList, itemsIds: updatedItemsIds}};
        }
        case ADD_TODO_ITEM: {
            const {todoListId} = action.payload;
            const {text} = action.payload;
            const todoList = state[todoListId];
            const {itemsIds} = todoList;
            const newId = itemsIds[itemsIds.length - 1] + 1;
            const newItemsIds = [...itemsIds, newId];
            return {...state, [todoListId]: {...todoList, itemsIds: newItemsIds}};
        }
        default:
            return state;
    }
};

export default todosReducer;
