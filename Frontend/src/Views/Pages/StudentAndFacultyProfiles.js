import React, { useState } from 'react';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import NavLinks from '../../Components/NavLinks/NavLinks'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';
import Avatar from '../../Components/Assets/Avatars/Avatar Image.png';
import { MDBBadge, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
} from "mdb-react-ui-kit";
import {
    MDBInputGroup,
    MDBIcon
} from 'mdb-react-ui-kit';
function StudentAndFacultyProfiles() {
    const [verticalActive, setVerticalActive] = useState('tab1');

    const handleVerticalClick = (value: string) => {
        if (value === verticalActive) {
            return;
        }

        setVerticalActive(value);
    };
    const [verticalActive2, setVerticalActive2] = useState('tab3');

    const handleVerticalClick2 = (value: string) => {
        if (value === verticalActive2) {
            return;
        }

        setVerticalActive2(value);
    };

    const [customActive, setCustomActive] = useState('tab1');

    const handleCustomClick = (value: string) => {
        if (value === customActive) {
            return;
        }

        setCustomActive(value);
    };


    return (
        <React.Fragment>
            <>
                <NavLinks />






                <div className="main__bodySub">
                    <MDBContainer fluid>
                        <div className="College__Admissions">
                            <div className="Admissions__head">
                                <h1>Student and Faculty Profiles</h1>
                                <div>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Home</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Student and Faculty Profiles</a>
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>















                    <MDBContainer fluid className='mb-5 bg-white mt-3'>



                        <MDBTabs className='mb-3'>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleCustomClick('tab1')} active={customActive === 'tab1'}>
                                    First Tab
                                </MDBTabsLink>
                            </MDBTabsItem>
                            <MDBTabsItem>
                                <MDBTabsLink onClick={() => handleCustomClick('tab2')} active={customActive === 'tab2'}>
                                    Second Tab
                                </MDBTabsLink>
                            </MDBTabsItem>
                        </MDBTabs>

                        <MDBTabsContent>

                            <MDBTabsPane show={customActive === 'tab1'}>
                                <div className='w-100 Examination__Results my-4'>
                                    <h3 className='text-center fw-bold'>Faculty Profiles</h3>
                                </div>
                                <MDBRow>
                                    <MDBCol size='2'>
                                        <MDBTabs className='flex-column text-center'>
                                            <MDBTabsItem>
                                                <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'}>
                                                    Faculty List
                                                </MDBTabsLink>
                                            </MDBTabsItem>
                                            <MDBTabsItem>
                                                <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'}>
                                                    Faculty Profile
                                                </MDBTabsLink>
                                            </MDBTabsItem>

                                        </MDBTabs>
                                    </MDBCol>
                                    <MDBCol size='10'>
                                        <MDBTabsContent>
                                            <MDBTabsPane show={verticalActive === 'tab1'}>
                                                <MDBTable align='middle' hover>
                                                    <MDBTableHead>
                                                        <tr>
                                                            <th scope='col'>Name</th>
                                                            <th scope='col'>Qualification</th>
                                                            <th scope='col'>Status</th>
                                                            <th scope='col'>Designation</th>
                                                            <th scope='col'>Department</th>
                                                        </tr>
                                                    </MDBTableHead>
                                                    <MDBTableBody>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                                        alt=''
                                                                        style={{ width: '50px', height: '50px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Dr. Vatsala G</p>
                                                                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>	PhD</p>
                                                                <p className='text-muted mb-0'>IT department</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='success' pill>
                                                                    Active
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Principal</td>
                                                            <td>-</td>
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
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/1.jpg'
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/10.jpg'
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/12.jpg'
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>

                                                    </MDBTableBody>
                                                </MDBTable>
                                            </MDBTabsPane>
                                            <MDBTabsPane show={verticalActive === 'tab2'}>
                                                <div className='Faculty__Profiles'>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </MDBTabsPane>
                                        </MDBTabsContent>
                                    </MDBCol>
                                </MDBRow>
                            </MDBTabsPane>







                            <MDBTabsPane show={customActive === 'tab2'}>
                                <div className='w-100 Examination__Results my-4'>
                                    <h3 className='text-center fw-bold'>Students Profiles</h3>
                                </div>



                                <MDBRow>
                                    <MDBCol size='2'>
                                        <MDBTabs className='flex-column text-center'>
                                            <MDBTabsItem>
                                                <MDBTabsLink onClick={() => handleVerticalClick2('tab3')} active={verticalActive2 === 'tab3'}>
                                                    Student List
                                                </MDBTabsLink>
                                            </MDBTabsItem>
                                            <MDBTabsItem>
                                                <MDBTabsLink onClick={() => handleVerticalClick2('tab4')} active={verticalActive2 === 'tab4'}>
                                                    Students Profile
                                                </MDBTabsLink>
                                            </MDBTabsItem>

                                        </MDBTabs>
                                    </MDBCol>
                                    <MDBCol size='10'>
                                        <MDBTabsContent>
                                            <MDBTabsPane show={verticalActive2 === 'tab3'}>
                                                <MDBTable align='middle' hover>
                                                    <MDBTableHead>
                                                        <tr>
                                                            <th scope='col'>Name</th>
                                                            <th scope='col'>Qualification</th>
                                                            <th scope='col'>Status</th>
                                                            <th scope='col'>Designation</th>
                                                            <th scope='col'>Department</th>
                                                        </tr>
                                                    </MDBTableHead>
                                                    <MDBTableBody>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                                        alt=''
                                                                        style={{ width: '50px', height: '50px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Dr. Vatsala G</p>
                                                                        <p className='text-muted mb-0'>john.doe@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>	PhD</p>
                                                                <p className='text-muted mb-0'>IT department</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='success' pill>
                                                                    Active
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Principal</td>
                                                            <td>-</td>
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
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/2.jpg'
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/1.jpg'
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/10.jpg'
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className='d-flex align-items-center'>
                                                                    <img
                                                                        src='https://mdbootstrap.com/img/new/avatars/12.jpg'
                                                                        alt=''
                                                                        style={{ width: '45px', height: '45px' }}
                                                                        className='rounded-circle'
                                                                    />
                                                                    <div className='ms-3'>
                                                                        <p className='fw-bold mb-1'>Prof. B S Jayarama</p>
                                                                        <p className='text-muted mb-0'>alex.ray@gmail.com</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <p className='fw-normal mb-1'>MCom, MBA, MPhil</p>
                                                                <p className='text-muted mb-0'>Finance</p>
                                                            </td>
                                                            <td>
                                                                <MDBBadge color='primary' pill>
                                                                    Onboarding
                                                                </MDBBadge>
                                                            </td>
                                                            <td>Professor & Head, Vice Principal</td>
                                                            <td>
                                                                Commerce
                                                            </td>
                                                        </tr>

                                                    </MDBTableBody>
                                                </MDBTable>
                                            </MDBTabsPane>
                                            <MDBTabsPane show={verticalActive2 === 'tab4'}>
                                                <div className='Faculty__Profiles'>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className='profiles'>
                                                        <img src={Avatar} className='me-3' />
                                                        <div className='me-2'>
                                                            <span>Marella Harish</span>
                                                            <p className='mb-0'>CSE HOD</p>
                                                            <p>
                                                                Qualification: MTech With Docratic
                                                            </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </MDBTabsPane>
                                        </MDBTabsContent>
                                    </MDBCol>
                                </MDBRow></MDBTabsPane>
                        </MDBTabsContent>




                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment >
    )
}

export default StudentAndFacultyProfiles