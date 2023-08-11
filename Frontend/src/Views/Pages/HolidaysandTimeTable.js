
import React from 'react';
import { MDBTable, MDBTableHead, MDBTableBody, MDBCol } from 'mdb-react-ui-kit';
import NavLinks from '../../Components/NavLinks/NavLinks'
import { MDBContainer, MDBBreadcrumb, MDBBreadcrumbItem, MDBRow, } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';

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
                                <div className="holidays__table">
                                    <MDBTable className="data__holiday">
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
                                    <div className="w-100 ms-4">
                                        <div className="w-100 timeTanle__branch">  CSE Time Table</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
                                        <div className="w-100 timeTanle__branch">  Sick Hover</div>
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