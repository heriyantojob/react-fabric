// import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"

function CanvasCreateArrayPageStore(state, data) {
    console.log("debug data",data)
    state.canvasArr= [...state.canvasArr,
            {id :data.id}
    ];
    console.log("debug data canvasArr",state.canvasArr)
    state.canvasLoadItems= [...state.canvasLoadItems,
        {
            id :data.id,

            pageFile:[
                { 
                    load:data.pageFile[0].load,
                }
            ]
        }
    ];
    console.log("debug data canvasLoadItems", state.canvasLoadItems)

   
  
    return { type:RETURN_DATA,payload:state};

}

export default CanvasCreateArrayPageStore