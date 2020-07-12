import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [ user, setUser ] = useState({ username: '', password: '',});

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
  }


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
        <Link className="signup-button" to="/signup">Sign Up</Link>
      </form>
    </div>
  );
}

export default Login;