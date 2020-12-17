import React, {useEffect} from 'react'
import {MultiSliderThumbStyle,RANGE_MAX,RANGE_MIN} from "./MultipleSliderStyle"
function percentLeft(value){
    let  percent = ((value-RANGE_MIN)/(RANGE_MAX-RANGE_MIN))*100;
    // console.log(percent)
    return percent+"%"
}
function MultipleSliderThumb(props) {
    useEffect(() => {
        console.log("MultipleSliderThumb",props.itemData.value)
        // return () => {
        //     cleanup
        // }
    }, [props])

    return (
        <MultiSliderThumbStyle left={percentLeft(props.itemData.value)}/>
    )
}

export default MultipleSliderThumb
