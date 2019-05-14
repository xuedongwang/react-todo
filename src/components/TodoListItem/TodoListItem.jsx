import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TodoItem } from './style';

class TodoListItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isEdit: false,
      currentTodo: {}
    };
    this.editInputRef = React.createRef();
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditBlur = this.handleEditBlur.bind(this);
    this.handleEditEnter = this.handleEditEnter.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }
  handleEdit () {
    setTimeout(() => {
      this.editInputRef.current && this.editInputRef.current.focus();
    });
    this.setState((prevState) => ({
      isEdit: !prevState.isEdit
    }));
  }
  handleEditBlur () {
    this.handleEdit();
  }
  handleEditEnter (e) {
    if (e.keyCode !== 13) {
      return;
    }
    this.handleEdit();
  }
  handleMouseDown () {
    console.log(this.iconRefs);
  }
  render () {
    const {
      completed,
      text,
      id,
      toggleTodo,
      deleteTodo,
      editTodo
    } = this.props;
    const { isEdit } = this.state;
    return (
      <TodoItem className={isEdit ? `editting` : ''}>
        {
          completed
            ? <i className="icon icon_completed" onClick={toggleTodo}>
              <svg className="icon" data-id={id} aria-hidden="true">
                <use xlinkHref="#icon-wancheng"></use>
              </svg>
            </i> : <i className="icon icon_uncompleted" onClick={toggleTodo}>
              <svg className="icon" data-id={id} aria-hidden="true">
                <use xlinkHref="#icon-yuanquan"></use>
              </svg>
            </i>
        }
        {
          isEdit
            ? <input
              type="text"
              value={text}
              className="todo-text"
              data-id={id}
              onChange={editTodo}
              onBlur={this.handleEditBlur}
              onKeyUp={this.handleEditEnter}
              ref={this.editInputRef}
            />
            : <p
              className={`${completed ? 'completed todo-text' : 'todo-text'}`}
              data-id={id}
              onDoubleClick={this.handleEdit}
            >
              {text}
            </p>
        }
        <i className="icon icon_delete" onClick={deleteTodo}>
          <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-cha" data-id={id}></use>
          </svg>
        </i>
      </TodoItem>
    );
  }
}

TodoListItem.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  completed: PropTypes.bool,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
  editTodo: PropTypes.func
};

export default TodoListItem;
