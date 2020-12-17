import React,{useEffect,useRef,useContext,useState,useCallback} from 'react'
import { fabric }  from "fabric";
import DesignCanvasContext from "../../../store/Design/Canvas/DesignCanvasContext"

import CanvasCreateSinglePageSetRefStore from "../../../store/Design/Canvas/page/CanvasCreateSinglePageSetRefStore"
import CanvasReloadObjectStore from "../../../store/Design/Canvas/object/CanvasReloadObjectStore"
import CanvasSelectCurentObjectStore from "../../../store/Design/Canvas/object/CanvasSelectCurentObjectStore";

let canvas;
function CanvasCreateSinglePageComp(props) {
  const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
  const refCanvasItems = useRef(null);
  const [testState,setTestState]=useState(0);
  const startDraw  = useRef()
  const [isPainting, setIsPainting] = useState(false);

  useEffect(() => {
    // console.log("CanvasAddComp create ",props.indexArray)
    canvas= new fabric.Canvas(refCanvasItems.current)

    dispatchCanvas(CanvasCreateSinglePageSetRefStore(
      stateCanvas,
      {                  
       
        // item:stateCanvas.canvasArr[props.indexArray],
        refCanvasItems:refCanvasItems,
        canvas :canvas
      } 
    ))    //     stateCanvas,


    // canvas.on('mouse:down', () => {
    //
    //   //alert("klick down")
    // });
    // canvas.on('mouse:up', () => {
    //
    // });
  }, [])
  useEffect(() => {
    setTestState(testState+1)

    dispatchCanvas(CanvasReloadObjectStore(stateCanvas,{}))
  }, [stateCanvas.pageNow])




  const  canvasMouseDown =useCallback( () => {
    let tempTestState  = testState+1;
    setTestState("down")
    setIsPainting(true)
  }, [isPainting])

  useEffect(() => {
    // if (!refCanvasItems.current) {
    //   return;
    // }

    canvas.on('mouse:down', canvasMouseDown);
   // canvas.on('mouse:up', canvasMouseDown);


  }, [canvasMouseDown]);

  const  canvasMouseUp =useCallback( (event) => {

    setTestState("up")
    setIsPainting(false)



  }, [])
  useEffect(() => {
    // if (!refCanvasItems.current) {
    //   return;
    // }


    canvas.on('mouse:up', canvasMouseUp);
    console.log("canvasMouseUp ganti ")
    return () => {
      console.log("canvasMouseUp exit ")
    };

  }, [canvasMouseUp]);


//   useEffect(() => {
//   // alert(testState)
//     if(isPainting===false){
//       console.log("paiting lepas ",testState)
//     }else{
//       console.log("paiting gabung ",testState)
//     }
//
//
// //      alert("ganti test state",testState)
//
//   }, [isPainting])

  useEffect(() => {
    // alert(testState)

      console.log("paiting testState ",testState)



//      alert("ganti test state",testState)

  }, [testState])


  return (
    <div className='canvas-object'>
      <canvas 
      ref={refCanvasItems}
      // onClick={handelCanvas}
      //style={{border: 'solid 10px #555',boxSizing :"border-box"}} 
      />  
    </div>  
  )
 
}

export default CanvasCreateSinglePageComp


