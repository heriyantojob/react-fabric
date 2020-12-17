import React ,{useContext}  from 'react'
import { ToolBoxListContext } from './ToolBoxListComp'
function ToolBoxItemComp(props) {

    const toolBoxListContext = useContext(ToolBoxListContext)

    let classNameItem ="content-design-toolbox-item";

    if (props.name === toolBoxListContext.toolboxListState) {
        classNameItem += ' content-design-toolbox-item-active';
    }
   // console.log(toolBoxListContext.toolboxListState.selection)
    return (
        <div className={classNameItem} 
        onClick={() =>toolBoxListContext
                        .toolboxListDispatch(
                           {type:"ganti",payload:props.name} 
                        )
                }>
            <img 
                src={props.image}
               // src={require("../../assets/icon/design/"+props.image)}
                alt = {props.name}
                />

            <div className="content-design-toolbox-item-name">
                {props.name}
            </div>
           
           
        </div>
    )
}

export default ToolBoxItemComp

