const initialState = {
  message: 'hello',
  data: []
};

const reducerOne = (state = initialState, action) => {
  switch (action.type) {
    case 'World':
      return {
        ...state,
        message: 'world of saga',
        data: []
      };
    case 'Demons':
      return {
        ...state,
        message: 'demons',
        data: action.data
      };
    default:
      return state;
  }
};

export default reducerOne;
