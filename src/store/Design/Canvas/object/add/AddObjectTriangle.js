import { fabric }  from "fabric";


function AddObjectTriangle( data,canvas,stateCanvas) {
    

    if(data.objectValue===null ||  data.objectValue === 'undefined'){
        data.objectValue={ left: 100,
            top: 100,
            fill: '#00ff00',
            width: 20,
            height: 20
        }
    }
    let object = new fabric.Triangle({
        width: 20, height: 30, fill: stateCanvas.canvasSetFillColor, left: 50, top: 50
     })
   
    canvas.add(object)
  
    return object
}

export default AddObjectTriangle