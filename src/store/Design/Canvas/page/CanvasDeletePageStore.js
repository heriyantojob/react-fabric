import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"

function CanvasDeletePageStore(state, data) {
    //state.canvasViewArr=state.canvasViewArr.filter(item => item.id !==data.id)   
    state.canvasArr=state.canvasArr.filter(item => item.id !==data.id)   
    //state.canvasViewArr=[];
    return { type:RETURN_DATA,payload:state};

}

export default CanvasDeletePageStore