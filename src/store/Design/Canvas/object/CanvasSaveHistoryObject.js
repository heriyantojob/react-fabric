export const saveHistory =(stateCanvas)=>{
    let canvas =stateCanvas.canvasViewSingle.canvas;
    stateCanvas.canvasLoadItems[stateCanvas.pageNow].pageFile[0].load=JSON.stringify(canvas.toJSON());
    return stateCanvas;
}