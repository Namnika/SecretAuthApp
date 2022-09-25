import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function onSubmit(event){
    event.preventDefault();
    const userData = {
      email,
      password
    }
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    };
    /* [axios.post("http://localhost:5000/users/register", data, headers)] ==>>
      it is used for to post user's data to register page using "users/register".
    */
    /* [navigate("/submit")] is to simply navigate or to locate components */



    axios.post("http://localhost:5000/register", userData, headers, {
      validateStatus: function (status) {
      return status < 500; // Resolve only if the status code is less than 500
      }
    })
      .then(res => console.log(res))
      .catch(err => {
        console.log(err.message);
      });
      setEmail("");
      setPassword("");
  };

/* FOR TEXT NODE COMMENTS IN REACT: PUT COMMENTS INSIDE BRACES INSTALL PLUGIN
 "eslint-plugin-react"
*/

  return (
    <div className="container mt-5 home">
      <h1>Register</h1>
      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">
              <form >
                {/* don't use "action=''" & "method: POST" while using axios routing
                cause it's doing same thing.
                */}

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  required
                  onChange={e => {
                    setEmail(e.target.value);

                  }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>

                  {/* [<label htmlFor="password" >] ==>> "htmlFor" is used in react
                  instead of for in simple label in html*/}

                  <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                  />
                </div>
                <button type="submit"
                className="btn btn-dark" onClick={onSubmit}>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;