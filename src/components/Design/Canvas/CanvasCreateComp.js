
import React,{useEffect,useRef,useContext,useState} from 'react'


import DesignCanvasContext from "../../../store/Design/Canvas/DesignCanvasContext"

import CanvasCreateSinglePageComp from "./CanvasCreateSinglePageComp"

import CanvasCreateArrayPageStore from "../../../store/Design/Canvas/page/CanvasCreateArrayPageStore"
import "./canvasCss.css"

import {CANVAS_TES_CREATE_OBJECT_UTILS as loadCanvas } from "../../../utils/Designs/Canvas/CanvasTesUtils"

import CanvasCreateFileStore from "../../../store/Design/Canvas/file/CanvasCreateFileStore"

function CanvasCreateComp() {
    const [itemsCanvas,setItemCanvas]=useState([]);  
    const [isLoad, setLoad] = useState(true)
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
    const refCanvasContainer = useRef(null);

    useEffect(() => {

      // dispatchCanvas({
      //   type:CREATE,
      //   payload:{
      //     refCanvasContainer:refCanvasContainer,
      //     canvasSizeHeight:1024,
      //     canvasSizeWidth : 1024
     

      //   }
      // })

      //new
    
   
    

      dispatchCanvas(CanvasCreateFileStore(
        stateCanvas,
        {                  
         
          refCanvasContainer:refCanvasContainer,
        } 
      )) 
      setItemCanvas(loadCanvas.canvasItems);
      
    // SetFileCanvas(loadCanvas);

   
    }, [])

    useEffect(() => {

      if(itemsCanvas.length>0){
        itemsCanvas.map((item, page) => {
            dispatchCanvas(CanvasCreateArrayPageStore(
                stateCanvas,
                item,
              ))    //     stateCanvas,

              //set z index
            
        })
        setLoad(false)
        console.log(" ",stateCanvas.canvasArr[0].id)
      }
     
     
    }, [itemsCanvas])
   
    return (
        <>
              
               <div className="canvas-container"
                    ref={refCanvasContainer}
                    style={{height: '100%'}} >
                      {/* {!isLoading &&     <CanvasAddListComp />} */}
                      {!isLoad &&     <CanvasCreateSinglePageComp />}
                  
                
               </div>           
        </>
    )
}

export default CanvasCreateComp



