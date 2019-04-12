import { connect } from 'react-redux';
import TodoControlPanel from './TodoControlPanel';
import { clearCompletedTodos, switchTodoFilter } from '@/actions';

const mapStateToProps = (state) => {
  return {
    todoCount: state.todoList.filter(todo => !todo.completed).length,
    allTodoCount: state.todoList.length,
    todoStatus: state.todoStatus
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearCompletedTodos: () => dispatch(clearCompletedTodos()),
    switchTodoFilter: (e) => dispatch(switchTodoFilter(e.target.dataset.filter))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoControlPanel);
