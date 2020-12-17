import React,{useEffect} from 'react'
import { fabric }  from "fabric";

let isDown = false;
let tempObjectBeforeX =0;
let tempObjectBeforeY=0;


function CobaFunc() {
  
    useEffect(() => {
        let canvas = new fabric.Canvas('main-canvas');
        //let canvas = this.canvas
        let rect = new fabric.Rect({
            left: 100,
            top: 50,
            fill: '#D81B60',
            width: 50,
            height: 50,
            strokeWidth: 2,
            stroke: "#880E4F",
            rx: 10,
            ry: 10,
            angle: 45,
            scaleX: 3,
            scaleY: 3,
            hasControls: true
        });
        
        canvas.add(rect);

        canvas.add(rect);
        return () => {
            
        }
    }, [])
    return (
        <>
                 ini coba
                <button className="bg-blue-500 p10" 
                    >
                    Rect
                </button>
                <button className="bg-blue-500 p10 ml-5"  >
                    addImages
                </button>
                <div id="canvas-container">
                    <canvas style={{border: 'solid 1px #555'}} id='main-canvas' 
                        width="500px" height="500px"
                    />
                    <div></div> 
                </div>
        </>
    )
}

export default CobaFunc
