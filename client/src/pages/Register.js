import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import InputForm from "../components/share/input";
import UserContext from "../context/UserContext";
import axios from "axios";

const Register = () => {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [location, setLocation] = useState("");
  const {setUser} = useContext(UserContext);  

  const handlesubmit = async(e) => {
    e.preventDefault();
    console.log(name, lastName, email, password, location);
    try {
      setUser({name,lastName,email,password,location});
      const {data} = await axios.post('http://localhost:8000/api/v1/auth/register',{name,lastName,email,password,location});
      if (data.success) {
        alert("Register Successfully ");
        navigate("/dashboard");
      }
    } catch {
      alert("invalid data");
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
        <form className="p-5" onSubmit={handlesubmit}>
          <div className="mb-3">
            <h1>Registration is Required!!</h1>
          </div>
          <h5>
            <InputForm
              htmlFor="name"
              labelText="Name"
              type="text"
              name="name"
              value={name}
              handleChange={handleNamechange}
            ></InputForm>
            <InputForm
              htmlFor="lastName"
              labelText="Last Name"
              type="text"
              name="lastName"
              value={lastName}
              handleChange={handleLastNamechange}
            ></InputForm>
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
            <InputForm
              htmlFor="location"
              labelText="Location"
              type="text"
              name="location"
              value={location}
              handleChange={handleLocationchange}
            ></InputForm>
          </h5>
          <h5>
            <div className="d-flex justify-content-between">
              <p>
                Already Registered!! <Link to="/login">Login</Link>
              </p>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
          </h5>
        </form>
      </div>
    </>
  );
};

export default Register;
