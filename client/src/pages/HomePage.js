import React from "react";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
const HomePage = () => {
  return (
    <>
      <div className="flex-container">
        <div className="flex-item">
          <div className="p-3">
            <h1>Indias No #1 Carrer Platform!!</h1>
          </div>
          <div className="p-3">
            <h4>
              Search and manage your jobs with ease. free and open source job
              portal application by Piyush Varshney.
            </h4>
          </div>
          <div className="p-3">
            <h4>
            Not a user Register <Link to="/register">Here !</Link>{" "}
            </h4>          
          </div>
          <div className="p-3">
            <h4>
            <Link to="/login" className="myBtn">
                  Login
                </Link>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
