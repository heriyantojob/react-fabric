import React,{useEffect,useRef,useContext,useState} from 'react'
import DesignCanvasContext from "../../../store/Design/Canvas/DesignCanvasContext"

import CanvasAddPageStore from "../../../store/Design/Canvas/page/CanvasAddPageStore"

function CanvasAddComp(props) {
  const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
  const refCanvasItems = useRef(null);
  const [firstLoad,setFirstLoad]=useState(true)
  useEffect(() => {
    console.log("CanvasAddComp create ",props.indexArray)

    dispatchCanvas(CanvasAddPageStore(
      stateCanvas,
      {                  
        page:props.indexArray,
        // item:stateCanvas.canvasArr[props.indexArray],
        refCanvasItems:refCanvasItems
      } 
    ))    //     stateCanvas,
    console.log("stateCanvas ",stateCanvas.canvasViewArr);

    
    
  }, [])


  useEffect(() => {
    console.log("CanvasAddComp change ",props.indexArray)


    
    
  }, [stateCanvas.canvasArr[props.indexArray]])

//}, [stateCanvas.canvasArr[props.indexArray]])
  return (
    <div className={props.indexArray=== stateCanvas.pageNow? 
      'canvas-object canvas-object-now' 
      : 'canvas-object'}>
      <canvas 
      ref={refCanvasItems} 
      //style={{border: 'solid 10px #555',boxSizing :"border-box"}} 
      />  
    </div>  
  )
 
}

export default CanvasAddComp


