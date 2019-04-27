import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Icon from '@/base/Icon';
import {
  AddTodoInputWrapper,
  AddTodoInput
} from './style';

class TodoHeader extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
    this.inputEl = null;
    this.handleAddTodoInputChange = this.handleAddTodoInputChange.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }
  handleAddTodoInputChange (e) {
    this.setState({
      text: e.target.value
    });
  }
  handleAddTodo (e) {
    // 如果不是回车键，直接return
    if (e.keyCode !== 13) {
      return;
    }
    // 去除输入内容前后的空格
    const text = this.state.text.trim();
    if (!text) {
      this.initAddTodoInput();
      return;
    }
    this.props.addTodo(text);
    this.initAddTodoInput();
  }
  initAddTodoInput () {
    this.setState(() => ({ text: '' }));
    this.inputEl.focus();
  }
  componentDidMount () {
    this.initAddTodoInput();
  }
  render () {
    const {
      todoList,
      toggleAllSelectedTodoStatus
    } = this.props;
    return (
      <Fragment>
        <AddTodoInputWrapper>
          <Icon
            onClick={toggleAllSelectedTodoStatus}
            iconName="icon-iconfontyoujiantou"
            className={
              `icon icon-arrow-right
              ${this.state.isSelectedAll ? ' active ' : ''}
              ${todoList.length ? 'visible' : 'hide'}`
            }
          />
          <AddTodoInput
            placeholder="What needs to be done?"
            value={this.state.text}
            onChange={this.handleAddTodoInputChange}
            onKeyUp={this.handleAddTodo}
            /* eslint-disable no-return-assign */
            ref={(el) => this.inputEl = el}
          />
        </AddTodoInputWrapper>
      </Fragment>
    );
  }
}

TodoHeader.propTypes = {
  addTodo: PropTypes.func,
  toggleAllSelectedTodoStatus: PropTypes.func,
  selectedAll: PropTypes.bool,
  todoList: PropTypes.array
};

export default TodoHeader;
