import React from "react"
import '../Components/Css/Landing.css'
import video from '../Components/Assets/videos/allLow1.m4v';
import NavLinks from "../Components/NavLinks/NavLinks";
import AnimateCursor from "../Components/component/AnimateCursor";

function LandingPage() {
    return (
        <React.Fragment>
            <>
                {/* <video playsinline="" loop="" id="homevid" class="" style="display: block;"><source src="/assets/video/allLow1.m4v" type="video/mp4"></video> */}
                <AnimateCursor />
                {/* <video src={video} autoPlay muted loop /> */}

                <NavLinks />

            </>
        </React.Fragment>
    )
}
export default LandingPage