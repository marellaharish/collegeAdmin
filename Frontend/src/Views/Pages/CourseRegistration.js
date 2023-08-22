import React from 'react'
import NavLinks from '../../Components/NavLinks/NavLinks'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';
import { MDBSelect } from 'mdb-react-ui-kit';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
    MDBCol,
    MDBRadio,
    MDBRow,
} from "mdb-react-ui-kit";

import {
    MDBInputGroup,
    MDBIcon
} from 'mdb-react-ui-kit';
function CourseRegistration() {
    return (
        <React.Fragment>
            <>
                <NavLinks />
                <div className="main__bodySub">
                    <MDBContainer fluid>
                        <div className="College__Admissions">
                            <div className="Admissions__head">
                                <h1>Course Registration</h1>
                                <div>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Home</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">CourseRegistration</a>
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>

                    <MDBContainer className='mb-5'>
                        <div className='course__registration'>
                            <div className='course__registration__card'>
                                <div className='p-3'>
                                    <p className='mb-0'>
                                        Registrations
                                    </p>
                                    <h2 className='fw-bold mt-3'>
                                        2,200
                                    </h2>
                                    <MDBRow className='mt-4'>
                                        <MDBCol size={4}>
                                            <h5>
                                                +126
                                            </h5>
                                            <p>Last Month</p>
                                        </MDBCol>
                                        <MDBCol size={4}>
                                            <h5>
                                                +120
                                            </h5>
                                            <p>This Month</p>
                                        </MDBCol>
                                    </MDBRow>
                                </div>
                            </div>
                            <div className='course__registration__card'>
                                <p className='text-mb-0'>
                                    <div className='p-3'>
                                        <p className='mb-0'>
                                            Courses
                                        </p>
                                        <h2 className='fw-bold mt-3'>
                                            386
                                        </h2>
                                        <MDBRow className='mt-4'>
                                            <MDBCol size={4}>
                                                <h5>
                                                    +126
                                                </h5>
                                                <p>Last Month</p>
                                            </MDBCol>
                                            <MDBCol size={4}>
                                                <h5>
                                                    +120
                                                </h5>
                                                <p>This Month</p>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                </p>
                            </div>
                            <div className='course__registration__card'>
                                <p className='text-mb-0'>
                                    <div className='p-3'>
                                        <p className='mb-0'>
                                            Tools
                                        </p>
                                        <h2 className='fw-bold mt-3'>
                                            137
                                        </h2>
                                        <MDBRow className='mt-4'>
                                            <MDBCol size={4}>
                                                <h5>
                                                    +126
                                                </h5>
                                                <p>Last Month</p>
                                            </MDBCol>
                                            <MDBCol size={4}>
                                                <h5>
                                                    +120
                                                </h5>
                                                <p>This Month</p>
                                            </MDBCol>
                                        </MDBRow>
                                    </div>
                                </p>
                            </div>
                        </div>

                        <div className='mt-3'>
                            <MDBBtn>
                                Register Course
                            </MDBBtn>
                        </div>

                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment >
    )
}

export default CourseRegistration