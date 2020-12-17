import { fabric }  from "fabric";


function AddObjectRect( data,canvas,stateCanvas) {
    

    if(data.objectValue===null ||  data.objectValue === 'undefined'){
        data.objectValue={ left: 100,
            top: 100,
            fill: stateCanvas.canvasSetFillColor,
            width: 20,
            height: 20,
            opacity: 1,

        }
    }
    let rect = new fabric.Rect(
        data.objectValue
    )
   
    canvas.add(rect)
  
    return rect
}

export default AddObjectRect