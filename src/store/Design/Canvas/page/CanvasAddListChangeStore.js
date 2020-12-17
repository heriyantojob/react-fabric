import {RETURN_DATA}  from "../DesignCanvasContextAction"

function CanvasAddListChangeStore(state, data) {
    console.log("masuk CanvasAddListChangeStore")
    state.canvasViewArr= [];
    return { type:RETURN_DATA,payload:state};

}

export default CanvasAddListChangeStore