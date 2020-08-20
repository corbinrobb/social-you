import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { loginUser } from "../actions";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMesage] = useState(null);
  const { push } = useHistory();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user.username || !user.password) {
      return setErrorMesage("Please provide both a username and password");
    }

    try {
      const { data } = await axiosWithAuth().post("/auth/login", user);
      dispatch(loginUser(data.id));
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_id", data.id);
      push("/feed");
    } catch (error) {
      console.log(error);
      setErrorMesage(error.response.data.error);
      setUser({ username: "", password: "" });
    }
  };

  return (
    <div className="login-signup">
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="text"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Login</button>
      </form>
      <Link className="login-signup-link" to="/signup">
        Don't have an account?
      </Link>
      {errorMessage ? <p className="error">{errorMessage}</p> : null}
    </div>
  );
};

export default Login;
