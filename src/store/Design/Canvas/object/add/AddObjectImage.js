import { fabric }  from "fabric";


function AddObjectImage( data,canvas) {
    console.log("AddObjectImage",data.image)

    if(data.objectValue===null ||  data.objectValue === 'undefined'){
        data.objectValue={
            left: 0, top: 0
        }
    }
    let object =null

    if(data.image ){
        object =    fabric.Image.fromURL(data.image, function(
            image
          ) {
            console.log("Add object image")
            //i create an extra var for to change some image properties
            //let img1 = myImg.set({ left: 0, top: 0, width: 150, height: 150 });
            let imageAdd = image.set({ left: 0, top: 0 });
            canvas.add(imageAdd);
          });
    }
  
   
  
  
    return object
}

export default AddObjectImage