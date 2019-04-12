import styled from 'styled-components';
export const TodoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  padding: 0 12px;
  &.editting {
    .todo-text {
      border: 1px solid #999;
      box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, .2);
      outline: none;
    }
    .icon {
      visibility: hidden;
    }
    .icon.icon_delete {
      display: none;
    }
  }
  &:hover {
    .icon.icon_delete {
      visibility: visible;
    }
  }
  .icon {
    cursor: pointer;
    &.icon_completed {
      font-size: 28px;
      color: #79bfaf;
      margin-left: 2px;
    }
    &.icon_uncompleted {
      font-size: 31px;
      color: #e6e6e6;
    }
    &.icon_delete {
      font-size: 30px;
      color: #cc9a9a;
      text-align: center;
      visibility: hidden;
      &:hover {
        color: #af5b5e;
      }
    }
  }
  .todo-text {
    flex: 1;
    margin-left: 5px;
    padding: 15px 10px;
    word-break: break-all;
    &.completed {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }
`;
