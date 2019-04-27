import TodoList from './TodoList';
import { connect } from 'react-redux';

function getFilterTodoList (todos, filter) {
  switch (filter) {
    case 'all':
      return todos;
    case 'active':
      return todos.filter(todo => !todo.completed);
    case 'completed':
      return todos.filter(todo => todo.completed);
    default:
      return todos;
  }
}

const mapStateToProps = (state) => {
  return {
    todoList: getFilterTodoList(state.todoList, state.todoFilter)
  };
};

export default connect(mapStateToProps, null)(TodoList);
