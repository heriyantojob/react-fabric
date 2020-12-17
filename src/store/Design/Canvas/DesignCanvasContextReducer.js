import * as actions from "./DesignCanvasContextAction"

import { initialState }  from "./DesignCanvasContextInitialState";

export default function reducer(state = initialState, { type,  payload }) {

    switch(type){
        //create canvas
        case actions.CREATE:
            // let setCanvasLoadItems={
            //     ... state.canvasLoadItems,
            //     canvasSizeHeight:payload.canvasSizeHeight,
            //     canvasSizeWidth : payload.canvasSizeWidth
            // }

            return {
                        ...state,
                        createCanvas:true,
                        
                        refCanvasContainer:payload.refCanvasContainer
                    }

        //default return data
        case actions.RETURN_DATA:
            
            // state.tes= [...state.tes,"Aaa"]
            // console.log("ubah design return data",state.tes)
           
            return {...state,payload} ;

        default : return state
    }
  

}


