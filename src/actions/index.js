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
