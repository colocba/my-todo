import { createStore } from 'redux';
import rootReducer  from './rootReducer';

export const getStore = (initialState) => {
    const store = createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return store;
}