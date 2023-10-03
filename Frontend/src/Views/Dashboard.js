import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLinks from "../Components/NavLinks/NavLinks";
import Footer from "../Components/Footer/Footer";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Slide1 from "../Components/Assets/pexels-pixabay-122429.jpg";
import ImageSlider from "../Components/component/ImageSlider";
import CollegeAdmissions from "../Components/Assets/college-svgrepo-com.svg";
import ExaminationManagement from "../Components/Assets/test-checklist-online-learning-education-online-exam-svgrepo-com.svg";
import ResultsManagement from "../Components/Assets/browser-results-svgrepo-com.svg";
import TimeTable from "../Components/Assets/schedule.png";
import AttendanceTracking from "../Components/Assets/attendance-svgrepo-com.svg";
import FacultyProfiles from "../Components/Assets/user-profile.png";
import LibraryManagement from "../Components/Assets/library-book-svgrepo-com.svg";
import CourseRegistration from "../Components/Assets/registration-svgrepo-com.svg";
import FeePaymentandRecords from "../Components/Assets/payment-method-pay-svgrepo-com.svg";
import HostelandAccommodationManagement from "../Components/Assets/hostel-svgrepo-com.svg";
import StudentSupportServices from "../Components/Assets/support-online-center-svgrepo-com.svg";
import InternshipandPlacementPortal from "../Components/Assets/recruitment-svgrepo-com.svg";
import ResearchandProjectsRepository from "../Components/Assets/research-presentation-left-svgrepo-com.svg";
import CampusNewsandEvents from "../Components/Assets/CampusNewsandEvents.png";
import FacultyEvaluationandFeedback from "../Components/Assets/FacultyEvaluationandFeedback.png";
import SportsandRecreationManagement from "../Components/Assets/sports-medal-svgrepo-com.svg";
import HealthCenter from "../Components/Assets/clinic-building-svgrepo-com.svg";
import CampusMapandNavigation from "../Components/Assets/map-svgrepo-com.svg";
import CanteenManagement from "../Components/Assets/food-stall-stall-svgrepo-com.svg";
import TransportandBusServiceManagement from "../Components/Assets/bus-svgrepo-com.svg";
import HelpandSupport from "../Components/Assets/help-center-svgrepo-com.svg";
import Landing from "../Components/Assets/Landing image.png";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import MultipleImageSlider from "../Components/component/MultipleImageSlider";
import PlacementSlider from "../Components/component/PlacementSlider";
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",

    }
  }

  componentDidMount() {
    fetch("http://localhost:8000/home", {
      method: "POST",
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        token: window.localStorage.getItem('token'),

      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
      })
    console.log(JSON.parse(sessionStorage.getItem("userinfo")));
    this.setState({ userData: "userinfo" })
  }

  logout = () => {
    window.localStorage.clear();
    sessionStorage.clear();
    window.location.href = "./login";
    window.localStorage.removeItem("userinfo");
  }

  render() {
    return (
      <React.Fragment>
        <>
          <NavLinks />
          <ImageSlider />
          <div className="main2">



            <section className="landing-sec">
              <div className="container">

                <div className="banner-madal-con">
                  <div className="banner-modal-grid">
                    <div className="banner-modal-text">
                      <h1 className="text-center">
                        For admission-related info, announcements
                        and notifications, visit the admission page
                      </h1>

                      <div className="discover-btn">
                        <a href="#" className="landing-btn">Discover More <i className="fa-solid fa-angle-right"></i></a>

                      </div>
                    </div>
                  </div>
                </div>

                <MDBContainer fluid>
                  <h1 className="fw-bold text-center">
                    Welcome {JSON.parse(sessionStorage.getItem("userinfo")).fName} {JSON.parse(sessionStorage.getItem("userinfo")).lName}

                    <MDBBtn onClick={this.logout} className="ms-2">Logout</MDBBtn>
                  </h1>
                </MDBContainer>


                <div className="landing-content">
                  <div className="landing-left">
                    <h4>Welcome to</h4>
                    <h1>SSIET COLLEGE</h1>
                    <p>
                      The Philosophy of Vignana Jyothi unravels education as a process of
                      "Presencing" that provides, both individually and collectively, to
                      one's deepest capacity to sense and experience the knowledge and
                      activities to shape the future. Based on a synthesis of direct
                      experience, leading edge thinking and ancient wisdom, it taps into
                      'deeper levels of LEARNING for discovering new possibilities'.
                    </p>
                    <p>
                      Today, with this philosophy, Vignana Jyothi has created an edifice
                      that is strong in its foundations, which can only rise higher and
                      higher. Quality and integrity is the essence for achieving excellence
                      at Vignana Jyothi Institutions. This and quest for excellence reflects
                      in the vision and mission. Their passion reflects in the enterprise of
                      education.
                    </p>
                    {/* <button className="btn__landing"><span>Discover More</span></button> */}
                    <div className="discover-btn">
                      <a href="#" className="landing-btn">Discover More <i className="fa-solid fa-angle-right"></i></a>
                    </div>
                  </div>
                  <div className="landing-right">
                    <img src={Landing} alt="" />
                  </div>
                </div>
              </div>
            </section>



            {/* <!-- Landing Page Section  --> */}
            <section className="vision-home">
              <div className="container">
                <div className="vmp-grid">
                  <div className="vmp-in">
                    <h1 className="section-title-start mb-5">Vision</h1>
                    <p>
                      To be a World Class University providing value-based education,
                      conducting interdisciplinary research in cutting edge technologies
                      leading to sustainable socio-economic development of the nation.
                    </p>
                    <p>
                      To be a World Class University providing value-based education,
                      conducting interdisciplinary research in cutting edge technologies
                      leading to sustainable socio-economic development of the nation.
                    </p>
                  </div>
                  <div className="vmp-in">
                    <h1 className="section-title-start mb-5">Mission</h1>
                    <ul>
                      <li>
                        To produce technically competent and socially responsible engineers,
                        managers and entrepreneurs, who will be future ready.
                      </li>
                      <li>
                        To involve students and faculty in innovative research projects
                        linked with industry, academic and research institutions in India
                        and abroad.
                      </li>
                      <li>
                        To use modern pedagogy for improving the teaching-learning process.
                      </li>
                    </ul>
                  </div>
                  <div className="vmp-in">
                    <h1 className="section-title-start mb-5">Quality Policy</h1>
                    <ul>
                      <li>
                        Impart up-to-date knowledge in the students' chosen fields to make
                        them quality engineers
                      </li>
                      <li>
                        Make the students experience the applications on quality equipment
                        and tools
                      </li>
                      <li>Provide quality environment and services to all stakeholders</li>
                      <li>
                        Provide systems, resources and opportunities for continuous
                        improvement
                      </li>
                      {/* <li>Maintain global standards in education, training and services</li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </section>


            <section class="numbers-sec">
              <div class="container">
                <div class="numbers-wrapper">
                  <div class="numbers-container">
                    <h1 className="fw-bold"><p class="count">
                      <CountUp end={6956} separator="" duration={3.75} />
                    </p></h1>
                    <span>Students</span>
                  </div>
                  <div class="numbers-container">
                    <h1 className="fw-bold"><p class="count">
                      <CountUp end={480} separator="" duration={3.75} />
                    </p></h1>
                    <span>Faculty</span>
                  </div>
                  <div class="numbers-container">
                    <h1 className="fw-bold"><p class="count">
                      <CountUp end={86} separator="" duration={3.75} />
                    </p></h1>
                    <span>Research Projects</span>
                  </div>
                  <div class="numbers-container">
                    <h1 className="fw-bold"><p class="count">
                      <CountUp end={24} separator="" duration={3.75} />
                    </p></h1>
                    <span>Patents Granted</span>
                  </div>
                  <div class="numbers-container">
                    <h1 className="fw-bold"><p class="count">
                      <CountUp end={85} separator="" duration={3.75} />
                    </p></h1>
                    <span>Patents Filed</span>
                  </div>
                </div>
              </div>
            </section>
          </div>



          <section class="life-at-vnr mb-4">
            <div class="container">
              <div class="life-at-vnr-content">

                <div class="lavnr-images">
                  <div class="imgs-1">
                    <a href="https://vnrvjiet.ac.in/">
                      <section class="lavnr-image-container">
                        <img src="https://vnrvjiet.ac.in/assets/images/Component 3.png" alt="" />
                        <span>Research <br />
                          Projects</span>
                      </section>
                    </a>
                    <a href="https://www.vnralums.com/" target="_blank">
                      <section class="lavnr-image-container">
                        <img src="https://vnrvjiet.ac.in/assets/images/Component 1.png" alt="" />
                        <span>Our <br />
                          Alumni</span>
                      </section>
                    </a>
                  </div>
                  <a href="https://vnrvjiet.ac.in/">
                    <section class="lavnr-image-container">
                      <img src="https://vnrvjiet.ac.in/assets/images/Component 1 (1).png" alt="" />
                      <span>Placements</span>
                    </section>
                  </a>
                  <div class="imgs-2">
                    <a href="https://vnrvjiet.ac.in/admissions">
                      <section class="lavnr-image-container">
                        <img src="https://vnrvjiet.ac.in/assets/images/Component 2.png" alt="" />
                        <span>Admissions</span>
                      </section>
                    </a>
                    <div class="imgs-3">
                      <a href="https://vnrvjiet.ac.in/campus">
                        <section class="lavnr-image-container">
                          <img src="https://vnrvjiet.ac.in/assets/images/Component 3 (1).png" alt="" />
                          <span>Our <br />
                            Campus</span>
                        </section>
                      </a>
                      <a href="https://vnrvjiet.ac.in/student-centre">
                        <section class="lavnr-image-container">
                          <img src="https://vnrvjiet.ac.in/assets/images/Component 2 (1).png" alt="" />
                          <span>Student <br />
                            Chapters</span>
                        </section>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* 
          <MDBContainer>
            <h2 className="Our__Recruiters mt-4">
              Our Recruiters
            </h2>
            <PlacementSlider />
          </MDBContainer> */}


          {/* <section class="achievements-sec">
            <div class="container">
              <h1 class="section-title">Student Achievements</h1>
              <div class="achievements-grid">
                <div class="achievements-container">
                  <div class="achievements-box">
                    <img src="https://vnrvjiet.ac.in/assets/images/Component 1.png" alt="" />
                    <div class="achievements-box-content">
                      <h4>
                        VNRVJIET has been presented with the Mathworks ICTIEE Award - 2023
                        for Academic&nbsp;Excellence
                      </h4>
                      <span>July 21, 2023</span>
                    </div>
                  </div>
                  <div class="small-achievements">
                    <h4>
                      Ch. Abhilash won Silver Medal in 400m freestyle &amp; 5th place in 400m
                      Individual Medely Swimming at Khelo India University Games 2021
                    </h4>
                    <span>April 24, 2022</span>
                  </div>
                </div>
                <div class="achievements-container">
                  <div class="small-achievements">
                    <h4>
                      Congratulations to Pranavi Chaturvedula for winning the ET Campus
                      Star Class of 2022 by Economic Times
                    </h4>
                    <span>August 18, 2022</span>
                  </div>
                  <div class="achievements-box">
                    <img src="https://vnrvjiet.ac.in/assets/images/Component 2.png" alt="" />
                    <div class="achievements-box-content">
                      <h4>
                        Two of our CSE students K. Hiranmai Sai Supriya &amp; Srija Tulasi got
                        placed in Google with a CTC of 22.4 lakhs &amp; Alphabet stocks worth
                        32500 USD
                      </h4>
                      <span>July 7, 2022</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> */}








          <div>
            <div className="main__1">
              <MDBContainer fluid>
                <h1 className="fw-bold text-center">
                  Welcome {JSON.parse(sessionStorage.getItem("userinfo")).fName} {JSON.parse(sessionStorage.getItem("userinfo")).lName}

                  <MDBBtn onClick={this.logout} className="ms-2">Logout</MDBBtn>
                </h1>
              </MDBContainer>
              <div className="college__details ">
                <div className="w-100 head__features">
                  <h1>Quick Links</h1>
                </div>
                <Link to="/collegeAdmissions">
                  <div className="college__features">
                    <img
                      src={CollegeAdmissions}
                      alt="..."
                      className="features__logo"
                    />
                    <p>College Admissions</p>
                  </div>
                </Link>

                <Link to="/ExaminationManagement">
                  <div className="college__features">
                    <img
                      src={ExaminationManagement}
                      alt="..."
                      className="features__logo"
                    />
                    <p>Examination Management</p>
                  </div>
                </Link>

                <Link to="/resultsManagement">
                  <div className="college__features">
                    <img
                      src={ResultsManagement}
                      alt="..."
                      className="features__logo"
                    />
                    <p>Results Management</p>
                  </div>
                </Link>

                <Link to="/HolidaysandTimeTable">
                  <div className="college__features">
                    <img src={TimeTable} alt="..." className="features__logo" />
                    <p>Holidays and Time Table</p>
                  </div>
                </Link>
                <Link to="/AttendanceTracking">
                  <div className="college__features">
                    <img
                      src={AttendanceTracking}
                      alt="..."
                      className="features__logo"
                    />
                    <p>Attendance Tracking</p>
                  </div>
                </Link>

                <Link to="/StudentAndFacultyProfiles">
                  <div className="college__features">
                    <img
                      src={FacultyProfiles}
                      alt="..."
                      className="features__logo"
                    />
                    <p>Student and Faculty Profiles</p>
                  </div>
                </Link>

                <Link to="/LibraryManagement">
                  <div className="college__features">
                    <img
                      src={LibraryManagement}
                      alt="..."
                      className="features__logo"
                    />
                    <p>Library Management</p>
                  </div>
                </Link>

                <Link to='/CourseRegistration'>
                  <div className="college__features">
                    <img
                      src={CourseRegistration}
                      alt="..."
                      className="features__logo"
                    />
                    <p>Course Registration</p>
                  </div>
                </Link>

                <div className="college__features">
                  <img
                    src={FeePaymentandRecords}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Fee Payment and Records</p>
                </div>

                <div className="college__features">
                  <img
                    src={HostelandAccommodationManagement}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Hostel and Accommodation Managements</p>
                </div>

                <div className="college__features">
                  <img
                    src={ResearchandProjectsRepository}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Research and Projects Repository</p>
                </div>

                <div className="college__features">
                  <img
                    src={StudentSupportServices}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Student Support Services</p>
                </div>

                <div className="college__features">
                  <img
                    src={InternshipandPlacementPortal}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Internship and Placement Portal</p>
                </div>

                <div className="college__features">
                  <img
                    src={CampusNewsandEvents}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Campus News and Events</p>
                </div>

                <div className="college__features">
                  <img
                    src={FacultyEvaluationandFeedback}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Faculty Evaluation and Feedback</p>
                </div>

                <div className="college__features">
                  <img
                    src={SportsandRecreationManagement}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Sports and Recreation Management</p>
                </div>

                <div className="college__features">
                  <img src={HealthCenter} alt="..." className="features__logo" />
                  <p>Health Center and Counseling Services</p>
                </div>

                <div className="college__features">
                  <img
                    src={CampusMapandNavigation}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Campus Map and Navigation</p>
                </div>

                <div className="college__features">
                  <img
                    src={CanteenManagement}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Canteen Management</p>
                </div>

                <div className="college__features">
                  <img
                    src={TransportandBusServiceManagement}
                    alt="..."
                    className="features__logo"
                  />
                  <p>Transport and Bus Service Management</p>
                </div>

                <Link to='/HelpAndSupport'>
                  <div className="college__features">
                    <img
                      src={HelpandSupport}
                      alt="..."
                      className="features__logo"
                    />
                    <p>Help and Support</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>


          <Footer />



        </>
      </React.Fragment >
    );
  }
}
export default Dashboard;
