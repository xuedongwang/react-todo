import React from 'react';
import PropTypes from 'prop-types';
import {
  FooterWrapper,
  FooterContent,
  TodoCount,
  TodoFilter,
  TodoFilterItem,
  ClearCompletedButton
} from './style';

const TodoControlPanel = (props) => {
  const { clearCompletedTodo, todoCount, allTodoCount, switchTodoFilter, todoFilter } = props;
  return (
    allTodoCount
      ? <FooterWrapper>
        <FooterContent>
          <TodoCount>{todoCount} item left</TodoCount>
          <TodoFilter>
            <TodoFilterItem
              className={`${todoFilter === 'all' ? 'selected' : ''}`}
              onClick={switchTodoFilter}
              data-filter="all"
            >
              All
            </TodoFilterItem>
            <TodoFilterItem
              className={`${todoFilter === 'active' ? 'selected' : ''}`}
              onClick={switchTodoFilter}
              data-filter="active"
            >
              Active
            </TodoFilterItem>
            <TodoFilterItem
              className={`${todoFilter === 'completed' ? 'selected' : ''}`}
              onClick={switchTodoFilter}
              data-filter="completed"
            >
              Completed
            </TodoFilterItem>
          </TodoFilter>
          <ClearCompletedButton onClick={clearCompletedTodo}>Clear completed</ClearCompletedButton>
        </FooterContent>
      </FooterWrapper>
      : null
  );
};

TodoControlPanel.propTypes = {
  clearCompletedTodo: PropTypes.func,
  switchTodoFilter: PropTypes.func,
  todoCount: PropTypes.number,
  allTodoCount: PropTypes.number,
  todoFilter: PropTypes.string
};

export default TodoControlPanel;
