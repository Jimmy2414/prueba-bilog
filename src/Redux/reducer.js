const initialState = {
  Agenda: [],
};

export const reducerroot = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'GET_AGENDA':
      return {
        ...state,
        Agenda: payload,
      };
    default:
      return state;
  }
};
