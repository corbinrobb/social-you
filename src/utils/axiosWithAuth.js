import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: localStorage.getItem("token"),
    },
    baseURL: "https://social-you.herokuapp.com/api",
    // baseURL: "http://localhost:5000/api",
  });
};
