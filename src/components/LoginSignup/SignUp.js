import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-signup">
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="username"
          value={user.username}
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="password"
          value={user.password}
          onChange={handleChange}
        />
        <button>Sign Up</button>
        <Link className="login-signup-link" to="/login">
          Already have an account?
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
