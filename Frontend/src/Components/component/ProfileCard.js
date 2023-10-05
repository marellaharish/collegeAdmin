import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit'; // Import the necessary components from your UI library

const ProfileCard = ({ avatarSrc, name, position, experience, campus }) => {
    return (
        <div className='profile__data'>
            <div>
                <img src={avatarSrc} alt={name} />
            </div>
            <div className='details__data'>
                <h5 className='fw-bold'>{name}</h5>
                <p>{position}</p>
                <p className='fw-bold'>EXPERIENCE</p>
                <p>{experience} years of experience</p>
                <p className='fw-bold'>CAMPUS</p>
                <p>{campus}</p>
            </div>
            <Link to="/FacultyViewProfile">
                <MDBBtn outline rounded>
                    View Profile
                </MDBBtn>
            </Link>
        </div>
    );
};

export default ProfileCard;
