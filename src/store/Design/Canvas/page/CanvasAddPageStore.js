import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"

function CanvasAddPageStore(state, payload) {
    console.log("masuk add page comp")
    let parentCanvas = state.refCanvasContainer
    state.canvasViewArr = [...state.canvasViewArr,
                        {
                            id              : state.canvasArr[payload.page].id,
                            refCanvasItems  : payload.refCanvasItems,
                            canvas          : new fabric.Canvas(payload.refCanvasItems.current)
                        }
                    ];



    let curentCanvasViewArr =state.canvasViewArr[payload.page];
    //let curentCanvasViewArr =state.canvasArr[payload.page].canvasDomSetting;
    let canvas = curentCanvasViewArr.canvas;
    
    canvas.setWidth(parentCanvas.current.offsetWidth);
    canvas.setHeight(parentCanvas.current.offsetHeight);
  

    let text = new fabric.Text('pages'+(state.canvasArr[payload.page].id), 
                                {   
                                    left: 100, 
                                    top: 100,
                                    stroke: '#fff' 
                                });
    canvas.add(text);
    return { type:RETURN_DATA,payload:state};

   
}

export default CanvasAddPageStore
