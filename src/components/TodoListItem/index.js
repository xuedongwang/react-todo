import { connect } from 'react-redux';
import { toggleTodo, deleteTodo, editTodo } from '@/actions';
import TodoListItem from './TodoListItem';

const mapStateToProps = (state) => {
  return {
    todoList: state.todoList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (e) => dispatch(toggleTodo(e.target.dataset.id)),
    deleteTodo: (e) => dispatch(deleteTodo(e.target.dataset.id)),
    editTodo: (e) => dispatch(editTodo(e.target.dataset.id, e.target.value))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoListItem);
