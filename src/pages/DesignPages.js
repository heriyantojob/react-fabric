import React from 'react'
import CanvasCreateComp from "../components/Design/Canvas/CanvasCreateComp"

import "../assets/css/design.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import ToolBoxItemComp from "../components/Design/WorkingArea/ToolBoxItemComp"
import ToolBoxListComp from "../components/Design/WorkingArea/ToolBox/ToolBoxListComp"
import DesignCanvasContext from "../store/Design/Canvas/DesignCanvasContext"
import TemplateBoxListImagesComp  from "../components/Design/WorkingArea/TemplateBox/Images/TemplateBoxListImagesComp"
import TemplateBoxComp  from "../components/Design/WorkingArea/TemplateBox/TemplateBoxComp"
import TimelineContainerComp from "../components/Design/WorkingArea/TimelineBox/TimelineContainerComp"
import SideBarRightDesignComp from "../components/Design/WorkingArea/SideBarRight/SideBarRightDesignComp"
import SideBarLeftComp from '../components/Design/WorkingArea/SideBarLeft/SideBarLeftComp'
const {ProviderCanvas} = DesignCanvasContext;

function DesignPages() {
  
    return (
        <ProviderCanvas>
        
<div className="container-design" style = {{height:"100vh"}}>

    <header className="header-design">
        <FontAwesomeIcon icon={faBars}   />
    </header>
    <div className="content-design">
    <SideBarLeftComp/>

    {/* <div className="content-design-toolbox">
        <ToolBoxListComp/>
    </div>
    <div className="content-design-template">
        <TemplateBoxComp/>
    </div> */}

    <div className="content-design-project">
        <div className="content-design-project-canvas">
            <CanvasCreateComp/>  
        </div>

        <div className="content-design-project-timeline">
            <TimelineContainerComp/>
        </div>
       
    </div>
    <div className="content-design-sidebar">
       <SideBarRightDesignComp/>
    </div>
   
</div>
</div>


        </ProviderCanvas>
    )
}

export default DesignPages
