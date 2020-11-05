const initialState = {
  queries: [],
};

const rootReducer = (state = initialState, action) => {
  if (action.type === "CREATE_SEARCH") {
    return {
      ...state,
      queries: [...state.queries, action.searchTerm],
    };
  } else return state;
};

export default rootReducer;
