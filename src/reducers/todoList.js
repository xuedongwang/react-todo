let selecteAll = false;
const todoList = (state = [], action) => {
  switch (action.type) {
    case 'TOGGLE_SELECTED_ALL_TODO':
      if (action.status === 'completed') {
        return state.map(todo => {
          return todo.completed ? todo : {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed
          };
        });
      } else {
        return state.map(todo => {
          return todo.completed ? {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed
          } : todo;
        });
      }
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case 'CLEAR_COMPLETED_TODO':
      return state.filter(todo => !todo.completed);
    case 'EDIT_TODO':
      return state.map(todo => {
        return todo.id === action.id ? {
          id: todo.id,
          text: action.text,
          completed: todo.completed
        } : todo;
      });
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id);
    case 'TOGGLE_TODO_STATUS':
      return state.map(todo => {
        return todo.id === action.id ? {
          ...todo,
          completed: !todo.completed
        } : todo;
      });
    case 'TOGGLE_ALL_TODO_STATUS':
      selecteAll = !selecteAll;
      return state.map(todo => {
        return {
          ...todo,
          completed: selecteAll
        };
      });
    default:
      return state;
  }
};

export default todoList;
