import React from "react";
import NavLinks from "../../Components/NavLinks/NavLinks";
import Footer from "../../Components/Footer/Footer";
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
    MDBCol,
    MDBRadio,
    MDBRow,
} from "mdb-react-ui-kit";
import AboutBanner from "../../Components/Assets/banner1.png";
import copywriting from "../../Components/Assets/copywriter.png";
import CSE from "../../Components/Assets/computer-svgrepo-com.svg";
import calender from "../../Components/Assets/event-calender-date-note-svgrepo-com.svg";
import People from "../../Components/Assets/users-group-two-rounded-svgrepo-com.svg";
import Money from "../../Components/Assets/money-bag-svgrepo-com.svg";
import Alarm from "../../Components/Assets/alarm-clock-svgrepo-com.svg";
import ECE from "../../Components/Assets/electrical-sensor-svgrepo-com.svg";
import EEE from "../../Components/Assets/power-energy-bolt-thunderbolt-electricity-svgrepo-com.svg";
import CIVIL from "../../Components/Assets/building-construction-excavator-svgrepo-com.svg";

import { MDBContainer } from "mdb-react-ui-kit";
function CollegeAdmissions() {
    return (
        <React.Fragment>
            <>
                <NavLinks />
                <div className="main__bodySub">
                    <MDBContainer fluid>
                        <div className="College__Admissions">
                            <div className="Admissions__head">
                                <h1>Admissions</h1>
                                <div>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Home</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Admissions</a>
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>

                    <MDBContainer className="mb-5">
                        <div className="mt-5 about__title">
                            <div>
                                <div className="join__txt"> Join With Us </div>
                                <h2>Your Future, Our Mission.</h2>
                            </div>
                            <img src={AboutBanner} className="AboutBanner__img" />
                        </div>

                        <MDBRow>
                            <MDBCol size={4}>
                                <div className="form__full__box">
                                    <div class="form_title">
                                        <h2>Apply for Admission</h2>
                                        <p>
                                            <span>Get a call back from our admission team.</span>
                                        </p>
                                    </div>

                                    <form id="enquiry-form" class="pb-3">
                                        <div class="register-form">
                                            <div class="row">
                                                <div class="col-12 col-xs-12 col-md-12">
                                                    <div class="form-group">
                                                        <label>
                                                            <i class="fas fa-user-tie"></i>
                                                        </label>
                                                        <input
                                                            class="form-control"
                                                            name="sname"
                                                            placeholder="Enter Your Surname"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xs-12 col-md-12">
                                                    <div class="form-group">
                                                        <label>
                                                            <i class="fas fa-user"></i>
                                                        </label>
                                                        <input
                                                            class="form-control"
                                                            name="fname"
                                                            placeholder="Enter Your First Name"
                                                        />
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xs-12 col-md-12">
                                                    <div class="form-group">
                                                        <label>
                                                            <i class="flaticon-copywriting"></i>
                                                        </label>
                                                        <select
                                                            class="form-control"
                                                            id="course-select"
                                                            name="course"
                                                        >
                                                            <option value="btech">B.Tech (UG)</option>
                                                            <option value="mtech">M.Tech (PG)</option>
                                                            <option value="mba">MBA (PG)</option>
                                                        </select>
                                                        <span>
                                                            <i class="flaticon-right-arrow float-right"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div
                                                    class="col-12 col-xs-12 col-md-12"
                                                    id="branch-selectp"
                                                >
                                                    <div class="form-group">
                                                        <label>
                                                            <i class="flaticon-copywriting"></i>
                                                        </label>
                                                        <select
                                                            class="form-control"
                                                            id="branch-select"
                                                            name="branch"
                                                        >
                                                            <option value="CSE">
                                                                Computer Science Engg.
                                                            </option>
                                                            <option value="CSE-Cyber Security">
                                                                CSE - Cyber Security
                                                            </option>
                                                            <option value="CSE-IoT">
                                                                CSE-Internet of Things
                                                            </option>
                                                            <option value="AI&amp;DS">
                                                                Artificial intelligence &amp; Data Science
                                                            </option>
                                                            <option value="CIVIL">Civil Engg</option>
                                                            <option value="EEE">
                                                                Electrical &amp; Electronics Engg.
                                                            </option>
                                                            <option value="MECH">Mechanical Engg.</option>
                                                            <option value="ECE">
                                                                Electronics &amp; Communication Engg.
                                                            </option>
                                                            <option value="NA" hidden=""></option>
                                                        </select>
                                                        <span>
                                                            <i class="flaticon-right-arrow float-right"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-xs-12 col-md-12">
                                                    <div class="form-group">
                                                        <label>
                                                            <i class="flaticon-phone-receiver"></i>
                                                        </label>
                                                        <input
                                                            class="form-control"
                                                            name="phone"
                                                            placeholder="Enter your mobile number"
                                                        />
                                                    </div>
                                                </div>

                                                <div class="col-12 col-xs-12 col-md-12 register-btn-box">
                                                    <button
                                                        id="enq-submit-btn"
                                                        class="register-btn"
                                                        onclick="sumbit_enquiry_form(event)"
                                                    >
                                                        Submit
                                                    </button>
                                                    <button
                                                        class="register-btn js-modal-show d-none"
                                                        data-modal-target="mobile_number_verify"
                                                        id="otp_modal"
                                                    ></button>
                                                </div>
                                                <div class="col-12 col-xs-12 col-md-12 register-btn-box mt-3">
                                                    <a
                                                        href="https://files.rcee.ac.in/files/www/brochures/brochure2022.pdf"
                                                        class="text-white text-center"
                                                        target="_blank"
                                                    >
                                                        {" "}
                                                        <h5 class="text-white">
                                                            Click Here to Download <br /> E-Broucher
                                                        </h5>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div>
                                    <div class="about_content">
                                        <p class="text-justify">
                                            The following content depicts the Engineering and PG
                                            courses offered at RCE, the duration and sanctioned intake
                                            by AICTE, New Delhi. A candidate is eligible to enroll in
                                            B.Tech programmme with prerequisites: pass in Intermediate
                                            with Maths, Physics and Chemistry as major subjects and
                                            valid score in qualifying exam <strong> EAMCET</strong>{" "}
                                            under <strong>category A</strong>. A candidate is eligible
                                            to post-graduate programme with any degree and valid score
                                            in qualifying exam <strong>ICET</strong>
                                            under <strong>Category A</strong>.
                                        </p>
                                        <p class="text-justify">
                                            A candidate with <strong> IPE(MPC)</strong> pass and
                                            without valid score in qualifying exam can enroll into
                                            B.Tech programme via <strong> category B</strong>.
                                            Similarly a candidate with any <strong>Degree</strong> can
                                            enroll into MBA via <strong>Category B</strong>. Please
                                            refer fee structure for Category A and Category B
                                            admissions.
                                        </p>
                                        <a href="#" class="disable-click" title="Counselling Code">
                                            AP EAMCET &amp; AP ECET Counselling Code: RCEE
                                        </a>
                                        <br />
                                        <a href="#" class="disable-click" title="Counselling Code">
                                            AP PGECET &amp; AP ICET Counselling Code: RCEE1
                                        </a>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                        <div className="Undergraduate__Courses">
                            <h2>Undergraduate Courses</h2>
                            <div className="Course__branches">
                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CSE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={ECE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Electronics & Communication Engg.
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={EEE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Electrical & Electronics Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CIVIL} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CSE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CSE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CSE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CSE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <MDBBtn outline className="me-3 branches__btn">
                                    ELIGIBILITY CRITERIA
                                </MDBBtn>
                                <MDBBtn outline className="me-3 branches__btn">
                                    CONTACT US
                                </MDBBtn>
                                <MDBBtn outline className="me-3 branches__btn">
                                    APPLY NOW
                                </MDBBtn>
                            </div>
                        </div>

                        <div className="Undergraduate__Courses">
                            <h2>Undergraduate Courses</h2>
                            <div className="Course__branches">
                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CSE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={ECE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Electronics & Communication Engg.
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={EEE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Electrical & Electronics Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CIVIL} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>

                                <div className="branches">
                                    <MDBRow className="d-flex align-items-center">
                                        <MDBCol size={4} className="d-flex align-items-center ">
                                            <img src={CSE} className="branches__img" />
                                        </MDBCol>
                                        <MDBCol
                                            size={8}
                                            className="d-flex align-items-center flex-column mt-2"
                                        >
                                            <h4 className="text-center">
                                                Computer Science Engineering
                                            </h4>
                                            <p>B.Tech</p>
                                        </MDBCol>
                                        <MDBCol size={6} className="d-flex align-items-center">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={calender} className="calender__img" />
                                                <p className="mb-0 ms-3">Duration - 4 Years</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6}>
                                            <div className="d-flex align-items-center text-left">
                                                <img src={People} className="calender__img" />
                                                <p className="mb-0 ms-3">Intake - 60</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left ms-2">
                                                <img src={Alarm} className="calender__img" />
                                                <p className="mb-0 ms-3">Semesters - 8</p>
                                            </div>
                                        </MDBCol>
                                        <MDBCol size={6} className="mt-3">
                                            <div className="d-flex align-items-center text-left">
                                                <img src={Money} className="calender__img" />
                                                <p className="mb-0 ms-3">Fee - ₹ 45,900</p>
                                            </div>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                                <MDBBtn outline className="me-3 branches__btn">
                                    ELIGIBILITY CRITERIA
                                </MDBBtn>
                                <MDBBtn outline className="me-3 branches__btn">
                                    CONTACT US
                                </MDBBtn>
                                {/* <MDBBtn outline className="me-3 branches__btn">
                  APPLY NOW
                </MDBBtn> */}
                            </div>
                        </div>

                        <div className="Undergraduate__Courses">
                            <h2>Scholarships</h2>

                            <p className="Undergraduate__Courses__details">
                                As per the state order (GO Ms No 66) the eligible students who
                                falls in the category of SC, ST, BC, EBC, minorities and
                                physically handicapped the scheme of Fee reimbursement is
                                available .Since the scheme is available for SC, ST, BC, EBC
                                minorities and physically handicapped students whose parental
                                income is less than Rs 1 lakh per annum, the GO states that the
                                concerned Students should produce the relevant revenue
                                certificates from the concerned revenue officers issued only as
                                per the instructions and directions of the group of ministers.
                                GO says that students should have 75 per cent attendance each
                                year to be eligible for the scheme. The students who get
                                promoted to higher classes even if they have not cleared the
                                subjects are eligible for the scheme.
                            </p>
                        </div>
                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment>
    );
}
export default CollegeAdmissions;
