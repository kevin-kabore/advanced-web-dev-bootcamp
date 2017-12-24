const messages = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return [...state];
    default:
      return state;
  }
};

export default messages;
