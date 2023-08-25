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
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);

    await fetch("http://localhost:8000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json(res)) // Corrected from res.JSON() to res.json()
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("Login Successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./home";
        }
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
              <MDBCol size="7">
                <div className="loginForm">
                  <div className="Form">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="input-Data">
                      <form onSubmit={this.handleSubmit}>
                        <MDBInput
                          className="mb-4"
                          type="email"
                          id="form2Example1"
                          name=""
                          label="Email address"
                          onChange={(e) => this.setState({ email: e.target.value })}
                        />

                        <MDBInput
                          className="mb-4"
                          type="password"
                          id="form2Example2"
                          label="Password"
                          name=""
                          onChange={(e) => this.setState({ password: e.target.value })}
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
