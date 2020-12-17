import {RETURN_DATA}  from "../DesignCanvasContextAction"

function CanvasCreateFileStore(state, data) {
    console.log("masuk CanvasAddListChangeStore")
  //  state.createCanvas=true
    state.refCanvasContainer=data.refCanvasContainer

    return { type:RETURN_DATA,payload:state};

}

export default CanvasCreateFileStore