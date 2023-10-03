import React from "react"
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import placement1 from "../Assets/placement1.jpg"
import placement2 from "../Assets/placement2.jpg"
import placement3 from "../Assets/placement3.jpg"


function PlacementSlider() {
    return (
        <React.Fragment>
            <>
                <div className="Placement__Slider">
                    <MDBCarousel>
                        <MDBCarouselItem
                            className='d-block'
                            itemId={1}
                            src={placement1}
                            alt='...'
                        />
                        <MDBCarouselItem
                            className='d-block'
                            itemId={2}
                            src={placement2}
                            alt='...'
                        />
                        <MDBCarouselItem
                            className='d-block'
                            itemId={3}
                            src={placement3}
                            alt='...'
                        />
                    </MDBCarousel>
                </div>
            </>
        </React.Fragment>

    )
}
export default PlacementSlider