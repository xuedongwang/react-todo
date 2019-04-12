const nanoid = require('nanoid');
// add todo
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nanoid(),
    text
  };
};
// toggle todo status
// add todo
export const toggleTodo = (id) => {
  console.log(id);
  return {
    type: 'TOGGLE_TODO_STATUS',
    id
  };
};
// delete todo
export const deleteTodo = (id) => {
  console.log(id);
  return {
    type: 'DELETE_TODO',
    id
  };
};
// edit todo
export const editTodo = (id, text) => {
  return {
    type: 'EDIT_TODO',
    text,
    id
  };
};
// delete completed todo
export const clearCompletedTodos = () => {
  return {
    type: 'CLEAR_COMPLETED_TODO'
  };
};
// delete completed todo
export const switchTodoFilter = (filter) => {
  return {
    type: 'SWITCH_TODO_FILTER',
    filter
  };
};

// toggle selected all todos
export const toggleAllSelectedTodoStatus = (isSelectedAll) => {
  return {
    type: 'TOGGLE_ALL_TODO_STATUS',
    isSelectedAll
  };
};
