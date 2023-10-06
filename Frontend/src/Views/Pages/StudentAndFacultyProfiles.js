import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import Select from 'react-select'
import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from 'mdb-react-ui-kit';
import NavLinks from '../../Components/NavLinks/NavLinks'
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
import FacultyViewProfile from './FacultyViewProfile';
import ProfileCard from '../../Components/component/ProfileCard';

import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
} from "mdb-react-ui-kit";
import {
    MDBInputGroup,
    MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
function StudentAndFacultyProfiles() {

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





    const profileData = [
        {
            avatarSrc: Avatar,
            name: 'Harish Marella',
            position: 'Head Of The Department (CSE)',
            experience: 32.3,
            campus: 'College of Eng & Tech - Chennai',
        },
        {
            avatarSrc: Avatar2,
            name: 'Harish Marella',
            position: 'Head Of The Department (CSE)',
            experience: 32.3,
            campus: 'College of Eng & Tech - Chennai',
        },
        {
            avatarSrc: Avatar3,
            name: 'Harish Marella',
            position: 'Head Of The Department (CSE)',
            experience: 32.3,
            campus: 'College of Eng & Tech - Chennai',
        },
        {
            avatarSrc: Avatar4,
            name: 'Harish Marella',
            position: 'Head Of The Department (CSE)',
            experience: 32.3,
            campus: 'College of Eng & Tech - Chennai',
        },

        // Add more profile data objects as needed
    ];

    const [activeProfile, setActiveProfile] = useState('faculty');

    const handleProfileClick = (profileType) => {
        setActiveProfile(profileType);
    };




    return (
        <React.Fragment>
            <>
                <NavLinks />


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


                <div className="main__bodySub">

                    <MDBContainer className='mb-5 mt-3'>
                        <div className='text-center'>
                            <h2 className='fw-bold'>Select Profile To See</h2>
                            <p className='w-50 m-auto text-secondary'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga nulla quaerat, esse accusantium dignissimos praesentium voluptatum atque fugit sequi pariatur tempore animi sit? Nulla blanditiis quia tempora alias nihil.
                            </p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>

                            <div
                                className={`profiles__select ${activeProfile === 'faculty' ? 'active' : ''}`}
                                onClick={() => handleProfileClick('faculty')}
                            >
                                <MDBCard>
                                    <MDBCardBody>
                                        <img src={TeacherPerson} className='student__card__img' alt='Teacher' />
                                        <MDBCardTitle>Faculty Profiles</MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                            <div
                                className={`profiles__select ${activeProfile === 'student' ? 'active' : ''}`}
                                onClick={() => handleProfileClick('student')}
                            >
                                <MDBCard>
                                    <MDBCardBody>
                                        <img src={StudentPerson} className='student__card__img' alt='Student' />
                                        <MDBCardTitle className='mt-2'>Student Profiles</MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>
                            <div
                                className={`profiles__select ${activeProfile === 'staff' ? 'active' : ''}`}
                                onClick={() => handleProfileClick('staff')}
                            >
                                <MDBCard>
                                    <MDBCardBody>
                                        <img src={FacultyProfile} className='student__card__img' alt='Staff' />
                                        <MDBCardTitle>Staff Profiles</MDBCardTitle>
                                        <MDBCardText>
                                            Some quick example text to build on the card title and make up the bulk of the card's content.
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                            </div>

                        </div>

                    </MDBContainer>


                    {activeProfile == "faculty" &&
                        <MDBContainer>
                            <div className='text-center mb-4'>
                                <h2 className='fw-bold'>Faculty Profiles</h2>
                                <p className='w-50 m-auto text-secondary'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga nulla quaerat,
                                </p>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <Select placeholder="Search By Deptartment" className='w-20' options={options} />
                                <Select placeholder="Faculty Name" className='w-20' options={options} />
                                <MDBBtn outline className='w-20' >Search <MDBIcon fas icon="search" className='ms-3' /></MDBBtn>
                            </div>
                            <div className='d-flex align-items-center justify-content-between flex-wrap'>

                                {profileData.map((profile, index) => (
                                    <ProfileCard
                                        key={index}
                                        avatarSrc={profile.avatarSrc}
                                        name={profile.name}
                                        position={profile.position}
                                        experience={profile.experience}
                                        campus={profile.campus}
                                    />
                                ))}

                            </div>
                        </MDBContainer>}


                    {activeProfile == "student" &&
                        <MDBContainer>
                            <div className='text-center mb-4'>
                                <h2 className='fw-bold'>Students Profiles</h2>
                                <p className='w-50 m-auto text-secondary'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga nulla quaerat,
                                </p>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <Select placeholder="Search By Deptartment" className='w-20' options={options} />
                                <Select placeholder="Faculty Name" className='w-20' options={options} />
                                <MDBBtn outline className='w-20' >Search <MDBIcon fas icon="search" className='ms-3' /></MDBBtn>
                            </div>
                            <div className='d-flex align-items-center justify-content-between flex-wrap'>

                                {profileData.map((profile, index) => (
                                    <ProfileCard
                                        key={index}
                                        avatarSrc={profile.avatarSrc}
                                        name={profile.name}
                                        position={profile.position}
                                        experience={profile.experience}
                                        campus={profile.campus}
                                    />
                                ))}

                            </div>
                        </MDBContainer>}

                    {activeProfile == "staff" &&
                        <MDBContainer>
                            <div className='text-center mb-4'>
                                <h2 className='fw-bold'>Staff Profiles</h2>
                                <p className='w-50 m-auto text-secondary'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fuga nulla quaerat,
                                </p>
                            </div>
                            <div className='d-flex justify-content-evenly'>
                                <Select placeholder="Search By Deptartment" className='w-20' options={options} />
                                <Select placeholder="Faculty Name" className='w-20' options={options} />
                                <MDBBtn outline className='w-20' >Search <MDBIcon fas icon="search" className='ms-3' /></MDBBtn>
                            </div>
                            <div className='d-flex align-items-center justify-content-between flex-wrap'>

                                {profileData.map((profile, index) => (
                                    <ProfileCard
                                        key={index}
                                        avatarSrc={profile.avatarSrc}
                                        name={profile.name}
                                        position={profile.position}
                                        experience={profile.experience}
                                        campus={profile.campus}
                                    />
                                ))}

                            </div>
                        </MDBContainer>
                    }



                    <Footer />
                </div>
            </>
        </React.Fragment >
    )
}

export default StudentAndFacultyProfiles