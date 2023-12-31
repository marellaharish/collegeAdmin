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
import ECE from "../../Components/Assets/electrical-sensor-svgrepo-com.svg";
import EEE from "../../Components/Assets/electric-tower-svgrepo-com.svg";
import AIDS from "../../Components/Assets/artificial-intelligence-svgrepo-com.svg";
import IT from "../../Components/Assets/laptop-svgrepo-com.svg";
import AIML from "../../Components/Assets/machine-learning-svgrepo-com.svg";
import CIVIL from "../../Components/Assets/civil-engineering-tools-svgrepo-com.svg";
import MECH from "../../Components/Assets/cog-configure-gear-svgrepo-com.svg";
import Bussiness from "../../Components/Assets/business-svgrepo-com.svg";
import Power from "../../Components/Assets/voltage-solid-svgrepo-com.svg";
import VLSI from "../../Components/Assets/chip-svgrepo-com.svg";
import MD from "../../Components/Assets/database-svgrepo-com.svg";


import calender from "../../Components/Assets/event-calender-date-note-svgrepo-com.svg";
import People from "../../Components/Assets/users-group-two-rounded-svgrepo-com.svg";
import Money from "../../Components/Assets/money-bag-svgrepo-com.svg";
import Alarm from "../../Components/Assets/alarm-clock-svgrepo-com.svg";
import Branches from "../../Components/component/Branches";

import { MDBContainer } from "mdb-react-ui-kit";
function CollegeAdmissions() {

    const branchesData = [
        {
            name: 'Computer Science Engineering (CSE)',
            degree: 'B.Tech',
            duration: '4 Years',
            intake: '60',
            semesters: '8',
            fee: '45,900',
            imgSrc: CSE,
        },
        {
            name: 'Electronics & Communication Engineering(ECE)',
            degree: 'B.Tech',
            duration: '4 Years',
            intake: '60',
            semesters: '8',
            fee: '45,900',
            imgSrc: ECE,
        },
        {
            name: 'Electrical & Electronics Engineering(EEE)',
            degree: 'B.Tech',
            duration: '4 Years',
            intake: '60',
            semesters: '8',
            fee: '45,900',
            imgSrc: EEE,
        },
        {
            name: 'Artificial Intelligence and Data Science(AI&DS)',
            degree: 'B.Tech',
            duration: '4 Years',
            intake: '60',
            semesters: '8',
            fee: '45,900',
            imgSrc: AIDS,
        },
        {
            name: 'Information Technology(IT)',
            degree: 'B.Tech',
            duration: '4 Years',
            intake: '60',
            semesters: '8',
            fee: '45,900',
            imgSrc: IT,
        },
        {
            name: 'Artificial Intelligence & Machine Learning(AI&ML)',
            degree: 'B.Tech',
            duration: '4 Years',
            intake: '60',
            semesters: '8',
            fee: '45,900',
            imgSrc: AIML,
        },
        {
            name: '	Civil Engineering',
            degree: 'B.Tech',
            duration: '4 Years',
            intake: '60',
            semesters: '8',
            fee: '45,900',
            imgSrc: CIVIL,
        },
        {
            name: 'Mechanical Engineering',
            degree: 'B.Tech',
            duration: '4 Years',
            intake: '60',
            semesters: '8',
            fee: '45,900',
            imgSrc: MECH,
        },


    ];

    const masterBranchesData = [
        {
            name: 'Master of Business Administration',
            degree: 'MBA',
            duration: '2 Years',
            intake: '120',
            semesters: '4',
            fee: '45,900',
            imgSrc: Bussiness,
        },
        {
            name: 'Power Electronics',
            degree: 'MTech',
            duration: '2 Years',
            intake: '120',
            semesters: '4',
            fee: '45,900',
            imgSrc: Power,
        },
        {
            name: 'Very Large Scale Integration - VLSI',
            degree: 'MTech',
            duration: '2 Years',
            intake: '120',
            semesters: '4',
            fee: '45,900',
            imgSrc: VLSI,
        },
        {
            name: 'Machine Design',
            degree: 'MTech',
            duration: '2 Years',
            intake: '120',
            semesters: '4',
            fee: '45,900',
            imgSrc: MD,
        },
    ]


    return (
        <React.Fragment>
            <>
                <NavLinks />
                <div className="main__bodySub">
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

                    <MDBContainer className="mb-5">
                        <div className="about__title">
                            <div>
                                <div className="join__txt"> Join With Us </div>
                                <h2>Your Future, Our Mission.</h2>
                            </div>
                            <img src={AboutBanner} className="AboutBanner__img" />
                        </div>

                        <section class="dept-landing-sec">
                            <div class="container">
                                <div class="dept-landing-content">
                                    <div class="dept-landing-left">
                                        <h1>Admissions</h1>
                                        <p>
                                            Vallurupalli Nageswara Rao Vignana Jyothi Institute of Engineering and
                                            Technology (VNRVJIET), sponsored by Vignana Jyothi, was established in
                                            1995 with the permission of All India Council for Technical Education
                                            (AICTE), New Delhi and the Government of (erstwhile) Andhra Pradesh.
                                            The Institute is autonomous under UGC and is affiliated to
                                            JNTU-Hyderabad and is recognised under Section 2(f) and 12 (B) of UGC
                                            Act, 1956. The Institute is accredited by NAAC with 'A++' Grade, rated
                                            “Diamond” by QS I-GAUGE, and is ISO 9001:2015 certified. The Institute
                                            offers <a>14 B.Tech. programmes</a>,13 M.Tech. programmes, and 5 Ph.D.
                                            programmes. All eligible undergraduate programmes and four
                                            postgraduate programmes are accredited by the National Board of
                                            Accreditation (NBA). The tuition fees for all programmes are
                                            stipulated as per the Government Order by Telangana State which, under
                                            Convener Quota, is ₹1,35,000 per year for B.Tech. and ₹1,30,000 per
                                            year for M.Tech. programmes.
                                        </p>
                                        <p >
                                            <strong>VNRVJIET follows the relevant guidelines from the Government of
                                                Telangana State for admissions. Parents/ Students are strongly
                                                discouraged to not approach any agencies/ consultants that make fake
                                                commitments about admissions under Management Quota or any other
                                                pathway. The Institute and its Administration &amp; Management are not
                                                responsible for any false commitments given by
                                                third-party&nbsp;agents.</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* <MDBRow>
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
                        </MDBRow> */}













                        <section class="updates-sec">
                            <div class="container">
                                <div class="updates-content" style={{ gap: 50 }}>
                                    <div class="admission-news-container">
                                        <div class="mb-6">
                                            <h1 class="section-title-start">Admission News</h1>
                                            <a href="https://vnrvjiet.ac.in/assets/images/M-Tech-Management-quota-notification.jpg" target="_blank">
                                                <div class="news-content mb-3">
                                                    <p>
                                                        M.Tech management Quota notification
                                                    </p>
                                                    <span>September 23, 2023</span>
                                                </div>
                                            </a>
                                            <a href="https://vnrvjiet.ac.in/assets/pdfs/M-Tech-Management-application-2023.pdf" target="_blank">
                                                <div class="news-content mb-3">
                                                    <p>
                                                        M.Tech management Application-2023
                                                    </p>
                                                    <span>September 23, 2023</span>
                                                </div>
                                            </a>

                                            <a href="https://vnrvjiet.ac.in/assets/pdfs/Automobile-CAT-B.pdf" target="_blank">
                                                <div class="news-content mb-3">
                                                    <p>
                                                        CAT-B Admissions
                                                    </p>
                                                    <span>September 8, 2023</span>
                                                </div>
                                            </a>
                                            <a href="https://vnrvjiet.ac.in/assets/images/PG-Research-Assistantship.jpg" target="_blank">
                                                <div class="news-content mb-3">
                                                    <p>
                                                        M.Tech Research Assistantship
                                                    </p>
                                                    <span>September 8, 2023</span>
                                                </div>
                                            </a>
                                            <a href="https://vnrvjiet.ac.in/assets/images/Supernumerary-Quota.png">
                                                <div class="news-content mb-3">
                                                    <p>
                                                        Admission Notification for 1st year B.Tech Supernumerary Quota - Foreign Nationals/OCI/CIWGC category
                                                    </p>
                                                    <span>July 20, 2023</span>

                                                </div>
                                            </a>

                                            <a href="https://automation.vnrvjiet.ac.in/eduprime3/admissions">
                                                <div class="news-content mb-3">
                                                    <p>
                                                        Application for Foreign Nationals/OCI/CIWGC category
                                                    </p>
                                                    <span>July 20, 2023</span>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        <div className="Undergraduate__Courses">
                            <h2>Undergraduate Courses</h2>
                            <div className="Course__branches">

                                {branchesData.map((branch, index) => (
                                    <Branches
                                        key={index}
                                        name={branch.name}
                                        degree={branch.degree}
                                        duration={branch.duration}
                                        intake={branch.intake}
                                        semesters={branch.semesters}
                                        fee={branch.fee}
                                        imgSrc={branch.imgSrc}
                                    />
                                ))}
                            </div>
                        </div>


                        <div className="Undergraduate__Courses">
                            <h2>Postgraduate Courses</h2>
                            <div className="Course__branches">

                                {masterBranchesData.map((branch, index) => (
                                    <Branches
                                        key={index}
                                        name={branch.name}
                                        degree={branch.degree}
                                        duration={branch.duration}
                                        intake={branch.intake}
                                        semesters={branch.semesters}
                                        fee={branch.fee}
                                        imgSrc={branch.imgSrc}
                                    />
                                ))}
                            </div>
                        </div>




















                        {/* 
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
                        </div> */}
                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment>
    );
}
export default CollegeAdmissions;
