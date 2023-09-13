import React from "react";
import NavLinks from '../../Components/NavLinks/NavLinks'
import Footer from "../../Components/Footer/Footer";
import Avathar1 from "../../Components/Assets/FacultyExample.jpg";
import GraduateCap from "../../Components/Assets/graduate-cap-svgrepo-com.svg";
import locationIcon from "../../Components/Assets/location-pin-svgrepo-com.svg";
import MailOpen from "../../Components/Assets/mail-open-alt-1-svgrepo-com.svg";
import PhoneLogo from "../../Components/Assets/phone-svgrepo-com.svg";
import StudentImg from "../../Components/Assets/Login_Img.jpg";

import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
    MDBCol,
    MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";


function StudentViewProfile() {
    return (
        <React.Fragment>
            <>
                <NavLinks />

                <div className="main__bodySub">
                    <div className="Faculty__Bg">
                        <div className="Faculty__Profiles__bg">
                            <img src={StudentImg} className="student__image" />
                            <MDBRow>
                                <MDBCol size={4}>
                                    <div className="d-flex align-items-start flex-column ps-5">
                                        <h1 className="fw-bold">M. Arthi B</h1>
                                        <div className="d-flex align-items-center mt-4">
                                            <img src={GraduateCap} className="Graduate__icons" /><p className="m-0 ms-2">Btech - CSE    </p>
                                        </div>
                                        <div className="d-flex align-items-center mt-3">
                                            <img src={locationIcon} className="Graduate__icons" /><p className="m-0 ms-2">Manufacturing Engineering and Micro electro Mechanical Systems</p>
                                        </div>
                                        <div className="d-flex align-items-center mt-3">
                                            <img src={PhoneLogo} className="Graduate__icons" /><p className="m-0 ms-2">+91 9848173866</p>
                                        </div>
                                        <div className="d-flex align-items-center mt-3">
                                            <img src={MailOpen} className="Graduate__icons" /><p className="m-0 ms-2">arthi@ssiet.com</p>
                                        </div>
                                    </div>
                                </MDBCol>

                                <MDBCol size={7}>
                                    <div className="d-flex align-items-start flex-column ms-5 w-100">

                                        <p><strong>CAMPUS : </strong>  Department of Mechatronics Engineering, College of Engineering & Technology, Kattankulathur - Chennai</p>
                                        <p><strong>EXPERIENCE : </strong>  27.4 years of experience</p>
                                        <p><strong> RESEARCH INTEREST : </strong>Smart Materials, Thin Films, Bio-Mechanics, Bio-Mimicry, Continuum Robotics</p>
                                        <p><strong> COURSES : </strong>
                                        </p>
                                        <p>
                                            CAD and CAM, Digital Manufacturing, Concurrent Engineering, Rapid Prototyping, Industry 4.0, Finite Element Analysis, Machine Design, Materials and Metallurgy, Smart Materials, Robotics, Fluid power systems, Manufacturing Engineering, Micro Electro Mechanical Systems

                                        </p>

                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        </React.Fragment >
    )
}
export default StudentViewProfile;


