import React, { useState } from "react";
import "../../Components/Css/Home.css";
import Marquee from "react-fast-marquee";
import {
    MDBCol,
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBRow
} from 'mdb-react-ui-kit';
import {
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBInputGroup,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';
import logo from "../../Components/Assets/logo.jpg";
import chatBot from "../../Components/Assets/chat-svgrepo-com.svg";

function NavLinks(props) {
    const [showNav, setShowNav] = useState(false);
    return (
        <React.Fragment>
            <>


                <MDBNavbar sticky expand='lg' light className="blur_bg" >
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>
                            <img
                                src={logo}
                                height='70'
                                alt=''
                                loading='lazy'
                            />
                        </MDBNavbarBrand>
                        <MDBNavbarToggler
                            type='button'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNav(!showNav)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBCollapse navbar show={showNav}>
                            <MDBNavbarNav>
                                <MDBNavbarItem>
                                    <MDBNavbarLink active aria-current='page' href='/home'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>


                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                            About Us
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>About SSIET</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Chairman</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Secretary</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Principal</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Vision & Mission</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Core Values</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Careers</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Contact Us</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBNavbarLink>
                                        Addmission
                                    </MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                            Departments
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>Department of Civil Engg.</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Department of EEE</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Department of Mech</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Department of ECE</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Department of CSE</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Dept of CSE (IoT)</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Dept of CSE (Cybersecurity)</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Dept of CSE (AI & DS)</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Dept of CSE (AI & ML)</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Department of MBA</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Freshman Engg. Dept.</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>


                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Campus Life</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                            Information
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>AICTE</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Grievance Cell</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>NIRF</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>IQAC</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Academic Calendars</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Mandatory Disclosure</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>New-Gen IEDC</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Exam Cell</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>NSS</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>


                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Placements</MDBNavbarLink>
                                </MDBNavbarItem>

                                <MDBNavbarItem>
                                    <MDBDropdown>
                                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                                            Facilities (P&D)
                                        </MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link>Library</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Campus infra Awards </MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>The Data Center</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Physical Education</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Hostels</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Transport</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Cafeteria</MDBDropdownItem>
                                            <hr className="border my-1" />
                                            <MDBDropdownItem link>Other Campus Amenities</MDBDropdownItem>
                                        </MDBDropdownMenu>
                                    </MDBDropdown>
                                </MDBNavbarItem>

                            </MDBNavbarNav>
                            <MDBInputGroup tag="form" className='d-flex w-auto  rounded-pill'>
                                <input className='form-control ' placeholder="Type To Search" aria-label="Search" type='Search' />
                                <MDBBtn outline>Search</MDBBtn>
                            </MDBInputGroup>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>

                <Marquee className="marquee" pauseOnHover speed='40'>
                    Sri Sarathi Institute Engineering of Technology.
                </Marquee>

                {/* <div className="aboutCollege">
                    <p>About Us</p>
                    <MDBRow>

                        <MDBCol>asdfghjkl</MDBCol>
                        <MDBCol>asdfghjkl</MDBCol>
                    </MDBRow>
                </div> */}


                <div className="note-main">

                </div>







            </>
        </React.Fragment>
    );
}
export default NavLinks;
