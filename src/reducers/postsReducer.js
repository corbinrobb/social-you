export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case "SUBMIT_POST":
      return [...state, action.payload];
    case "FETCH_POSTS":
      return [...action.payload];
    default:
      return state;
  }
};
