import React, { useState } from 'react';
import { MDBAutocomplete } from 'mdb-react-ui-kit';
import NavLinks from '../../Components/NavLinks/NavLinks'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';
import Select from 'react-select'
import Avatar from '../../Components/Assets/Avatars/Avatar Image.png';
import ApexCharts from 'apexcharts'
import RadialBarChart from "../../Components/component/RadialBarChart"
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBCol,
    MDBRadio,
    MDBRow,
} from "mdb-react-ui-kit";

import {
    MDBInputGroup,
    MDBIcon
} from 'mdb-react-ui-kit';
function AttendanceTracking() {

    const options = [
        { value: '18541A0..', label: '18541A0..' },
        { value: '18541A0..', label: '18541A0..' },
        { value: '18541A0..', label: '18541A0..' },
        { value: '18541A0..', label: '18541A0..' },
        { value: '18541A0..', label: '18541A0..' },
        { value: '18541A0..', label: '18541A0..' },
        { value: '18541A0..', label: '18541A0..' },
        { value: '18541A0..', label: '18541A0..' }
    ]


    const options2 = [
        { value: '1st Year', label: '1st Year' },
        { value: '2nd Year', label: '2nd Year' },
        { value: ' Year', label: ' Year' },
        { value: ' Year', label: ' Year' },
        { value: ' Year', label: ' Year' },
        { value: ' Year', label: ' Year' },
        { value: ' Year', label: ' Year' },
        { value: ' Year', label: ' Year' }
    ]

    const options3 = [
        { value: 'CSE', label: 'CSE' },
        { value: 'ECE', label: 'ECE' },
        { value: 'IT', label: 'IT' },
        { value: 'EEE', label: 'EEE' },
        { value: 'Mech', label: 'Mech' },
        { value: 'AI&DS', label: 'AI&DS' },
        { value: 'AI&ML', label: 'AI&ML' },
        { value: 'Civil', label: 'Civil' }
    ]


    return (
        <React.Fragment>
            <>
                <NavLinks />
                <div className="main__bodySub">
                    <MDBContainer fluid>
                        <div className="College__Admissions">
                            <div className="Admissions__head">
                                <h1>Attendance Tracking</h1>
                                <div>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Home</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">AttendanceTracking</a>
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>
                    <div className='w-100 Examination__Results mt-3'>
                        <h3 className='text-center fw-bold'>Student Attendance Tracking</h3>
                    </div>
                    <MDBContainer className='mb-5'>
                        <div className='d-flex justify-content-evenly'>
                            <Select placeholder="Enter Register Rumber" className='w-20' options={options} />
                            <Select placeholder="Select Year" className='w-20' options={options2} />
                            <Select placeholder="Select Branch" className='w-20' options={options3} />
                        </div>

                        <div className='mt-4'>
                            <h4>TimeSheets - August 2023</h4>

                            <MDBRow>
                                <MDBCol size={3}>
                                    <div className='mt-4 d-flex align-itens-center justify-content-evenly student__profile'>
                                        <img src={Avatar} className='avatar__dp' />
                                        <div className='mt-2'>
                                            <h5 className='fw-bold'> Marella Harish</h5>
                                            <p className='mb-0 student__dept_p'>CSE Department</p>
                                            <div className='mt-1'>location:<strong>Hyderabad</strong></div>
                                        </div>
                                    </div>
                                </MDBCol>
                                <MDBCol>
                                    <RadialBarChart />
                                </MDBCol>
                                <MDBCol>
                                    <RadialBarChart />
                                </MDBCol>
                                <MDBCol>
                                    <div className='location__Map'>

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30450.788239145702!2d78.36022337887776!3d17.443024786601814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e0f08bfbb3%3A0x2454332c527d3f1a!2sHyderabad%2C%20Telangana%20500081!5e0!3m2!1sen!2sin!4v1691836638818!5m2!1sen!2sin" width="300" height="200" allowfullscreen="" loading="lazy" ></iframe>
                                    </div>

                                </MDBCol>
                            </MDBRow>
                        </div>
                        <div className='mt-4'>
                            <MDBTable align='middle'>
                                <MDBTableHead>
                                    <tr>
                                        <th scope='col'>Name</th>
                                        <th scope='col'>Date</th>
                                        <th scope='col'>Status</th>
                                        <th scope='col'>Absent</th>
                                        <th scope='col'>Location</th>
                                    </tr>
                                </MDBTableHead>
                                <MDBTableBody>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>John Doe</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Software engineer</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='success' pill>
                                                Active
                                            </MDBBadge>
                                        </td>
                                        <td>-</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Hyderabad,
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>John Doe</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Software engineer</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='success' pill>
                                                Active
                                            </MDBBadge>
                                        </td>
                                        <td>-</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Hyderabad,
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>John Doe</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Software engineer</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='success' pill>
                                                Active
                                            </MDBBadge>
                                        </td>
                                        <td>-</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Hyderabad,
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Alex Ray</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Consultant</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='warning' pill>
                                                Not In Class
                                            </MDBBadge>
                                        </td>
                                        <td>-</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Alex Ray</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Consultant</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='warning' pill>
                                                Not In Class
                                            </MDBBadge>
                                        </td>
                                        <td>-</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Alex Ray</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Consultant</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='warning' pill>
                                                Not In Class
                                            </MDBBadge>
                                        </td>
                                        <td>-</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className='d-flex align-items-center'>
                                                <img
                                                    src='https://mdbootstrap.com/img/new/avatars/7.jpg'
                                                    alt=''
                                                    style={{ width: '45px', height: '45px' }}
                                                    className='rounded-circle'
                                                />
                                                <div className='ms-3'>
                                                    <p className='fw-bold mb-1'>Kate Hunington</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className='fw-normal mb-1'>Designer</p>
                                        </td>
                                        <td>
                                            <MDBBadge color='danger' pill>
                                                Absent
                                            </MDBBadge>
                                        </td>
                                        <td>Sick</td>
                                        <td>
                                            <MDBBtn color='link' rounded size='sm'>
                                                Edit
                                            </MDBBtn>
                                        </td>
                                    </tr>
                                </MDBTableBody>
                            </MDBTable>
                        </div>
                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment >
    )
}

export default AttendanceTracking