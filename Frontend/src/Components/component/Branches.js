import React from 'react';
import {
    MDBCol,
    MDBRow,
} from "mdb-react-ui-kit";
import calender from "../Assets/event-calender-date-note-svgrepo-com.svg";
import People from "../Assets/users-group-two-rounded-svgrepo-com.svg";
import Money from "../Assets/money-bag-svgrepo-com.svg";
import Alarm from "../Assets/alarm-clock-svgrepo-com.svg";



const Branches = ({ name, degree, duration, intake, semesters, fee, imgSrc }) => {
    return (
        <div className="branches">
            <MDBRow className="d-flex align-items-center">
                <MDBCol size={4} className="d-flex align-items-center ">
                    <img src={imgSrc} className="branches__img" alt={name} />
                </MDBCol>
                <MDBCol size={8} className="d-flex   flex-column mt-2">
                    <h6 className="text-left">{name}</h6>
                    <p>{degree}</p>
                </MDBCol>
                <MDBCol size={6} className="d-flex align-items-center">
                    <div className="d-flex align-items-center text-left ms-2">
                        <img src={calender} className="calender__img" alt="Calendar" />
                        <p className="mb-0 ms-3">Duration - {duration}</p>
                    </div>
                </MDBCol>
                <MDBCol size={6}>
                    <div className="d-flex align-items-center text-left">
                        <img src={People} className="calender__img" alt="People" />
                        <p className="mb-0 ms-3">Intake - {intake}</p>
                    </div>
                </MDBCol>
                <MDBCol size={6} className="mt-3">
                    <div className="d-flex align-items-center text-left ms-2">
                        <img src={Alarm} className="calender__img" alt="Alarm" />
                        <p className="mb-0 ms-3">Semesters - {semesters}</p>
                    </div>
                </MDBCol>
                <MDBCol size={6} className="mt-3">
                    <div className="d-flex align-items-center text-left">
                        <img src={Money} className="calender__img" alt="Money" />
                        <p className="mb-0 ms-3">Fee - ₹ {fee}</p>
                    </div>
                </MDBCol>
            </MDBRow>
        </div>
    );
};

export default Branches;
