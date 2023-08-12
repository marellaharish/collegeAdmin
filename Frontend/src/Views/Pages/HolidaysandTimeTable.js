
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCol } from 'mdb-react-ui-kit';
import NavLinks from '../../Components/NavLinks/NavLinks'
import { MDBContainer, MDBBreadcrumb, MDBBreadcrumbItem, MDBRow, MDBIcon, MDBBtn } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';
import PdfLogo from '../../Components/Assets/pdf-svgrepo-com.svg';
import linkIcon from '../../Components/Assets/arrow-right-1-svgrepo-com.svg';


function HolidaysandTimeTable() {


    return (
        <React.Fragment>
            <>
                <NavLinks />
                <div className="main__bodySub">
                    <MDBContainer fluid>
                        <div className="College__Admissions">
                            <div className="Admissions__head">
                                <h1>Holidays and Time Table</h1>
                                <div>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Home</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">HolidaysandTimeTable</a>
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>
                    <MDBContainer className='mb-5'>
                        <MDBRow>
                            <MDBCol size={9}>
                                <div className='mt-3 Academic__Calendar'>
                                    <div className="d-flex  justify-content-center flex-column">
                                        <h2>University Academic Calendars</h2>
                                        <div className='Academic__Calendar__list'>
                                            <span className='mb-0 p-3'><img src={PdfLogo} className="pfg__logo " />Academic Calendar 2022-2023</span>
                                        </div>
                                        <div className='Academic__Calendar__list'>
                                            <span className='mb-0 p-3'><img src={PdfLogo} className="pfg__logo " />Academic Calendar 2021-2022</span>
                                        </div>
                                        <div className='Academic__Calendar__list'>
                                            <span className='mb-0 p-3'><img src={PdfLogo} className="pfg__logo " />Academic Calendar 2020-2021</span>
                                        </div>
                                        <div className='Academic__Calendar__list'>
                                            <span className='mb-0 p-3'><img src={PdfLogo} className="pfg__logo " />Academic Calendar 2019-2020</span>
                                        </div>
                                        <div className='Academic__Calendar__list'>
                                            <span className='mb-0 p-3'><img src={PdfLogo} className="pfg__logo " />Academic Calendar 2018-2019</span>
                                        </div>
                                        <div className='Academic__Calendar__list'>
                                            <span className='mb-0 p-3'><img src={PdfLogo} className="pfg__logo " />Academic Calendar 2017-2018</span>
                                        </div>
                                    </div>
                                </div>
                            </MDBCol>
                            <MDBCol className='mt-4'>
                                <h5 className='fw-bold'>University Academic Calendars</h5>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> Anti-Ragging </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> AICTE </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> IQAC </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> NSS </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> NIRF </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> Academic Calendars </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> Mandatory Disclouser </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> Code Of Ethics </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> RTI-ACT </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> Transport </span>
                                </div>
                                <div className='Academic__info__list'>
                                    <span className='mb-0 ps-3 my-1'> <img src={linkIcon} className='link__logo' /> Library </span>
                                </div>
                                <MDBBtn className="me-3 Instruction__btn ">
                                    Admissions Open 2023 - 24
                                </MDBBtn>
                            </MDBCol>
                        </MDBRow>







                        <MDBRow>
                            <h2 className='fw-bold'>University Academic Calendars</h2>
                            <MDBCol size={9}>
                                <div className="holidays__table">
                                    <MDBTable hover bordered className="data__holiday">
                                        <MDBTableHead>
                                            <tr>
                                                <th scope='col'>Sl. No.</th>
                                                <th scope='col'>Holiday</th>
                                                <th scope='col'>Month & Date</th>
                                                <th scope='col'>Days of the Week</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td scope='row'>1</td>
                                                <td>Jan 01</td>
                                                <td>New Year Day</td>
                                                <td>Sunday</td>
                                            </tr>
                                            <tr>
                                                <td scope='row'>2</td>
                                                <td>Jan 14</td>
                                                <td>Bhogi</td>
                                                <td>saturday</td>
                                            </tr>
                                            <tr>
                                                <td scope='row'>3</td>
                                                <td>Jan 15</td>
                                                <td>Sankranti/Pongal</td>
                                                <td>Sunday</td>
                                            </tr>
                                            <tr>
                                                <td scope='row'>4</td>
                                                <td>Jan 16</td>
                                                <td>Kanumu</td>
                                                <td>Monday</td>
                                            </tr>
                                            <tr>
                                                <td scope='row'>5</td>
                                                <td>Jan 26</td>
                                                <td>Republic Day</td>
                                                <td>Thursday</td>
                                            </tr>
                                            {/* <tr>
                                        <td scope='row'>6</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>7</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>8</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>9</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td scope='row'>10</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr> */}

                                        </MDBTableBody>
                                    </MDBTable>
                                </div>
                            </MDBCol>
                            <MDBCol>
                                <div className="mt-4 link__bgColor">
                                    <h4>Time Tables</h4>
                                    <div className="w-100 ms-3">
                                        <div className="w-100 timeTanle__branch"><MDBIcon fas icon="angle-right" className='ps-2' /> CSE Time Table</div>
                                        <div className="w-100 timeTanle__branch"><MDBIcon fas icon="angle-right" className='ps-2' /> IT Time Table</div>
                                        <div className="w-100 timeTanle__branch"><MDBIcon fas icon="angle-right" className='ps-2' /> ECE Time Table</div>
                                        <div className="w-100 timeTanle__branch"><MDBIcon fas icon="angle-right" className='ps-2' /> EEE Time Table</div>
                                        <div className="w-100 timeTanle__branch"><MDBIcon fas icon="angle-right" className='ps-2' /> MECH Time Table</div>
                                        <div className="w-100 timeTanle__branch"><MDBIcon fas icon="angle-right" className='ps-2' /> CIVIL Time Table</div>
                                        <div className="w-100 timeTanle__branch"><MDBIcon fas icon="angle-right" className='ps-2' /> AI&ML Time Table</div>
                                        <div className="w-100 timeTanle__branch"><MDBIcon fas icon="angle-right" className='ps-2' /> AI&DS Time Table</div>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment >
    )
}

export default HolidaysandTimeTable