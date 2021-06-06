import todosReducer from "../modules/todos/data/reducer"
import {combineReducers} from 'redux';
import { themeReducer } from "../modules/app/data/reducers";

export default combineReducers({
    lists: todosReducer,
    theme: themeReducer
});