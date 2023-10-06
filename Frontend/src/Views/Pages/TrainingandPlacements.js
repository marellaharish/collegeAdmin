import React from 'react'
import NavLinks from '../../Components/NavLinks/NavLinks'
import { MDBContainer, MDBInput } from 'mdb-react-ui-kit'
import Footer from '../../Components/Footer/Footer';
import { MDBSelect } from 'mdb-react-ui-kit';
import {
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBBtn,
    MDBCol,
    MDBRadio,
    MDBRow,
} from "mdb-react-ui-kit";
function TrainingandPlacements() {
    return (
        <React.Fragment>
            <>
                <NavLinks />
                <div className="main__bodySub">
                    <div className="College__Admissions">
                        <div className="Admissions__head">
                            <h1>Training and Placement</h1>
                            <div>
                                <MDBBreadcrumb>
                                    <MDBBreadcrumbItem>
                                        <a href="#">Home</a>
                                    </MDBBreadcrumbItem>
                                    <MDBBreadcrumbItem>
                                        <a href="#">Training and Placement</a>
                                    </MDBBreadcrumbItem>
                                </MDBBreadcrumb>
                            </div>
                        </div>
                    </div>

                    <MDBContainer className='mb-5'>

                        <section class="dept-landing-sec">
                            <div class="container">
                                <h1 class="tab-main-title mb-5 text-center">
                                    Students Placed at Top Companies
                                </h1>
                                <div class="company-logos">
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/ACC.jpg" alt="ACC" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Accelerize.jpg" alt="Accelerize" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/accenture.jpg" alt="accenture" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Accolite-Digital.jpg" alt="Accolite-Digital" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/AMAZON.jpg" alt="AMAZON" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Google.jpg" alt="Google" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/UBER.jpg" alt="UBER" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/American-Express.jpg" alt="American-Express" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/APP.jpg" alt="APP" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Atlassian-logo.jpg" alt="Atlassian-logo" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Blue-Star.jpg" alt="Blue-Star" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Logo2.jpg" alt="chubb" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/chubb.jpg" alt="chubb" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/CTS-new-logo.jpg" alt="CTS-new-logo" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/darwin-box.jpg" alt="darwin-box" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/DAZN.jpg" alt="DAZN" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/paypal.jpg" alt="paypal" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/DBS.jpg" alt="DBS" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Diageo.jpg" alt="Diageo" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/EA-India.jpg" alt="EA-India" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Experian.jpg" alt="Experian" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/State-Street.jpg" alt="State-Street" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/F5-networks.jpg" alt="F5-networks" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Gainsight.jpg" alt="Gainsight" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/HSBC.jpg" alt="HSBC" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Inncircles.jpg" alt="Inncircles" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/JPMC.jpg" alt="JPMC" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Micron.jpg" alt="Micron" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/MRF.jpg" alt="MRF" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/NRC.jpg" alt="NRC" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/opentext.jpg" alt="opentext" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/oracle.jpg" alt="oracle" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/outplay.jpg" alt="outplay" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/AMD.jpg" alt="AMD" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Deloitte.jpg" alt="Deloitte" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/NCL.jpg" alt="NCL" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Providence.jpg" alt="Providence" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/pwc.jpg" alt="pwc" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Qualcomm.jpg" alt="Qualcomm" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/RSM.jpg" alt="RSM" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Schindler-logo.jpg" alt="Schindler" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/SHURE.jpg" alt="SHURE" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/Sypnopsys.jpg" alt="Sypnopsys" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/logo_1.jpg" alt="Sypnopsys" />
                                    <img src="https://vnrvjiet.ac.in/assets/images/placement/ZF.jpg" alt="ZF" />
                                </div>
                            </div>
                        </section>
                    </MDBContainer>
                    <Footer />
                </div>
            </>
        </React.Fragment>
    )
}
export default TrainingandPlacements