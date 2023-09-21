import React from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { MDBCol, MDBRow } from "mdb-react-ui-kit";


function SkeletonLoading() {
    return (
        <React.Fragment>
            <>
                <MDBRow>
                    <MDBCol size={5}>

                        <Skeleton count={3} className="mt-1" />

                    </MDBCol>
                    <MDBCol size={5}>
                        <Skeleton count={10} className="mt-1" />

                    </MDBCol>

                </MDBRow>
                <div className="circle__div">
                </div>
            </>
        </React.Fragment>
    )
}
export default SkeletonLoading