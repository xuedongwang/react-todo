import React, { Fragment } from 'react';
import TodoHeader from '@/components/TodoHeader';
import TodoList from '@/components/TodoList';
import TodoControlPanel from '@/components/TodoControlPanel';
import TodoFooter from '@/components/TodoFooter';
import TodoTitle from '@/components/TodoTitle';
import { TodoWrapper } from './style';

const TodoApp = () => (
  <Fragment>
    <TodoTitle/>
    <TodoWrapper>
      <TodoHeader/>
      <TodoList/>
      <TodoControlPanel/>
    </TodoWrapper>
    <TodoFooter/>
  </Fragment>
);

export default TodoApp;
