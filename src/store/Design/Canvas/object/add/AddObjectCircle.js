import { fabric }  from "fabric";


function AddObjectCircle( data,canvas,stateCanvas) {
    

    if(data.objectValue===null ||  data.objectValue === 'undefined'){
        data.objectValue={
            radius: 40,
            left: 50,
            top: 50,
            fill: stateCanvas.canvasSetFillColor,
            
        }
    }
    let object = new fabric.Circle(
        data.objectValue
    )
  
      
    canvas.add(object)
  
    return object
}

export default AddObjectCircle