import React,{useState,useContext,useEffect} from 'react'

import {fabric} from "fabric"
import DesignCanvasContext from "../../../../store/Design/Canvas/DesignCanvasContext"
import { SketchPicker } from 'react-color'
import {RGB_TO_HEX,HEX_TO_RGB} from "../../../../utils/Designs/Global/ColorUtils"
import CanvasChangeObjectStore from "../../../../store/Design/Canvas/object/CanvasChangeObjectStore"
import CanvasReloadObjectStore from "../../../../store/Design/Canvas/object/CanvasReloadObjectStore";

import ColorPickerStyle from "./ColorPickerStyle"

function ColorPickerComp() {
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);

    const [state, setState] = useState({
        displayColorPicker: false,
        color: {
          r: '241',
          g: '112',
          b: '19',
          a: '1',
        },
      })
      const styles =ColorPickerStyle(state);
        //const [styles,setStyles] = useState(null)
      useEffect(() => {
        
        if(stateCanvas.canvasObjectCurrent.length>0){
            let canvasObjectCurrent =stateCanvas.canvasObjectCurrent[0];
            //let canvasObjectCurrent = stateCanvas.canvasObjectCurrent

           // let rgbColor =new fabric.Color(canvasObjectCurrent.fill).toRgb()

            let rgbColor =new fabric.Color(canvasObjectCurrent.fill).getSource()
            setState({...state,
                color: {
                  r : rgbColor[0],
                  g : rgbColor[1],
                  b : rgbColor[2],
                  a :rgbColor[3],
                } })

        }


            // new fabric.Color('#f55').toRgb();
      }, [stateCanvas.canvasObjectCurrent])

   
  
     const handleClick = () => {
        setState({ ...state,displayColorPicker: !state.displayColorPicker })
      };
    
      const handleClose = () => {
        setState({...state, displayColorPicker: false })
      };
    
      const handleChange = (color) => {
        setState({...state, color: color.rgb })
        //let hexColor =RGB_TO_HEX(color.rgb.r,color.rgb.g,color.rgb.b);
        let changeColor = 'rgba('+color.rgb.r+','+color.rgb.g+','+color.rgb.b+','+color.rgb.a+')'
       console.log("Change COlor",changeColor)
        dispatchCanvas(CanvasChangeObjectStore(stateCanvas,{
            change:[{atributName:"fill",atributValue:changeColor}]
        }))

      };
    return (
        <div>
        <div style={ styles.swatch } onClick={ handleClick }>
          <div style={ styles.color } />
        </div>
        { state.displayColorPicker ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ handleClose }/>
          <SketchPicker color={ state.color } onChange={ handleChange } />
        </div> : null }

      </div>
    )
}

export default ColorPickerComp
