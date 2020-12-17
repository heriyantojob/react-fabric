import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"

function CanvasCreateSinglePageSetRefStore(state, payload) {
    
    let parentCanvas = state.refCanvasContainer
    
    state.canvasViewSingle = {...state.canvasViewSingle,
                            refCanvas  : payload.refCanvasItems,
                            canvas          : payload.canvas
      
                    };



    let canvas =state.canvasViewSingle.canvas;
    //let curentCanvasViewArr =state.canvasArr[payload.page].canvasDomSetting;

    

    canvas.setWidth(parentCanvas.current.offsetWidth);
    canvas.setHeight(parentCanvas.current.offsetHeight);
    
    return { type:RETURN_DATA,payload:state};
    
    
   
   
}

export default CanvasCreateSinglePageSetRefStore
