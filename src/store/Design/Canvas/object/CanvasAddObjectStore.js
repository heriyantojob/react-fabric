import { fabric }  from "fabric";
import {RETURN_DATA}  from "../DesignCanvasContextAction"
import AddObjectRect from "./add/AddObjectRect"
import AddObjectCircle from "./add/AddObjectCircle"
import AddObjectTriangle from "./add/AddObjectTriangle"
import AddObjectPath from "./add/AddObjectPath"
import AddObjectImage from "./add/AddObjectImage"
import AddObjectText from "./add/AddObjectText";
import {saveHistory} from "./CanvasSaveHistoryObject"

function CanvasAddObjectStore(state, data) {

    let page = state.pageNow;
   
    let canvas =state.canvasViewSingle.canvas;

    if(data !==null ||data !== 'undefined'){
        if(data.objectArr !==null|| data.objectArr !== 'undefined'){
            data.objectArr.map((item,key) => {
                if(item.type==="rect"){
                    AddObjectRect( {objectValue:item.objectValue},canvas,state)
                 
                }else if(item.type==="circle"){
                    AddObjectCircle( {objectValue:null},canvas,state)
                   
                       
                }
                else if(data.type==="path"){

                    AddObjectPath({objectValue:null,path :'M 0 0 L 200 100 L 170 200 z'},state)
                        
                }else if(item.type==="triangle"){
                    AddObjectTriangle( {objectValue:null},canvas,state)
                    
                }else if(item.type==="image"){

                    //AddObjectImage({objectValue:null,image:"https://images.pexels.com/photos/4273439/pexels-photo-4273439.jpeg?cs=srgb&dl=black-scissors-on-brown-wooden-chopping-board-4273439.jpg&fm=jpg"},canvas,state)
                    console.log("item :",item);
                    AddObjectImage(

                            item
                        ,canvas,state)
                }
                else if(item.type==="i-text"){
                    AddObjectText( {objectValue:null},canvas,state)

                }
                   // AddObjectRect( {objectValue:null},canvas)
                    // AddObjectCircle( {objectValue:null},canvas)
                    // AddObjectTriangle( {objectValue:null},canvas)
                    
            });
        }
     
    }
    
 
   // canvas.clear();
    //let canvas = state.canvasArr[page].canvas;
 //save file
    saveHistory(state);
    //state.canvasLoadItems[state.pageNow].pageFile[0].load=JSON.stringify(canvas.toJSON());

    //canvas.renderAll();
    //   state.canvasArr[page].renderAll();
    return { type:RETURN_DATA,payload:state};
}

export default CanvasAddObjectStore
