import { axiosWithAuth } from "../utils/axiosWithAuth";

export const submitPost = (post) => async (dispatch) => {
  try {
    const { data } = await axiosWithAuth().post("/posts", post);
    dispatch({ type: "SUBMIT_POST", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchPosts = () => async (dispatch) => {
  try {
    const { data } = await axiosWithAuth().get("/posts");
    dispatch({ type: "FETCH_POSTS", payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = (user_id) => async (dispatch) => {
  try {
    const { data } = await axiosWithAuth().get(`/users/${user_id}`);
    dispatch({ type: "LOGIN_USER", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const logoutUser = () => {
  return {
    type: "LOGOUT_USER",
  };
};
