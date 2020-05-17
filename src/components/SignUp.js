import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({ username: '', password: '', });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit} className="ui segment input fluid">
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
      <button className="ui button">Sign Up</button>
    </form>
  );
}

export default Login;