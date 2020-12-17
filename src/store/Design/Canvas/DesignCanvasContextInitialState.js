//initial state in context design canvas

export const initialState = { 
    //check is canvas active or not
    createCanvas:false,
    //page canvas active

    pageNow:0,
    pageLast : 0,
    refCanvasContainer:null,

    /*
      { 
          id: idCanvas,
          zoomCanvas : Zoom size Canvas (intenger)
      }
   */

    canvasArr:[
            
    ],
    canvasSeting:{
        canvasSizeHeight:1020,
        canvasSizeWidth : 1020,
        
    },

    //all array object to create
    /*
        [
            id: 

           
            
            pageFile:[
                { 
                    load:, =>add object like rectangle, image etc from server, template and user klik
                }
            ]
        ]
    
  
    */
   
    canvasLoadItems:[
        

    ],

    /*=================not use */

    canvasHistory :[],

    //use for set canvas, postion canvas add many canvas
    //refCanvasItems = canvas ref
    //canvas = canvas tag setting
    //zIndex = zIndex postion
    canvasViewArr:[

    ],

    // referensi canvas. have many page canvas
    //{ref : useRefCanvas, canvas}
    canvasViewSingle:{},

    // object setting
    canvasObjectCurrent:[],

    canvasSetFillColor:'rgba(0,0,255,1)',
    canvasSetStrokeColor:'rgba(0,0,255,1)'

};