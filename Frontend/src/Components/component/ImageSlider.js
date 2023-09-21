import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Slide1 from "../Assets/alide-4.webp"
import Slide2 from "../Assets/slide-2.webp"
import Slide3 from "../Assets/Slide-3.jpg"
import Slide4 from "../Assets/Slide-4.jpg"
import Slide5 from "../Assets/Slide-5.jpg"
import Slide6 from "../Assets/Slide-6.webp"

function ImageSlider() {
    return (
        <MDBCarousel showIndicators showControls touch={false}>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={Slide1}
                alt='...'
            >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={Slide2}
                alt='...'
            >
                <h5>Second slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={Slide5}
                alt='...'
            >
                <h5>Third slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={4}
                src={Slide6}
                alt='...'
            >
                <h5>Forth slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={5}
                src={Slide3}
                alt='...'
            >
                <h5>Fifth slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={6}
                src={Slide4}
                alt='...'
            >
                <h5>Fifth slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}
export default ImageSlider