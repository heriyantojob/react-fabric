import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"

function CanvasChangePageNowStore(state, data) {
    //alert(data.key);
    state.pageNow=data.page;
    
    return { type:RETURN_DATA,payload:state};

}

export default CanvasChangePageNowStore