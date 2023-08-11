import React from "react";
import NavLinks from '../../Components/NavLinks/NavLinks';
import { useLocation, useNavigate } from "react-router-dom";
import Slide1 from "../../Components/Assets/pexels-pixabay-122429.jpg";
import Slide2 from "../../Components/Assets/pexels-aleksandar-pasaric-3629227.jpg";
import Slide3 from "../../Components/Assets/pexels-pixabay-33545.jpg";
import Slide4 from "../../Components/Assets/pexels-pixabay-36717.jpg";
import Background from "../../Components/Assets/bgPng.png";
import Tilt from 'react-parallax-tilt';
import CountUp from 'react-countup';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBRow,
} from 'mdb-react-ui-kit';


function Home() {
    const location = useLocation();

    return (
        <React.Fragment>
            <>
                <div className="header">
                    <NavLinks />
                    <div className="image-slider">
                        <MDBCarousel showControls showIndicators loop>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={1}
                                src={Slide1}
                                alt='...'
                            >
                                <h5 className="homeHead">Learn. Leap. Lead.</h5>
                                <p>A Place for Learning, Discovery, Innovation, Expression and Discourse. </p>
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={2}
                                src={Slide2}
                                alt='...'
                            >
                                <h5 className="homeHead">Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={3}
                                src={Slide3}
                                alt='...'
                            >
                                <h5 className="homeHead">Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </MDBCarouselItem>
                            <MDBCarouselItem
                                className='w-100 d-block'
                                itemId={4}
                                src={Slide4}
                                alt='...'
                            >
                                <h5 className="homeHead">Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </MDBCarouselItem>
                        </MDBCarousel>
                    </div>
                    <div className="main2">
                        <div className="main-head">
                            <h1>Praesent commodo cursus magna, vel scelerisque nisl consectetur</h1>
                        </div>
                        <div className="heading">
                            <img src={Slide1} className="img-head" />
                        </div>
                        <div className="image-text">
                            <p className="fs-5">Top Quality And Learning Experience</p>
                        </div>
                        <div className="counter-text ">
                            <h1>
                                <CountUp end={1985} separator="" duration={3.75} />
                                <p>Established</p>
                            </h1>
                            <h1>
                                <CountUp end={250} separator="" duration={3.75} suffix="+" />
                                <p>Acres Green Campus</p>
                            </h1>
                            <h1>
                                <CountUp end={50000} separator="," duration={3.75} suffix="+" />
                                <p>Students</p>
                            </h1>
                        </div>
                        <button class="button">
                            <span class="button-content">Download </span>
                        </button>
                    </div>
                    {/* <div className="main-3">
                        <div className="main-head">
                            <h1>Praesent commodo cursus magna,</h1>
                        </div>
                        <div className="gallery">
                            <div className="four-images-gal">
                                <div className="w-100 h-50percent inner-elv1">
                                    <div className="elementor-widget1">
                                        <img src={Slide1} />
                                    </div>
                                    <div className="elementor-widget2"></div>
                                </div>
                                <div className="w-100 h-50percent inner-elv2">
                                    <div className="elementor-widget2"></div>
                                    <div className="elementor-widget1"></div>
                                </div>
                            </div>
                            <div className="full-image-gal"></div>
                        </div>

                    </div> */}
                </div>
            </>
        </React.Fragment>
    );
}
export default Home;
