import { combineReducers } from 'redux';
import todoList from './todoList';
import todoStatus from './todoStatus';
const rootReducer = combineReducers({
  todoList,
  todoStatus
});

export default rootReducer;
