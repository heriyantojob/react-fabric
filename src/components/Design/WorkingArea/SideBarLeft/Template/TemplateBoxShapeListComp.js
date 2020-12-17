import React,{useContext} from 'react'
import styled from 'styled-components';
import DesignCanvasContext from "../../../../../store/Design/Canvas/DesignCanvasContext"
import CanvasAddObjectStore from "../../../../../store/Design/Canvas/object/CanvasAddObjectStore"

const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;
const BoxItem = styled.div`
    padding:5px;
    margin:5px;
    background-color:#fff;
    
`;

const BoxItemImg = styled.img`
    width:100%
`;



function TemplateBoxShapeListComp() {
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
    const cllckBoxItem =(data)=>{

        dispatchCanvas(CanvasAddObjectStore(stateCanvas,data))
        
    }
    return (
        <BoxContainer>
   
            <BoxItem onClick={()=>cllckBoxItem({objectArr:[{type:"rect",objectValue:null}]})}>
                <BoxItemImg src={require("../../../../../assets/images/canvas/shape/shape_rect.svg")}/>
            </BoxItem>
            <BoxItem onClick={()=>cllckBoxItem({objectArr:[{type:"circle",objectValue:null}]})}>
                <BoxItemImg src={require("../../../../../assets/images/canvas/shape/shape_circle.svg")}/>
            </BoxItem>
            <BoxItem onClick={()=>cllckBoxItem({objectArr:[{type:"i-text",objectValue:null},{type:"circle",objectValue:null}]})} >
                <BoxItemImg src={require("../../../../../assets/images/canvas/shape/shape_rect.svg")}/>
            </BoxItem>
            <BoxItem>
                <BoxItemImg src={require("../../../../../assets/images/canvas/shape/shape_rect.svg")}/>
            </BoxItem>
         
              
        </BoxContainer>
    )
}

export default TemplateBoxShapeListComp
