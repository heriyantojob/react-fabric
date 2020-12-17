import { fabric }  from "fabric";


function AddObjectText(data, canvas,stateCanvas) {


    if(data.objectValue===null ||  data.objectValue === 'undefined'){
        data.objectValue={

            left: 50,
            top: 50,
            fill: stateCanvas.canvasSetFillColor,
        }
    }
    let object = new fabric.IText('Tap and Type', data.objectValue)
    canvas.add(object)

    return object
}

export default AddObjectText