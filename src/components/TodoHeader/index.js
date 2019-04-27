import { connect } from 'react-redux';
import TodoHeader from './TodoHeader';
import { addTodo, toggleAllSelectedTodoStatus } from '@/actions';

const mapStateToProps = (state) => {
  return {
    selectedAll: state.selectedAll,
    todoList: state.todoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    toggleAllSelectedTodoStatus: () => dispatch(toggleAllSelectedTodoStatus())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader);
