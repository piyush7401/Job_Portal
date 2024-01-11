import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();
    try {
      console.log(name, email, lastName, password, location);
    } catch {
      console.log(e.error);
    }
  };

  const handleNamechange = (e) => {
    setName(e.target.value);
  };

  const handleLastNamechange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordchange = (e) => {
    setPassword(e.target.value);
  };

  const handleEmailchange = (e) => {
    setEmail(e.target.value);
  };


  const handleLocationchange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <>
      <div className="form-container">
        <form className="card p-5" onSubmit={handlesubmit}>
          <div className="mb-1">
            <h1>Registration is Required!!</h1>
          </div>
          <div className="mb-1">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={name}
              onChange={handleNamechange}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="lastName" className="form-label">
              Last Name:
            </label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              value={lastName}
              onChange={handleLastNamechange}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={email}
              onChange={handleEmailchange}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={handlePasswordchange}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <input
              type="text"
              className="form-control"
              name="location"
              value={location}
              onChange={handleLocationchange}
            />
          </div>
          <div className="d-flex justify-content-between">
            <p>
              Already Registered!! <Link to="/login">Login</Link>
            </p>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
