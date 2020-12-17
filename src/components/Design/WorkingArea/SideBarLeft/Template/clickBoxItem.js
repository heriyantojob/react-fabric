
import CanvasAddObjectStore from "../../../../../store/Design/Canvas/object/CanvasAddObjectStore";


export default function useClickItemBox(data,stateCanvas,dispatchCanvas) {
      // console
    return () => {

        dispatchCanvas(CanvasAddObjectStore(stateCanvas,data))
    }

}