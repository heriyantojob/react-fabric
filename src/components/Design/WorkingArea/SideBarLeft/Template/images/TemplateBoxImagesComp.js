import React, {useContext, useState,useRef} from 'react'
import DesignCanvasContext from "../../../../../../store/Design/Canvas/DesignCanvasContext"
//import * as designCanvasContextAction from "../../../../../store/Design/Canvas/DesignCanvasContextAction"
import CanvasAddObjectStore from "../../../../../../store/Design/Canvas/object/CanvasAddObjectStore"
import   "../TemplateGlobalStyleCss.css";
import  {TemplateTopInputSearchRowStyle,TemplateTopButtonSearchStyle,TemplateContainerStyle,TemplateTopInputStyle,TemplateTopInputSearchStyle}  from "../TemplateGlobalStyle";
import TemplateBoxImageListComp from "./TemplateBoxImageListComp"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function TemplateBoxImagesComp() {
    const inputSearch = useRef(null);
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);
    const [querySearch,setQuerySearch] = useState("");

    const handleKeyDown = e => {
        const isEnterKey = e.which === 13;
        const value = e.target.value
        if (isEnterKey && value.trim()) {
            setQuerySearch (value.trim())
        }
    };
    const handleClickSearch = e => {
            setQuerySearch (inputSearch.current.value)
    };

    return (
        <>
            <TemplateContainerStyle>
                <TemplateTopInputStyle>
                    <TemplateTopInputSearchRowStyle>
                        <TemplateTopInputSearchStyle
                            type="search"
                            ref={inputSearch}
                            onKeyDown={handleKeyDown}/>
                        <TemplateTopButtonSearchStyle
                            onClick={handleClickSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </TemplateTopButtonSearchStyle>
                    </TemplateTopInputSearchRowStyle>


                </TemplateTopInputStyle>

                <div style={{  flex:"1" ,height:"100%"}}>
                  <TemplateBoxImageListComp querySearch={querySearch}/>
                </div>

            </TemplateContainerStyle>

        </>
    )
}

export default TemplateBoxImagesComp
