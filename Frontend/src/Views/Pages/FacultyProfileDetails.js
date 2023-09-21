import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText
} from 'mdb-react-ui-kit';

import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';

import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';
import Avatar from '../../Components/Assets/Avatars/1.png';
import Avatar2 from '../../Components/Assets/Avatars/2.png';
import Avatar3 from '../../Components/Assets/Avatars/3.png';
import Avatar4 from '../../Components/Assets/Avatars/4.png';
import Avatar5 from '../../Components/Assets/Avatars/5.png';
import Avatar6 from '../../Components/Assets/Avatars/6.png';
import StudentPerson from '../../Components/Assets/student-person-part-2-svgrepo-com.svg';
import TeacherPerson from '../../Components/Assets/teacher-svgrepo-com.svg';
import FacultyProfile from '../../Components/Assets/id-card-svgrepo-com.svg';
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
import BG from '../../Components/Assets/back-school-education-banner-background_8087-1192.avif'
import NavLinks from '../../Components/NavLinks/NavLinks'

function FacultyProfileDetails() {
    return (
        <React.Fragment>
            <>

                <NavLinks />

                <MDBContainer fluid>
                    <div>
                        <img src={BG} className='faculty__bg' />
                    </div>
                </MDBContainer>
                <MDBContainer>
                    <div className='bg__overlay'>
                        <img src={Avatar} className='faculty__image' />
                    </div>
                </MDBContainer>
            </>
        </React.Fragment>
    )
}

export default FacultyProfileDetails