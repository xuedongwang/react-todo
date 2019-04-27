const todoFilter = (state = 'all', action) => {
  switch (action.type) {
    case 'SWITCH_TODO_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default todoFilter;
