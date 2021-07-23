import {REMOVE_TODO_ITEM, TOGGLE_TODO_ITEM} from "./actions";
import {ADD_TODO_ITEM, REMOVE_TODO_LIST} from "../../todosPanel/data/actions";

export const itemsReduce = (state = {}, action) => {
    switch (action.type) {
        case REMOVE_TODO_LIST:
            const {[action.payload]: value, ...rest} = state;
            return {...rest};
        case TOGGLE_TODO_ITEM: {
            const todoListId = action.payload.todoListId;
            const todoItemId = action.payload.todoItemId;
            const {items} = state[todoListId];
            const itemToToggle = items.find(item => item.id === todoItemId);
            const updatedItem = {...itemToToggle, completed: !itemToToggle.completed};
            let i = -1;
            items.forEach((item, index) => {if(item.id === itemToToggle.id) i = index});
            items[i] = updatedItem;
            return {...state, [todoListId]: {items}};
        }
        case REMOVE_TODO_ITEM: {
            const todoListId = action.payload.todoListId;
            const todoItemId = action.payload.todoItemId;
            const {items} = state[todoListId];
            const newItems = items.filter(item => item.id !== todoItemId);
            return {...state, [todoListId]: {items: newItems}};
        }
        case ADD_TODO_ITEM: {
            const {todoListId} = action.payload;
            const {text} = action.payload;
            const {items} = state[todoListId];
            const lastId = items[items.length - 1].id;
            const newId = lastId + 1;
            const newItems = [...items, {id: newId, title: text, userId: newId, priority: "low", completed: false}];
            return {...state, [todoListId]: {items: newItems}};
        }
        default:
            return state;
    }
};
