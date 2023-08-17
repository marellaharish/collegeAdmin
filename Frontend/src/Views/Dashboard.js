import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavLinks from "../Components/NavLinks/NavLinks";
import Footer from "../Components/Footer/Footer";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
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
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import MultipleImageSlider from "../Components/component/MultipleImageSlider";

function Dashboard() {
  return (
    <React.Fragment>
      <>
        <NavLinks />

        <div className="main__body">
          <div className="main__1">
            <MDBContainer fluid>
              {/* <ImageSlider /> */}
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

              <div className="college__features">
                <img
                  src={CourseRegistration}
                  alt="..."
                  className="features__logo"
                />
                <p>Course Registration</p>
              </div>

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

              <div className="college__features">
                <img
                  src={HelpandSupport}
                  alt="..."
                  className="features__logo"
                />
                <p>Help and Support</p>
              </div>
            </div>
          </div>

          <div className="main2">
            <div className="main-head">
              <h1>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur
              </h1>
            </div>
            <div className="heading">
              <img src={Slide1} className="img-head" />
            </div>
            <div className="image-text">
              <p className="fs-5 mb-0">Top Quality And Learning Experience</p>
            </div>
            <div className="counter-text ">
              <h1>
                <CountUp end={1985} separator="" duration={3.75} />
                <p>Established</p>
              </h1>
              <h1>
                <CountUp end={250} separator="" duration={3.75} suffix="+" />
                <p>Acres Green Campus</p>
              </h1>
              <h1>
                <CountUp end={50000} separator="," duration={3.75} suffix="+" />
                <p>Students</p>
              </h1>
            </div>
          </div>

          <div className="main__3">
            <MDBRow>
              <MDBCol size={6}></MDBCol>
              <MDBCol className="student__section">
                <div className="Student__Section__head">
                  <h4>Student's Section</h4>
                  <div className="routing__border w-25"></div>
                  <div className="Student__Section__data">
                    <MDBRow>
                      <MDBCol size={6}>
                        <h6>Abc</h6>
                        <p>fkjdgnvzndvg</p>
                      </MDBCol>
                      <MDBCol size={6}>
                        <h6>Abc</h6>
                        <p>fkjdgnvzndvg</p>
                      </MDBCol>
                    </MDBRow>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
          <Footer />
        </div>
      </>
    </React.Fragment>
  );
}
export default Dashboard;
