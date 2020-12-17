import React from 'react'
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import {TOOL_BOX_ITEM_NAME,TOOL_BOX_ITEMS} from "../../../../utils/Designs/WorkingArea/ToolBoxItemUtil"

import TemplateBoxImagesComp from "./Template/images/TemplateBoxImagesComp";
import TemplateBoxCharacterListListComp from "./Template/TemplateBoxCharacterListComp";
import TemplateBoxElementListComp from "./Template/TemplateBoxElementListComp";
import TemplateBoxShapeListComp from "./Template/TemplateBoxShapeListComp";
import TemplateBoxTextListComp from "./Template/TemplateBoxTextListComp";
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";
const STabs = styled(Tabs)`
    display: flex;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
  display: flex;
  flex-direction: column;
   background-color: #2F3147;
   height: 100%;
  
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
        display: flex;
        flex-direction: column;
        margin-top: 10x;
        padding: 10px;
        cursor: pointer;
        box-sizing: border-box;

  &.is-selected {
    // color: white;
    // background: black;
    //border-bottom: 1px solid white;
    
    background-color:#1976D2;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 0, 255, .5)
  }
  
  &:hover  {
    background-color:#1976D2;
  }
`;

const STabImages = styled.img`
        width: 1.5rem;
        margin: auto;
`;
const STabName= styled.div`
     margin: auto;
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  display: none;

  background-color: #494B66;
  height: auto;
  box-sizing: border-box;
   width : 250px;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';



function SideBarLeftComp() {
    return (
        <>

            <STabs
                defaulttab="vertical-tab-one"
                selectedTabClassName='is-selected'
                selectedTabPanelClassName='is-selected'
            >


                    <STabList>
                        <SimpleBarReact style={{ maxHeight: "100%" }}>
                        {TOOL_BOX_ITEMS.map((value,key) =>
                            <STab key={key}>
                                <STabImages
                                    src={value.image}
                                    // src={require("../../../../assets/icon/design/icon_design_audio.svg")}
                                    alt ={value.name}
                                />
                                <STabName>

                                    {value.name}

                                </STabName>

                            </STab>
                        )}
                        </SimpleBarReact>
                    </STabList>


                {/* image */}
                <STabPanel>
                    <TemplateBoxImagesComp/>
                </STabPanel>
                {/* masked photos */}
                <STabPanel>
                    <TemplateBoxImagesComp/>
                </STabPanel>
                {/* character */}
                <STabPanel>
                    <TemplateBoxCharacterListListComp/>
                </STabPanel>
                {/* shape */}
                <STabPanel>
                    <TemplateBoxShapeListComp/>
                </STabPanel>
                {/* elemet */}
                <STabPanel>
                    <TemplateBoxElementListComp/>
                </STabPanel>
                {/* text */}
                <STabPanel>
                    <TemplateBoxTextListComp/>
                </STabPanel>
            </STabs>

            
        </>
    )
}

export default SideBarLeftComp
