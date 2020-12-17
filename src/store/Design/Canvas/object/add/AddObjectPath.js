import { fabric }  from "fabric";


function AddObjectPath( data,canvas) {
    let object=null
    if(data.objectValue===null ||  data.objectValue === 'undefined'){
        data.objectValue={ left: 120, top: 120, fill: '#00ff00' }
    }

    if(data.path!==null ||  data.path !== 'undefined'){
        object = new fabric.Path(data.path);
        object.set(data.objectValue);
        canvas.add(object);
    }
    
 
   

  
    return object
}

export default AddObjectPath