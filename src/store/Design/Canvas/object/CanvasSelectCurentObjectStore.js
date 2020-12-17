import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"
import {saveHistory} from "./CanvasSaveHistoryObject"
function CanvasSelectCurentObjectStore(state, data) {

    let page = state.pageNow;

    let canvas =state.canvasViewSingle.canvas;
   // state.canvasObjectCurrent
    state.canvasObjectCurrent=data.canvasObjectCurrent;
    console.log("getActive store",state.canvasObjectCurrent)
    //console.log(" object curent",data.canvasObjectCurrent)
    saveHistory(state)
    return { type:RETURN_DATA,payload:state};
    
}

export default CanvasSelectCurentObjectStore