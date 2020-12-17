import React,{useState} from 'react'

import {    SliderDistanceStyle,InputRangeTargetStyle,

            MultiSliderStyle,MultiSliderTrackStyle}
            from "./MultipleSliderStyle"
import { v4 as uuidv4 } from 'uuid';
import MultipleSliderInputRange from "./MultipleSliderInputRange"
import MultipleSliderThumb from "./MultipleSliderThumb"
function SliderColorMultiple() {
    const [sliderData,setSliderData] =useState(
        [   {id:uuidv4(),value:10},
                    {id:uuidv4(),value:20}
                    ]
    )
    // useE
    const  handleOnInputRange= (index,valueData) =>{
        console.log("Rubah")
        setSliderData(  sliderData.map((item,key )=> {
            console.log("check ",key,",",index,",",valueData)

            if (key=== index) {
                console.log("check yes ")
                item.value = valueData
            }else{
                console.log("check none")
            }

            return item;
        }))
        //setSliderData([...setSliderData])
    }
    return (
        <SliderDistanceStyle>
           

            <InputRangeTargetStyle defaultValue="30" />

            {sliderData.map((item,index) =>
                <MultipleSliderInputRange
                    itemData={item}
                    index={index}
                    key={index}
                    handleOnInputRange={handleOnInputRange}
                    />
            )}


            {/*<InputRangeItem defaultValue="50" onInput={()=>handleOnInput(5)} />*/}
            {/*<InputRangeItem defaultValue="100"/>*/}
            <MultiSliderStyle>
                <MultiSliderTrackStyle />

                {sliderData.map((item,index) =>
                    <MultipleSliderThumb
                        itemData={item}
                        index={index}
                        key={index}/>
                )}



            </MultiSliderStyle>

        </SliderDistanceStyle>
    )
}

export default SliderColorMultiple
