import React,{useContext} from 'react'
import DesignCanvasContext from "../../../../../store/Design/Canvas/DesignCanvasContext"
import * as designCanvasContextAction from "../../../../../store/Design/Canvas/DesignCanvasContextAction"
import CanvasAddObjectStore from "../../../../../store/Design/Canvas/object/CanvasAddObjectStore"
function TemplateBoxListImagesComp() {
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);

    return (
        <>
            <div className="content-design-template-search">

                <input className="content-design-template-search-input" />
            </div>
        
            <div className="content-design-template-item-list">
                <div
                        onClick={() =>
                            dispatchCanvas(CanvasAddObjectStore(stateCanvas,{object:{}}))
                            } 
                     className="content-design-template-item-content">
                    <img src={require("../../../../../assets/images/fotoSample/foto-small-1.jpg")}/>
                </div>
                <div className="content-design-template-item-content">
                    <img src={require("../../../../../assets/images/fotoSample/foto-small-1.jpg")}/>
                </div>
            
                <div className="content-design-template-item-content">
                    <img src={require("../../../../../assets/images/fotoSample/foto-small-1.jpg")}/>
                </div>
                <div className="content-design-template-item-content">
                    <img src={require("../../../../../assets/images/fotoSample/foto-small-1.jpg")}/>
                </div>
            
            
            </div>
        
        </>
    )
}

export default TemplateBoxListImagesComp
