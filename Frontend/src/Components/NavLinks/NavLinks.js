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


                <MDBNavbar sticky expand='lg' light bgColor='light' >
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
                                    <MDBNavbarLink active aria-current='page' href='#'>
                                        Home
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink>
                                        About College
                                    </MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Addmission</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Academics</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Colleges</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Research</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Placements</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>R&D</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Faculties</MDBNavbarLink>
                                </MDBNavbarItem>
                                <MDBNavbarItem>
                                    <MDBNavbarLink href='#'>Get An Addmission</MDBNavbarLink>
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
