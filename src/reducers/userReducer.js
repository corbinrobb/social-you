const initialState = {
  loggedIn: false,
  data: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return { loggedIn: true, data: action.payload };
    case "LOGOUT_USER":
      return initialState;
    default:
      return state;
  }
};
