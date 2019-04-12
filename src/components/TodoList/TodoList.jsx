import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from '@/components/TodoListItem';

const TodoList = (props) => (
  <div className="todo-app">
    {
      props.todoList.map((todo) => (
        <TodoListItem
          key={todo.id}
          {...todo}
        />
      ))
    }
  </div>
);

TodoList.propTypes = {
  todoList: PropTypes.array
};

export default TodoList;
