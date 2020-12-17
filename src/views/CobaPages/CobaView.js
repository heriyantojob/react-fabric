import React ,{Component,Fragment} from "react";
import { fabric }  from "fabric";

class  Coba extends Component{
    isDown = false;
    tempObjectBeforeX =0;
    tempObjectBeforeY=0;


    componentDidMount() {
     
        this.canvas = new fabric.Canvas('main-canvas');
        let canvas = this.canvas
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
        
        this.canvas.add(rect);

        this.canvas.add(rect);
       
        this.canvas.on({
            "mouse:down": this.mouseDown,
            "mouse:move":this.mouseMove,
            "mouse:up": this.mouseUp    
            
          });

      
       

    
    }
    mouseDown=(options) =>{
        this.isdown = true;
        console.log(options)
        //     alert("klick")
            let pointer = this.canvas.getPointer(options.e);
            this.tempObjectBeforeX = pointer.x;
            this.tempObjectBeforeY = pointer.y;
            this.addRect()
    }
    mouseMove=(options) =>{
        if (!this.isdown) return;

        let pointer = this.canvas.getPointer(options.e);
        this.tempObjectAfterX = pointer.x;
        this.tempObjectAfterY = pointer.y;
        //change rectangle
        this.setRectChangeSize();
    }
    mouseUp=(options) =>{
        this.isdown = false;
     
    }
    addRect=() =>{
        this.tempObjectNew = new fabric.Rect({
            left: this.tempObjectBeforeX,
            top: this.tempObjectBeforeY,
            fill: this.randomColor(),
            width: 10,
            height: 10,
          //  selectable: isSelectAbleObject
          });
        
          // "add" rectangle onto canvas
          this.canvas.add(this.tempObjectNew);
 
    }
    setRectChangeSize=()=> {
        console.log("masuk ubah");
      
        if (this.tempObjectBeforeX > this.tempObjectAfterX) {
          this.tempObjectNew.set({ left: Math.abs(this.tempObjectAfterX) });
        }
        if (this.tempObjectBeforeY > this.tempObjectAfterY) {
          this.tempObjectNew.set({ top: Math.abs(this.tempObjectAfterY) });
        }
      
        this.tempObjectNew.set({ width: Math.abs(this.tempObjectAfterX - this.tempObjectBeforeX) });
        this.tempObjectNew.set({ height: Math.abs(this.tempObjectAfterY - this.tempObjectBeforeY) });
      
        // circle.set("width", "blue");
        this.canvas.renderAll();
      }
    randomColor=() => {
        const colorRandomMax = 255;
        return (
          "rgba(" +
          this.random(colorRandomMax) +
          "," +
          this.random(colorRandomMax) +
          "," +
          this.random(colorRandomMax) +
          ",1)"
        );
      }

    random=(max = 10, min = 0)=> {
        let randomNumber = Math.floor(Math.random() * max) + min;
        return randomNumber;
    }

    
    

    createRect = event => {
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
        this.canvas.add(rect);
    
    };
    render() {
        return (
            <Fragment>
            ini coba
                <button className="bg-blue-500 p10" onClick ={this.createRect} >
                    Rect
                </button>
                <button className="bg-blue-500 p10 ml-5" onClick ={this.createRect} >
                    addImages
                </button>
                <div id="canvas-container">
                    <canvas style={{border: 'solid 1px #555'}} id='main-canvas' 
                        width="500px" height="500px"
                    />
                    <div></div> 
                </div>
            </Fragment>

        );
    }
    
}
export  default Coba;