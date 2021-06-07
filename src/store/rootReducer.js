import todosReducer from "../modules/todosPanel/data/reducer"
import {combineReducers} from 'redux';
import { themeReducer } from "../modules/app/data/reducers";
import {itemsReduce} from "../modules/items/data/reducer";

export default combineReducers({
    todos: todosReducer,
    items: itemsReduce,
    theme: themeReducer
});
