import React from "react";
import NavLinks from '../../Components/NavLinks/NavLinks'
import Footer from "../../Components/Footer/Footer";
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
    MDBContainer
} from "mdb-react-ui-kit";


function FacultyViewProfile() {
    return (
        <React.Fragment>
            <>
                <NavLinks />

                <div className="main__bodySub">
                    <MDBContainer fluid>
                        <div className="College__Admissions">
                            <div className="Admissions__head">
                                <h1>Faculty Profiles</h1>
                                <div>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Home</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Student and Faculty Profiles</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Faculty Details</a>
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>
                    <MDBContainer fluid>
                        <div className="Faculty__Bg">

                        </div>
                    </MDBContainer>
                </div>
                <Footer />
            </>
        </React.Fragment>
    )
}
export default FacultyViewProfile;
