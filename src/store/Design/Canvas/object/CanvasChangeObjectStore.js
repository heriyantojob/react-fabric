import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"
import {saveHistory} from "./CanvasSaveHistoryObject"
function CanvasChangeObjectStore(stateCanvas, data) {

    let page = stateCanvas.pageNow;

    let canvas =stateCanvas.canvasViewSingle.canvas;


    const listItems = data.change.map((atribut) =>

        canvas.getActiveObject().set(
            atribut.atributName,
            atribut.atributValue,
        )

    );
    canvas.renderAll();
    // state.canvasObjectCurrent

    saveHistory(stateCanvas)

    //console.log(" object curent",data.canvasObjectCurrent)
    return { type:RETURN_DATA,payload:stateCanvas};
}

export default CanvasChangeObjectStore