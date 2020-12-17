import React,{useContext,useEffect} from 'react'
import DesignCanvasContext from "../../../store/Design/Canvas/DesignCanvasContext"
import CanvasAddComp from "./CanvasAddComp"
import CanvasAddListChangeStore from "../../../store/Design/Canvas/page/CanvasAddListChangeStore"
function CanvasAddList() {

    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
    useEffect(() => {
        console.log("render use effect Todos")
       
        // dispatchCanvas(CanvasAddListChangeStore(
        //     stateCanvas,
        //     {},
        //   ))    //     stateCanvas,

        // props.items.map((item, key) => {
      
        // })  
     }, [stateCanvas.canvasArr]);
    return stateCanvas.canvasArr.map((item, key) => (
        <CanvasAddComp indexArray={key} key={key}/>
    
    ));
}

export default CanvasAddList
