import React from "react";
import NavLinks from "../../Components/NavLinks/NavLinks";
import Footer from '../../Components/Footer/Footer';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBContainer,
    MDBBtn,
} from "mdb-react-ui-kit";
import calender from "../../Components/Assets/calender-day-love-svgrepo-com.svg";
import Star from "../../Components/Assets/star-svgrepo-com.svg";
import Book from "../../Components/Assets/book-saved-svgrepo-com.svg";
function ExaminationManagement() {
    return (


        <React.Fragment>
            <>
                <NavLinks />
                <div className="main__bodySub">
                    <MDBContainer fluid>
                        <div className="College__Admissions">
                            <div className="Admissions__head">
                                <h1>Examination Management</h1>
                                <div>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Home</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Examination Management</a>
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>
                    <MDBContainer>
                        <div className="Examination__Management">


                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <h2>Circulars</h2>
                                <p className="mb-0 mt-3 w-80 text-center"> Students can view their result for the university examinations. The results published on website are for immediate information to the examinees. To view the examinations results the below mentioned URLs can be referred</p>
                                <MDBBtn className="me-3 Instruction__btn">
                                    View Circulars
                                </MDBBtn>
                            </div>


                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <h2>Examination Instruction</h2>
                                <p className="mb-0 mt-3">  These are the instructions to students appearing for the university / end semester examinations </p>
                                <MDBBtn className="me-3 Instruction__btn btn-primary">
                                    Instructions
                                </MDBBtn>
                            </div>


                            <div className="d-flex align-items-center justify-content-center flex-column mt-3">
                                <h2>Examination Schedules & Results</h2>
                                <p className="mb-0 mt-3 w-80 text-center"> Students can view their result for the university examinations. The results published on website are for immediate information to the examinees. To view the examinations results the below mentioned URLs can be referred</p>

                                <div className="timeTable__results d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center justify-content-center time__table">
                                        <img src={calender} className="timeTable__logo " /><h4 className="mb-0">
                                            Examination Time tables                </h4>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center time__table">
                                        <img src={Star} className="timeTable__logo " /><h4 className="mb-0">
                                            Examination Results Portal                 </h4>
                                    </div>
                                </div>
                                {/* <MDBBtn className="me-3 Instruction__btn btn-secondary">
                                    View Circulars
                                </MDBBtn> */}
                            </div>



                            <div className="d-flex align-items-center justify-content-center flex-column mt-3">
                                <h2>FEEKART Portal</h2>
                                <p className="mb-0 mt-3 w-80 text-center"> Students at SRM Institute of Science and Technology can access recent examination time tables, exam instructions, exam results, and other announcements regarding recent examinations.</p>
                                <MDBBtn className="me-3 Instruction__btn">
                                    Pay Fee Online
                                </MDBBtn>
                            </div>



                            <div className="d-flex align-items-center justify-content-center flex-column ">
                                <h2>HallTicket</h2>
                                <p className="mb-0 mt-3 w-80 text-center"> Students at SRM Institute of Science and Technology can access recent examination time tables, exam instructions, exam results, and other announcements regarding recent examinations.</p>
                                <MDBBtn className="me-3 Instruction__btn">
                                    Download HallTicket
                                </MDBBtn>
                            </div>

                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <h2>Application Forms For Exams</h2>
                                <p className="mb-0 mt-3 w-80 text-center"> Students at SRM Institute of Science and Technology can access recent examination time tables, exam instructions, exam results, and other announcements regarding recent examinations.</p>
                                <MDBBtn className="me-3 Instruction__btn btn-primary w-50">

                                    Review / Revaluation / Retotalling Of Answer Scripts
                                </MDBBtn>
                            </div>



                            <div className="d-flex align-items-center justify-content-center flex-column mt-3">
                                <h2>Applications & Certifications</h2>
                                <p className="mb-0 mt-3 w-80 text-center">The certificate requisition portal for the students/alumni to apply and get their transcript/attested copies/duplicate certificate and grade sheets/migration certificate in a convenient manner. The students /alumnus are authorized to use this portal. Unauthorized usage will be taken seriously. Students/alumni are requested to read and follow the instructions given in the application forms available in the certificate requisition portal before proceeding to apply</p>

                                <div className="timeTable__results d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center justify-content-center time__table">
                                        <img src={calender} className="timeTable__logo ms-3 " /><h4 className="mb-0 text-center">
                                            Online Certificate Application                </h4>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center time__table">
                                        <img src={Book} className="timeTable__logo ms-3" /><h4 className="mb-0 text-center">
                                            Online Certificate Application User Manual                </h4>
                                    </div>
                                </div>
                                {/* <MDBBtn className="me-3 Instruction__btn btn-secondary">
                                    View Circulars
                                </MDBBtn> */}
                            </div>



                        </div>
                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment>
    )
}
export default ExaminationManagement