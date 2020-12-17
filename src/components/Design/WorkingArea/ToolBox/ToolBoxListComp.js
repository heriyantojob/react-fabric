import React,{useReducer} from 'react'
import ToolBoxItemComp from "./ToolBoxItemComp"
import {TOOL_BOX_ITEM_NAME} from "../../../../utils/Designs/WorkingArea/ToolBoxItemUtil"
export const ToolBoxListContext = React.createContext()
const initialStateToolBoxlist = "Images"
const listItemToolBox=[
    {name:TOOL_BOX_ITEM_NAME.images,
            image:require("../../../../assets/icon/design/icon_design_image.svg")
        },
    {name:TOOL_BOX_ITEM_NAME.characters,
                image:require("../../../../assets/icon/design/icon_design_char.svg")},
    {name:TOOL_BOX_ITEM_NAME.shapes,
                image:require("../../../../assets/icon/design/icon_design_element.svg")},
    {name:TOOL_BOX_ITEM_NAME.element,
                image:require("../../../../assets/icon/design/icon_design_element.svg")},
  
    {name:TOOL_BOX_ITEM_NAME.text,
                image:require("../../../../assets/icon/design/icon_design_text.svg")},
    // {name:"Video",
    //             image:require("../../../../assets/icon/design/icon_design_video.svg")}, 
    // {name:"Audio",
    //             image:require("../../../../assets/icon/design/icon_design_audio.svg")},             

]

const reducerToolBoxList = (state,{ type, payload })=>{
    // alert(payload);
    return payload;
    
}
function ToolBoxListComp() {
    const [toolboxListReducer,dispatchToolbox] = useReducer(reducerToolBoxList,initialStateToolBoxlist)
 
    return (
        <>
            {/* {toolboxListReducer.} */}
          <ToolBoxListContext.Provider
     
             value={{toolboxListState : toolboxListReducer,toolboxListDispatch:dispatchToolbox}}>
            {listItemToolBox.map(itemToolBox => (
          
                    <ToolBoxItemComp         key={itemToolBox.name}
                        image={itemToolBox.image} name={itemToolBox.name}
                        />
                  
                ))}  
          </ToolBoxListContext.Provider>
               
        </>
    )
}

export default ToolBoxListComp
