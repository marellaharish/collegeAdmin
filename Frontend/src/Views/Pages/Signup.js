import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../../Components/Assets/Login_Img.jpg";
import "../../Components/Css/Home.css";
import { MDBInput, MDBCheckbox, MDBBtn } from "mdb-react-ui-kit";
import logo from "../../Components/Assets/logo.jpg";
import googlelogo from "../../Components/Assets/google-logo.svg";
import outlook from "../../Components/Assets/outlook-svgrepo-com.svg";
import MadeWithLove from 'react-made-with-love';
import signup from "../../Components/Assets/signup.jpg";
import { Link } from 'react-router-dom';
import {
  MDBInputGroup,
} from 'mdb-react-ui-kit';

function Signup() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fName, lName, email, phoneNo, password, confirmPassword } = formData;
    console.log(fName, lName, email, phoneNo, password, confirmPassword);

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: "application/json",
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({
          fName,
          lName,
          email,
          phoneNo,
          password,
          confirmPassword
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data, "userRegister");
        // Redirect to login or another page after successful registration
        window.location.href = "/login"; // Use window.location to navigate
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="body-bg">
        <MDBRow start>
          <MDBCol size="5">
            <div className="loginPoster">
              <img
                src={signup}
                className="img-fluid-left"
                alt=""
              />
            </div>
          </MDBCol>
          <MDBCol size="7">
            <div className="loginForm">
              <div className="Form">
                <img src={logo} className="logo" alt="logo" />
                <div className="input-Data">
                  <form onSubmit={handleSubmit}>
                    <MDBRow>
                      <MDBCol>
                        <MDBInput
                          className="mb-4"
                          type="text"
                          label="First Name"
                          required
                          name="fName"
                          onChange={handleChange}
                        />
                      </MDBCol>
                      <MDBCol>
                        <MDBInput
                          className="mb-4"
                          type="text"
                          label="Last Name"
                          required
                          name="lName"
                          onChange={handleChange}
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBInput
                      className="mb-4"
                      type="email"
                      label="Email address"
                      required
                      name="email"
                      onChange={handleChange}
                    />
                    <MDBInputGroup textBefore='+91' className="mb-4 flex-nowrap">
                      <MDBInput
                        type='text' className='form-control'
                        label="Contact Number"
                        required
                        name="phoneNo"
                        onChange={handleChange}
                      />
                    </MDBInputGroup>
                    <MDBInput
                      className="mb-4"
                      type="password"
                      label="Password"
                      required
                      name="password"
                      onChange={handleChange}
                    />
                    <MDBInput
                      className="mb-4"
                      type="password"
                      label="Confirm Password"
                      required
                      name="confirmPassword"
                      onChange={handleChange}
                    />
                    <div className="mb-3">
                      <MDBCheckbox required label='Agree to terms and conditions' id='invalidCheck' />
                    </div>
                    <MDBBtn type="submit" className="mb-4" block>
                      Sign Up
                    </MDBBtn>
                    <div className="text-center">
                      <p>
                        Already Have An Account? <Link to="/login">sign in</Link>
                      </p>
                      <p>or sign up with:</p>
                    </div>
                    <MDBRow>
                      <MDBCol>
                        <MDBBtn className='text-dark mb-4 rounded-pill text-capitalize' color='light' >
                          <img src={googlelogo} className="btn-logo" /> <span className="ms-2"> Continue With Google</span>
                        </MDBBtn>
                      </MDBCol>
                      <MDBCol>
                        <MDBBtn className='text-dark mb-4 rounded-pill text-capitalize' color='light'>
                          <img src={outlook} className="btn-logo" /> <span className="ms-2"> Continue With Outlook</span>
                        </MDBBtn>
                      </MDBCol>
                    </MDBRow>
                  </form>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    </>
  );
}

export default Signup;
