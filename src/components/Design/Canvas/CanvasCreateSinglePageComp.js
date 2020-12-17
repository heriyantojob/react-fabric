import React,{useEffect,useRef,useContext,useState,useCallback} from 'react'
import { fabric }  from "fabric";
import DesignCanvasContext from "../../../store/Design/Canvas/DesignCanvasContext"

import CanvasCreateSinglePageSetRefStore from "../../../store/Design/Canvas/page/CanvasCreateSinglePageSetRefStore"
import CanvasReloadObjectStore from "../../../store/Design/Canvas/object/CanvasReloadObjectStore"
import CanvasSelectCurentObjectStore from "../../../store/Design/Canvas/object/CanvasSelectCurentObjectStore";
import CanvasCreateArrayPageStore from "../../../store/Design/Canvas/page/CanvasCreateArrayPageStore";
import {v4 as uuid} from "uuid";
import {CANVAS_BASIC_BLANK_OBJECT_UTILS as blankObject} from "../../../utils/Designs/Canvas/CanvasBasicUtils";

let canvas;
function CanvasCreateSinglePageComp(props) {
  const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
  const refCanvasItems = useRef(null);


  const [currentObject, setCurrentObject] = useState([]);

  useEffect(() => {

    // console.log("CanvasAddComp create ",props.indexArray)
    canvas= new fabric.Canvas(refCanvasItems.current)

    dispatchCanvas(CanvasCreateSinglePageSetRefStore(
      stateCanvas,
      {                  
       
        // item:stateCanvas.canvasArr[props.indexArray],
        refCanvasItems:refCanvasItems,
        canvas :canvas
      } 
    ))    //     stateCanvas,


  canvas.on('mouse:down', () => {

  });

  canvas.on('mouse:up', canvasMouseUp);

  }, [])

  const  canvasMouseUp =useCallback( (event) => {
      let curentObject = canvas.getActiveObjects()
      setCurrentObject(curentObject);

      //console.log("getActive  0",canvas.getActiveObjects()[0])
    // canvas.getActiveObjects().forEach((obj,index) => {
    //   //canvas.remove(obj);
    //   console.log("sidebar right ",index,"\n",obj)
    // });
  }, [])

  useEffect(() => {
      dispatchCanvas(CanvasReloadObjectStore(stateCanvas,{}))
  }, [stateCanvas.pageNow])

  useEffect(() => {
  
      dispatchCanvas(
                  CanvasSelectCurentObjectStore(
                      stateCanvas,
                      {
                          canvasObjectCurrent:currentObject
                      }
                  )
      );

  }, [currentObject])

  return (
    <div className='canvas-object'>
      <canvas 
      ref={refCanvasItems}
      // onClick={handelCanvas}
      //style={{border: 'solid 10px #555',boxSizing :"border-box"}} 
      />  
    </div>  
  )
 
}

export default CanvasCreateSinglePageComp


