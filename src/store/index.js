import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { todoReducer } from './reducers/todoReducer';
const rootReducers = combineReducers({
   todo: todoReducer,
});

export const store = createStore(rootReducers, composeWithDevTools());
