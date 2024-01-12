import { Link } from 'react-router-dom';
import React, { useState } from 'react'
import InputForm from '../components/share/input';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      console.log( email, password );
    } catch {
      console.log(e.error);
    }
  };

  const handlePasswordchange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailchange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="form-container">
        <form className="p-5" onSubmit={handlesubmit}>
          <div className="mb-3">
            <h1>Login is Required!!</h1>
          </div>
          <h5>
          <InputForm
            htmlFor="email"
            labelText="Email"
            type="email"
            name="email"
            value={email}
            handleChange={handleEmailchange}
          ></InputForm>
          <InputForm
            htmlFor="password"
            labelText="Password"
            type="password"
            name="password"
            value={password}
            handleChange={handlePasswordchange}
          ></InputForm>
          <div className="d-flex justify-content-between">
            <p>
              Not Registered!! <Link to="/register">Login</Link>
            </p>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
          </h5>
        </form>
      </div>
    </>
  )
}

export default Login;
