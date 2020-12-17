import {CANVAS_BASIC_BLANK_OBJECT_UTILS as blankObject} from "./CanvasBasicUtils"
import { v4 as uuid } from 'uuid';
export const CANVAS_TES_CREATE_OBJECT_UTILS = {
    canvasSetting :{
        canvasSizeHeight : 1000,
        canvasSizeWidth : 1000,
    },
   
    canvasItems :
    [
        {
            id:uuid(),
            pageFile:[
                { 
                    time:0,
                    load:blankObject,
                }
            ]
        },
        {
            id:uuid(),
            pageFile:[
                { 
                    time:0,
                    load:blankObject,
                }
            ]
        }    

    ]
    
    
}