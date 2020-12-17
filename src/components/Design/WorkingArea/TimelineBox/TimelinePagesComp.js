import React,{useContext, useState} from 'react'
import DesignCanvasContext from "../../../../store/Design/Canvas/DesignCanvasContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
import CanvasDeletePageStore from "../../../../store/Design/Canvas/page/CanvasDeletePageStore"
import CanvasChangePageNowStore from "../../../../store/Design/Canvas/page/CanvasChangePageNowStore"

//import CanvasAddPageStore from "../../Canvas/page/CanvasAddPageStore"


import CanvasCreateArrayPageStore from "../../../../store/Design/Canvas/page/CanvasCreateArrayPageStore"
import { v4 as uuid } from 'uuid';
import {CANVAS_BASIC_BLANK_OBJECT_UTILS as blankObject} from "../../../../utils/Designs/Canvas/CanvasBasicUtils";
function TimelinePagesComp() {
   // console.log("masuk TimelinePagesComp")
    let classNameMenuItem ="menu-list";
    let classNameMenuItemActive  = false;
    const [stateCanvas, dispatchCanvas] = useContext(DesignCanvasContext.CanvasContext);


    // const  handleDelete=(event)=>{
    //      alert(event.className);
    //     // alert("masuk")
    
    // }
    const handleChangePage = key =>{
        dispatchCanvas(CanvasChangePageNowStore(
            stateCanvas,
            {
                page:key,
                
            }  
        ))

    }
    const handleDelete = (key,id) => {
       
        dispatchCanvas(CanvasDeletePageStore(
            stateCanvas,
            {
                page:key,
                id:id
                
            }  
        ))

    }

    const  handleAdd= key=>{
        dispatchCanvas(CanvasCreateArrayPageStore(
            stateCanvas,
            {
                id:uuid(),
                pageFile:[
                    {
                        time:0,
                        load:blankObject,
                    }
                ]

            }
            
        ))
        //console.log("canvas arr",stateCanvas.canvasViewArr)
   
    }

    const  handleDuplicate= key =>{
   
    
    }
    return stateCanvas.canvasArr.map((item,key) => (
        <div key={key} 
            className={key=== stateCanvas.pageNow? 
                            'item-row item-now' 
                            : 'item-row'} >
                                <div className="menu" >
                    
                    <FontAwesomeIcon icon={faEllipsisH}   />

                    <div className="menu-list">
                        <div className="menu-list-item" 
                            onClick={() => handleDuplicate(key)}>
                            Duplicate
                        </div>
                        <div className="menu-list-item"
                            onClick={() => handleAdd(key)}>
                                Add  Page
                        </div>
                        <div className="menu-list-item"
                                key={key} 
                               onClick={() => handleDelete(key,item.id)} >
                                Delete
                        </div>
                    </div>
           
           
            </div>
          
                <img
                     onClick={() => handleChangePage(key)} 
                   
                    src={require("../../../../assets/images/fotoSample/foto-tiny-1.jpg")}
                        alt="Avatar" className="image" />
            
      
        
        </div>
      ));
}

export default TimelinePagesComp
