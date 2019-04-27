import { combineReducers } from 'redux';
import todoList from './todoList';
import todoFilter from './todoFilter';
const rootReducer = combineReducers({
  todoList,
  todoFilter
});

export default rootReducer;
