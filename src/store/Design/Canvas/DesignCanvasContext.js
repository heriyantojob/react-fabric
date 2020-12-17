import React, {useReducer,createContext ,useRef}  from 'react'
import reducer from "./DesignCanvasContextReducer";
import { initialState }  from "./DesignCanvasContextInitialState";
function DesignCanvasContext() {
    const CanvasContext = createContext(initialState);
    const ProviderCanvas = (props) => {
        const store = useReducer(reducer, initialState); // [state, dispatch]
        return(
          <CanvasContext.Provider value={store}>
            {props.children}
          </CanvasContext.Provider>
        )
    }
    const ConsumerCanvas = CanvasContext.Consumer
    return {
        ProviderCanvas,
        ConsumerCanvas,
        CanvasContext    
    }
}

export default DesignCanvasContext()
