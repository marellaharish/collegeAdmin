import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "../../Components/Assets/Login_Img.jpg";
import "../../Components/Css/Home.css";
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import logo from "../../Components/Assets/logo.jpg";
import googlelogo from "../../Components/Assets/google-logo.svg";
import outlook from "../../Components/Assets/outlook-svgrepo-com.svg";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

class Login extends Component {
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
  }

  // rest of your component logic

  render() {

    return (
      <React.Fragment>
        <>
          <div className="body-bg">
            <MDBRow start>
              <MDBCol size="7">
                <div className="loginForm">
                  <div className="Form">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="input-Data">
                      <form action="POST">
                        <MDBInput
                          className="mb-4"
                          type="email"
                          id="form2Example1"
                          name=""
                          label="Email address"
                        />

                        <MDBInput
                          className="mb-4"
                          type="password"
                          id="form2Example2"
                          label="Password"
                          name=""
                        />

                        <MDBRow className="mb-4">
                          <MDBCol className="d-flex justify-content-center">
                            <MDBCheckbox
                              id="form2Example3"
                              label="Remember me"
                              defaultChecked
                            />
                          </MDBCol>
                          <MDBCol>
                            <a href="#!">Forgot password?</a>
                          </MDBCol>
                        </MDBRow>

                        <MDBBtn type="submit" className="mb-4" block  >
                          Sign in
                        </MDBBtn>

                        <div className="text-center">
                          <p>
                            Not a member? <a href="#!">
                              <Link to="/signup">
                                Register
                              </Link>
                            </a>
                          </p>
                          <p>or sign up with:</p>
                        </div>

                        <MDBRow>
                          <MDBCol>
                            <MDBBtn className='text-dark mb-4 rounded-pill' color='light' >
                              <img src={googlelogo} className="btn-logo" /> <span className="ms-2"> Continue With Google</span>
                            </MDBBtn>
                          </MDBCol>
                          <MDBCol>
                            <MDBBtn className='text-dark mb-4 rounded-pill' color='light'>
                              <img src={outlook} className="btn-logo" /> <span className="ms-2"> Continue With Outlook</span>
                            </MDBBtn>
                          </MDBCol>
                        </MDBRow>
                      </form>
                    </div>
                  </div>
                </div>
              </MDBCol>
              <MDBCol size="5">
                <div className="loginPoster">
                  <img
                    src={require("../../Components/Assets/Login_Img.jpg")}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </>
      </React.Fragment>
    );
  }
}
export default Login;
