import React from 'react'
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
function SimpleSliderTes() {
    return (
        <div className="App">
        <h1>SimpleBar React</h1>
        <SimpleBarReact style={{ maxHeight: 300 }}>
          {[...Array(50)].map((x, i) => (
            <p>{i}</p>
          ))}
        </SimpleBarReact>
      </div>
    )
}

export default SimpleSliderTes
