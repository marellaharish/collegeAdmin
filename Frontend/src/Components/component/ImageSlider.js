import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import Slider1 from "../Assets/slider1.jpg"

function ImageSlider() {
    return (
        <MDBCarousel showIndicators showControls touch={false}>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://mdbootstrap.com/img/Photos/Slides/img%20(85).jpg'
                alt='...'
            >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://mdbootstrap.com/img/new/slides/032.jpg'
                alt='...'
            >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://mdbootstrap.com/img/new/slides/071.jpg'
                alt='...'
            >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={4}
                src='https://mdbootstrap.com/img/new/slides/038.jpg'
                alt='...'
            >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={5}
                src='https://mdbootstrap.com/img/new/slides/034.jpg'
                alt='...'
            >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </MDBCarouselItem>
        </MDBCarousel>
    );
}
export default ImageSlider