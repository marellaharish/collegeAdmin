import React from 'react'
import NavLinks from '../../Components/NavLinks/NavLinks'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';
import Captche from '../../Components/Assets/capcha.jpeg';
import {
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBBtn,
  MDBCol,
  MDBRadio,
  MDBRow,
} from "mdb-react-ui-kit";

import {
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';
function ResultsManagement() {
  return (
    <React.Fragment>
      <>
        <NavLinks />
        <div className="main__bodySub">
          <MDBContainer fluid>
            <div className="College__Admissions">
              <div className="Admissions__head">
                <h1>Results Management</h1>
                <div>
                  <MDBBreadcrumb>
                    <MDBBreadcrumbItem>
                      <a href="#">Home</a>
                    </MDBBreadcrumbItem>
                    <MDBBreadcrumbItem>
                      <a href="#">Results Management</a>
                    </MDBBreadcrumbItem>
                  </MDBBreadcrumb>
                </div>
              </div>
            </div>
          </MDBContainer>
          <div className='w-100 Examination__Results'>
            <h1 className='text-center'>Examination Results</h1>
          </div>
          <MDBContainer className='mb-5'>
            <MDBRow>
              <MDBCol >
                <div className='results__data mt-5'>
                  <h6>DISCLAIMER:</h6>
                  <ul>
                    <li>The result is for indicative purpose only</li>
                    <li>The results published on website are for immediate information to the examinees.</li>
                    <li>For actual result, the examinees may contact concerned department / college / institution.</li>

                  </ul>
                </div>
              </MDBCol>
              <MDBCol>
                <div className='results__form mt-4'>
                  <div className='results__form__head'>
                    <h5 className='mb-0 p-3'>Enter the below details to view the results</h5>
                  </div>
                  <div className='mt-3'>
                    <div className='d-flex justify-content-between align-items-center mb-3 mx-5'>
                      <label>Register Number: </label>
                      <input className='form-control w-60' type='text' placeholder="Register Number" />
                    </div>
                    <div className='d-flex justify-content-between align-items-center mb-3 mx-5'>
                      <label>Date of Birth:
                        <br />
                        <span className='dob__text'>(as in the Hall Ticket ; DD/Month/YYYY)</span>
                      </label>
                      <input className='form-control w-15' type='text' placeholder="DD" />
                      <label>/</label>
                      <input className='form-control w-15' type='text' placeholder="MM" />
                      <label>/</label>
                      <input className='form-control w-15' type='text' placeholder="YYYY" />
                    </div>

                    <div className='d-flex justify-content-between align-items-center mb-3 mx-5'>
                      <label>
                        Verification code in the right:
                      </label>
                      <input className='form-control w-30' type='text' placeholder="Captche" />
                      <img src={Captche} className='Captche__img' />
                    </div>
                  </div>
                  <div className='text-center mb-3'>
                    <MDBBtn className="w-30">
                      Submit
                    </MDBBtn>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>

            <div className='bg-secondary shadow-1-strong text-white mt-3'>
              <div className='p-4'>
                <p>Dear Students!!</p>
                <p>In case of any queries / clarification contact office of the Controller of examination</p>
                <p>Any redistribution or reproduction of part or all of the contents in any form is prohibited</p>
              </div>
            </div>


          </MDBContainer>
          <Footer />
        </div>
      </>
    </React.Fragment >
  )
}

export default ResultsManagement