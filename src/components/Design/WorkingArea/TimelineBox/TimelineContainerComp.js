import React,{useContext,useEffect} from 'react'

import DesignCanvasContext from "../../../../store/Design/Canvas/DesignCanvasContext"
import TimelinePagesComp from "./TimelinePagesComp"

import "./timeLineCss.css"
function TimelineContainerComp() {
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);

   // console.log();
    useEffect(() => {
        
        console.log("TimelineContainerComp masuk canvas array")
       // console.log(stateCanvas.canvasArr)
    }, [stateCanvas.canvasArr])


    return (
        <>
            <div className="item-container">
                <TimelinePagesComp />
            </div>
           
        </>
    )
}

export default TimelineContainerComp
