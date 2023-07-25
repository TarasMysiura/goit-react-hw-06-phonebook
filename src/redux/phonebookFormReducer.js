const initState = { name: '', number: '' };

export const phonebookFormReducer = (state = initState, action) => {
  switch (action.type) {
    case 'name':
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};
