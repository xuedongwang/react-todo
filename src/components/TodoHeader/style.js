import styled from 'styled-components';

export const AddTodoInputWrapper = styled.div`
  display: flex;
  align-items: center;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, .03);
  .icon-arrow-right {
    padding: 10px;
    font-size: 34px;
    color: var(--gray);
    cursor: pointer;
    &.active {
      color: #737373;

    }
  }
`;
export const AddTodoInput = styled.input`
  flex: 1;
  padding-right: 16px;
  font-size: 24px;
  font-weight: 300;
  &::placeholder {
    font-style: italic;
    font-weight: 300;
    color: var(--gray);
  }
`;
