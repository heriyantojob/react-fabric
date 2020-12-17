import React,{useRef} from 'react'
import  {InputRangeItemStyle} from "./MultipleSliderStyle"
function MultipleSliderInputRange(props) {
    const inputElRef = useRef(null);

    console.log("value  : " , props.itemData.value)
    console.log("value index : " , props.index.index)
    return (
        <InputRangeItemStyle
            ref={inputElRef}
            defaultValue={props.itemData.value}
            onInput={()=>props.handleOnInputRange(props.index,inputElRef.current.value)}/>


    )
}

export default MultipleSliderInputRange
