import React from "react"
import AnimatedCursor from "react-animated-cursor"

function AnimateCursor() {
    return (
        <React.Fragment>
            <>
                <AnimatedCursor
                    innerSize={8}
                    outerSize={10}
                    showSystemCursor={true}
                    color='193, 11, 111'
                    outerAlpha={0.2}
                    innerScale={0.7}
                    outerScale={5}

                />
            </>
        </React.Fragment>
    )
}
export default AnimateCursor