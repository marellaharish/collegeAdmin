import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import { useLocation, useNavigate } from "react-router-dom";
import Slide1 from "../../Components/Assets/pexels-pixabay-122429.jpg";
import Slide2 from "../../Components/Assets/pexels-aleksandar-pasaric-3629227.jpg";
import Slide3 from "../../Components/Assets/pexels-pixabay-33545.jpg";
import Slide4 from "../../Components/Assets/pexels-pixabay-36717.jpg";
import Background from "../../Components/Assets/bgPng.png";


function ImageSlider() {
    // Assuming you have an element with the ID 'myElement'.
    const element = document.getElementById('myElement');

    // Check if the element exists before calling getComputedStyle.
    if (element) {
        const computedStyles = window.getComputedStyle(element);
        // Now you can access the computed styles of the element.
    } else {
        console.error('Element not found.');
    }

    return (
        <div >
            <div >
                <MDBCarousel showControls showIndicators loop>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={1}
                        src={Slide1}
                        alt='Learn. Leap. Lead.'
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
                        <h5 className="homeHead">Learn. Leap. Lead.</h5>
                        <p>A Place for Learning, Discovery, Innovation, Expression and Discourse. </p>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={3}
                        src={Slide3}
                        alt='...'
                    >
                        <h5 className="homeHead">Learn. Leap. Lead.</h5>
                        <p>A Place for Learning, Discovery, Innovation, Expression and Discourse. </p>
                    </MDBCarouselItem>
                    <MDBCarouselItem
                        className='w-100 d-block'
                        itemId={4}
                        src={Slide4}
                        alt='...'
                    >
                        <h5 className="homeHead">Learn. Leap. Lead.</h5>
                        <p>A Place for Learning, Discovery, Innovation, Expression and Discourse. </p>
                    </MDBCarouselItem>
                </MDBCarousel>
            </div>

        </div>
    );
}

export default ImageSlider;
