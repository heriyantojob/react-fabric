import React, {useContext, useEffect,useState} from 'react'
import DesignCanvasContext from "../../../../store/Design/Canvas/DesignCanvasContext"
import CanvasReloadObjectStore from "../../../../store/Design/Canvas/object/CanvasReloadObjectStore";
import styled from 'styled-components';
import ColorPickerComp from "../Tools/ColorPickerComp"

const Container = styled.div`
`;


function SideBarRightDesignComp() {
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
    const [showColor,isShowColor]=useState(false)
    useEffect(() => {
        
        isShowColor(false);
    }, [])
    useEffect(() => {
        isShowColor(false);
        if(stateCanvas.canvasObjectCurrent.length > 1 ){
            //multiple object
        }else if(stateCanvas.canvasObjectCurrent.length ===1 ){
            //single object
            isShowColor(true);
        }
        else{
           
            //not seleted

        }

       
    }, [stateCanvas.canvasObjectCurrent] )
    return (
        <>
            <Container>
                {showColor &&
                    <div>
                        Color
                        <ColorPickerComp/>
                    </div>
                }
               

            </Container>

        </>
    )
}

export default SideBarRightDesignComp
