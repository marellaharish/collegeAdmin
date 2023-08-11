import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../../Components/Assets/Login_Img.jpg";
import "../../Components/Css/Home.css";
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import logo from "../../Components/Assets/logo.jpg";
import googlelogo from "../../Components/Assets/google-logo.svg";
import outlook from "../../Components/Assets/outlook-svgrepo-com.svg";
import MadeWithLove from 'react-made-with-love';
import signup from "../../Components/Assets/signup.jpg";
import { Link, useNavigate } from 'react-router-dom';

import {
  MDBValidation,
  MDBValidationItem,
  MDBInputGroup,
} from 'mdb-react-ui-kit';

class Signup extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      lName: "",
      email: "",
      phoneNo: "",
      password: "",
      confirmPassword: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { fName, lName, email, phoneNo, password, confirmPassword } = this.state;
    console.log(fName, lName, email, phoneNo, password, confirmPassword);

    await fetch("http://localhost:8000/signup", {
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
    })
      .then((res) => res.json(res)) // Corrected from res.JSON() to res.json()
      .then((data) => {
        console.log(data, "userRegister");
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  render() {

    return (
      <React.Fragment>
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

                    {/* <div className="Signup-txt">Signup</div> */}
                    <img src={logo} className="logo" alt="logo" />
                    <div className="input-Data">
                      <form onSubmit={this.handleSubmit}>
                        <MDBRow>
                          <MDBCol>

                            <MDBInput
                              className="mb-4"
                              type="text"
                              label="First Name"
                              required
                              name=""
                              onChange={(e) => this.setState({ fName: e.target.value })}
                            />
                          </MDBCol>
                          <MDBCol>
                            <MDBInput
                              className="mb-4"
                              type="text"
                              label="Last Name"
                              required
                              name=""
                              onChange={(e) => this.setState({ lName: e.target.value })}
                            />
                          </MDBCol>
                        </MDBRow>

                        <MDBInput
                          className="mb-4"
                          type="email"
                          label="Email address"
                          required
                          name=""
                          onChange={(e) => this.setState({ email: e.target.value })}
                        />

                        <MDBInputGroup textBefore='+91' className="mb-4 flex-nowrap">
                          <MDBInput
                            type='text' className='form-control'
                            label="Contact Number"
                            required
                            name=""
                            onChange={(e) => this.setState({ phoneNo: e.target.value })}
                          />
                        </MDBInputGroup>

                        <MDBInput
                          className="mb-4"
                          type="password"
                          label="Password"
                          required
                          name=""
                          onChange={(e) => this.setState({ password: e.target.value })}
                        />
                        <MDBInput
                          className="mb-4"
                          type="password"
                          label="Confirm Password"
                          required
                          name=""
                          onChange={(e) => this.setState({ confirmPassword: e.target.value })}
                        />


                        <div className="mb-3">
                          <MDBCheckbox required label='Agree to terms and conditions' id='invalidCheck' />
                        </div>
                        <MDBBtn type="submit" className="mb-4" block>
                          Sign Up
                        </MDBBtn>

                        <div className="text-center">
                          <p>
                            Already Have An Account?  <a href="#!">
                              <Link to="/">
                                sign in
                              </Link>
                            </a>
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
                    {/* <MadeWithLove by="Chris" emoji /> */}
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </>
      </React.Fragment>
    );
  }
}
export default Signup;
