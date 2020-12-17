import React from 'react'
import { CustomPicker } from 'react-color'
import { EditableInput, Hue ,Checkboard } from 'react-color/lib/components/common'
let hex ="#ff00ff"
function GradientColor() {
    const handleColorChange = ({ hex }) => console.log(hex)
    const styles = {
        hue: {
          height: 10,
          position: 'relative',
          marginBottom: 10,
        },
        input: {
          height: 34,
          border: `1px solid ${ hex }`,
          paddingLeft: 10,
        },
        swatch: {
          width: 54,
          height: 38,
          background: hex,
        },
      }
    return (
        <div>
        {/* <div style={ styles.hue }>
          <Hue hsl={ hsl } onChange={ onChange } />
        </div> */}
  
            <div style={{ display: 'flex' }}>
                <EditableInput
                    style={{ input: styles.input }}
                    value={ hex }
                    onChange={ handleColorChange }
                />
          
                <div style={ styles.swatch } />
                
                <Checkboard
                size={ 12 }
                white="#fff"
                grey="#333"  />
            </div>
        </div>
  
    )
}

export default GradientColor
