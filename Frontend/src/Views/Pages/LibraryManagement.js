import React from 'react'
import NavLinks from '../../Components/NavLinks/NavLinks'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';
import { MDBSelect } from 'mdb-react-ui-kit';
import search_icon from '../../Components/Assets/search-svgrepo-com.svg';
import card1 from '../../Components/Assets/card1.svg';
import card2 from '../../Components/Assets/card2.svg';
import card3 from '../../Components/Assets/card3.svg';
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

import { MDBBadge } from 'mdb-react-ui-kit';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
    MDBCol,
    MDBRadio,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBRow,
} from "mdb-react-ui-kit";

import {
    MDBInputGroup,
    MDBIcon
} from 'mdb-react-ui-kit';

function LibraryManagement() {
    return (
        <React.Fragment>
            <>
                <NavLinks />
                <div className="main__bodySub">
                    <MDBContainer fluid>
                        <div className="College__Admissions">
                            <div className="Admissions__head">
                                <h1>Library Management</h1>
                                <div>
                                    <MDBBreadcrumb>
                                        <MDBBreadcrumbItem>
                                            <a href="#">Home</a>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem>
                                            <a href="#">LibraryManagement</a>
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </div>
                            </div>
                        </div>
                    </MDBContainer>
                    {/* <div className='w-100 Examination__Results mt-3'>
                        <h3 className='text-center fw-bold'>LibraryManagement</h3>
                    </div> */}
                    <MDBContainer className='mb-5 mt-3 bg-white'>
                        <div className='w-30'>

                            <p className='m-0'>
                                Quick Search
                            </p>
                            <div className='quick__search '>
                                <input className='form-control' placeholder="Search" size='sm' type='text' />
                                <img src={search_icon} className='search_icon' />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <h4 className='fw-bold'>About Library</h4>

                            <MDBAccordion flush initialActive={1}>
                                <MDBAccordionItem collapseId={1} headerTitle='FLOOR  PLAN'>
                                    The Central Library is functioning with 6 bays (viz., School of Computing, School of  Electrical & Communications, School of Mechanical & Constructions, School of Science & Humanities, School of Management Studies and  School of Law /  Multimedia) is located in Room No. 2130, 2230, 2330, 2430, 8300 and 36002.
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={2} headerTitle='MEMBERSHIP'>
                                    The Central Library is following Open Access System.  All the Students, Faculty Members, Research Scholars and Non-teaching staff are privileged to borrow books from the Central Library.  The borrowing privileges are as follows:

                                    <MDBTable striped bordered className='mt-3'>
                                        <MDBTableHead>
                                            <tr>
                                                <th scope='col'>SL. NO.</th>
                                                <th scope='col'>MEMBER DETAILS</th>
                                                <th scope='col'>NO. OF BOOKS</th>
                                                <th scope='col'>PERIOD</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>UG STUDENTS</td>
                                                <td>6</td>
                                                <td>14 DAYS</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>PG STUDENTS</td>
                                                <td>6</td>
                                                <td>28 DAYS</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>RESEARCH SCHOLARS</td>
                                                <td>6</td>
                                                <td>42 DAYS</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>TEACHING STAFF</td>
                                                <td>6</td>
                                                <td>42 DAYS</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>NON-TEACHING STAFF</td>
                                                <td>5</td>
                                                <td>28 DAYS</td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={3} headerTitle='WORKING HOURS'>
                                    <p>
                                        The Central Library is kept open throughout the year except Public Holidays.  The working hours of the Central Library is as follows:
                                    </p>
                                    <div className='d-flex align-items-center justify-content-between w-40'>
                                        <p>ALL WORKING DAYS</p>
                                        <p> 7.30 a.m. – 8.00 p.m.</p>
                                    </div>
                                    <div className='d-flex align-items-center justify-content-between w-40'>
                                        <p>3rd SATURDAYS  &  ALL SUNDAYS  </p>
                                        <p>9.00 a.m. – 4.00 p.m.</p>
                                    </div>
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={4} headerTitle='RULES & REGULATIONS'>
                                    <ul>
                                        <li>
                                            Members are requested to keep their belongings / bags (other than valuables) at the shelves provided.
                                        </li>
                                        <li>
                                            Register your Gate Entry in the Computer System kept near the entrance of the Library.
                                        </li>
                                        <li>
                                            Members are asked to maintain silence in the Library.
                                        </li>
                                        <li>
                                            Do not use mobile phone to speak inside the Library.
                                        </li>
                                        <li>
                                            Avoid mutilation, scribbling, marking or cause damage on any resources of the library. If found, members should to pay the penalty and further disciplinary action will be initiated against them by the Institution.
                                        </li>
                                        <li>
                                            Members shall not bring personal belongings and borrowed books to the reading area and stack area.
                                        </li>
                                        <li>
                                            Books will be issued only on valid ID card.
                                        </li>
                                        <li>
                                            Books borrowed must be returned or renewed on or before the due date.

                                        </li>
                                        <li>
                                            Upon renewals, books must be physically presented, if there are no reservations.
                                        </li>
                                        <li>
                                            Members are requested to verify the physical condition of the books before borrowing.
                                        </li>
                                        <li>
                                            Overdue charges will be collected for the late return of books as per rules in force.
                                        </li>
                                    </ul>
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={5} headerTitle='LIBRARY COMMITTEE'>
                                    <MDBTable striped bordered className='mt-3'>
                                        <MDBTableHead>
                                            <tr>
                                                <th scope='col' className='w-15'>SL. NO.</th>
                                                <th scope='col'>Name and Designation</th>
                                                <th scope='col' className='w-15'>Constitution</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>Prof. Dr. S. Salivahanan, Vice Chancellor</td>
                                                <td>Chairman</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Prof. Dr. E. Kannan, Registrar</td>
                                                <td>Member</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Prof. Dr. M. J. Carmel Mary Belinda, Dean i/c – Academics</td>
                                                <td>Member</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Prof. Dr. M. Sivakumar, Dean, Freshman Engineering</td>
                                                <td>Member</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Prof. Dr. V. Jayashankar, Dean, SoEC</td>
                                                <td>External Member</td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBAccordionItem>
                                <MDBAccordionItem collapseId={6} headerTitle='FACULTY & STAFF'>
                                    <MDBTable striped bordered className='mt-3'>
                                        <MDBTableHead>
                                            <tr>
                                                <th scope='col' className='w-15'>SL. NO.</th>
                                                <th scope='col'>Name and Designation</th>
                                                <th scope='col' className='w-15'>Constitution</th>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>
                                                <td>1</td>
                                                <td>Prof. Dr. S. Salivahanan, Vice Chancellor</td>
                                                <td>Chairman</td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>Prof. Dr. E. Kannan, Registrar</td>
                                                <td>Member</td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>Prof. Dr. M. J. Carmel Mary Belinda, Dean i/c – Academics</td>
                                                <td>Member</td>
                                            </tr>
                                            <tr>
                                                <td>4</td>
                                                <td>Prof. Dr. M. Sivakumar, Dean, Freshman Engineering</td>
                                                <td>Member</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>Prof. Dr. V. Jayashankar, Dean, SoEC</td>
                                                <td>External Member</td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                </MDBAccordionItem>
                            </MDBAccordion>
                        </div>
                        <div className='mt-4'>
                            <h4 className='fw-bold'>About Library</h4>
                            {/* <MDBTable bordered striped>

                                <MDBTableBody>
                                    <tr className=''>
                                        <td rowSpan={5} className='w-40'>
                                            1. BOOKS
                                        </td>
                                        <td>Mark</td>
                                        <td className='w-10'>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>Mark</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>@twitter</td>
                                        <td>@twitter</td>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Mark</td>
                                    </tr>
                                    <tr>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>@fat</td>
                                    </tr>

                                </MDBTableBody>
                            </MDBTable> */}

                            <div className='library__card__main'>
                                <div className='library__card'>
                                    <h2 className='fw-bold mt-3 ms-3 '> 1223</h2>
                                    <img src={card1} className='card__icon' />
                                    <p className='mt-4 ms-4' >Total Visitors</p>

                                </div>
                                <div className='library__card'>
                                    <h2 className='fw-bold mt-3 ms-3 '> 740</h2>
                                    <img src={card2} className='card__icon' />
                                    <p className='mt-4 ms-4' >Borrowed Books</p>

                                </div>
                                <div className='library__card'>
                                    <h2 className='fw-bold mt-3 ms-3 '> 22</h2>
                                    <img src={card3} className='card__icon' />
                                    <p className='mt-4 ms-4' >OverDue Books</p>
                                </div>
                                <div className='library__card'>
                                    <h2 className='fw-bold mt-3 ms-3 '> 1223</h2>
                                    <img src={card1} className='card__icon' />
                                    <p className='mt-4 ms-4' > New Members</p>
                                </div>
                            </div>
                            <div className='library__card__main'>
                                <div className='lib__inner__details'>
                                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                                        <h4 className='fw-bold'>Users List</h4>
                                        <MDBBtn size='sm' outline>Primary</MDBBtn>
                                    </div>

                                    <MDBTable align='middle' hover className='mt-2 mb-0 ms-2 me-2'>
                                        <MDBTableHead>
                                            <tr>
                                                <td scope='col'>User ID</td>
                                                <td scope='col'>User Name</td>
                                                <td scope='col'>Books Issued</td>
                                                <td scope='col'>Department</td>
                                                <td scope='col'>Actions</td>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>10021</p>
                                                </td>
                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                                                            alt=''
                                                            style={{ width: '35px', height: '35px' }}
                                                            className='rounded-circle'
                                                        />
                                                        <div className='ms-2'>
                                                            <p className='mb-0'>John Doe</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>12</p>
                                                </td>

                                                <td>CSE</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>12034</p>
                                                </td>                                                <td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src='https://mdbootstrap.com/img/new/avatars/6.jpg'
                                                            alt=''
                                                            style={{ width: '35px', height: '35px' }}
                                                            className='rounded-circle'
                                                        />
                                                        <div className='ms-2'>
                                                            <p className='mb-0'>Alex Ray</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>06</p>
                                                </td>

                                                <td>ECE</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>10258</p>
                                                </td> <td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src='https://mdbootstrap.com/img/new/avatars/15.jpg'
                                                            alt=''
                                                            style={{ width: '35px', height: '35px' }}
                                                            className='rounded-circle'
                                                        />
                                                        <div className='ms-2'>
                                                            <p className='mb-0'>Kate </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>17</p>
                                                </td>

                                                <td>Mechanical</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>12036</p>
                                                </td> <td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src='https://mdbootstrap.com/img/new/avatars/9.jpg'
                                                            alt=''
                                                            style={{ width: '35px', height: '35px' }}
                                                            className='rounded-circle'
                                                        />
                                                        <div className='ms-2'>
                                                            <p className='mb-0'>Kate </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>25</p>
                                                </td>

                                                <td>AI & DS</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>10057</p>
                                                </td><td>
                                                    <div className='d-flex align-items-center'>
                                                        <img
                                                            src='https://mdbootstrap.com/img/new/avatars/5.jpg'
                                                            alt=''
                                                            style={{ width: '35px', height: '35px' }}
                                                            className='rounded-circle'
                                                        />
                                                        <div className='ms-2'>
                                                            <p className='mb-0'>Kate </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>03</p>
                                                </td>

                                                <td>IT</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                    <a className='m-0 me-4 py-2 float-end'>
                                        See All
                                    </a>
                                </div>


                                <div className='lib__inner__details '>
                                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>
                                        <h4 className='fw-bold'>Books List</h4>
                                        <MDBBtn size='sm' outline>Primary</MDBBtn>

                                    </div>

                                    <MDBTable align='middle' hover className='mt-2 mb-0 ms-2 me-2'>
                                        <MDBTableHead>
                                            <tr>
                                                <td scope='col'>Book ID</td>
                                                <td scope='col'>Title</td>
                                                <td scope='col'>Author</td>
                                                <td scope='col'>Avaliable</td>
                                                <td scope='col'>Actions</td>
                                            </tr>
                                        </MDBTableHead>
                                        <MDBTableBody>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>#b-10021-30</p>
                                                </td>
                                                <td>
                                                    <p className='mb-0'>Ancestor Trouble</p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>12</p>
                                                </td>

                                                <td>CSE</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>#b-12034-31</p>
                                                </td>
                                                <td>
                                                    <p className='mb-0'>Life Is Everywhere</p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>06</p>
                                                </td>

                                                <td>ECE</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>#b-10258-31</p>
                                                </td> <td>
                                                    <p className='mb-0'>Stroller </p>
                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>17</p>
                                                </td>

                                                <td>Mechanical</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>#b-12036-30</p>
                                                </td> <td>
                                                    <p className='mb-0'>The Secret Syllabus </p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>25</p>
                                                </td>

                                                <td>AI & DS</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                            <tr>

                                                <td>
                                                    <p className='fw-normal mb-1'>#b-10057-30</p>
                                                </td><td>
                                                    <p className='mb-0'>The Secret </p>

                                                </td>
                                                <td>
                                                    <p className='fw-normal mb-1'>03</p>
                                                </td>

                                                <td>IT</td>
                                                <td> <p className='fw-bold'> ... </p> </td>
                                            </tr>
                                        </MDBTableBody>
                                    </MDBTable>
                                    <a className='m-0 me-4 py-2 float-end'>
                                        See All
                                    </a>
                                </div>
                                <div className='lib__book__details '>
                                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>


                                    </div>
                                </div>
                                <div className='lib__book__details '>
                                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>


                                    </div>
                                </div>
                                <div className='lib__book__details '>
                                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>


                                    </div>
                                </div>
                                <div className='lib__book__details '>
                                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>


                                    </div>
                                </div>
                                <div className='lib__book__details '>
                                    <div className='d-flex justify-content-between align-items-center mx-3 mt-3'>


                                    </div>
                                </div>
                            </div>




                        </div>
                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment >
    )
}

export default LibraryManagement