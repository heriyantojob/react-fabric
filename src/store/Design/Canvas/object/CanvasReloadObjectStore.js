import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"

function CanvasReloadObjectStore(state, payload) {
    let page = state.pageNow;

    let canvas =state.canvasViewSingle.canvas;
    canvas.clear();

    let pageFileLoad = state.canvasLoadItems[state.pageNow].pageFile[0].load
    canvas.loadFromJSON(pageFileLoad);
    return { type:RETURN_DATA,payload:state};
}

export default CanvasReloadObjectStore
