import styled from 'styled-components';

export const FooterWrapper = styled.div`
  position: relative;
  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, .2),
                0 8px 0 -3px #f6f6f6,
                0 9px 1px -3px rgba(0, 0, 0, .2),
                0 16px 0 -6px #f6f6f6,
                0 17px 2px -6px rgba(0, 0, 0, .2);
  }
`;

export const FooterContent = styled.div`
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
`;

export const TodoCount = styled.div``;

export const TodoFilter = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const TodoFilterItem = styled.li`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    border-color: rgba(175, 47, 47, .1);
  }
  &.selected {
    border-color: rgba(175, 47, 47, .2);
  }
`;

export const ClearCompletedButton = styled.button`
  margin: 0;
  padding: 0;
  border: 0;
  font-weight: inherit;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:active {
    line-height: 20px;
    text-decoration: none;
  }
`;
