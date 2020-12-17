import styled from 'styled-components';
export const RANGE_MAX = 100
export const RANGE_MIN = 0
// // require('../css.escape.js');
// import cssEscape from 'css.escape'
export  const  SliderDistanceStyle = styled.div`
    position: relative;
    width: 1000px;
    max-width: 500px;
    height: 100px;
    background-color: rgba(0, 0, 255, .1);
    margin-top: 100px;
`;

export  const InputRangeStyle = styled.input.attrs({
    type: 'range',

    min:RANGE_MIN,
    max:RANGE_MAX

})`
    position: absolute;
    z-index: 2;
    height: 2px;
    width: 100%;
 
 
    top:-50px;
`;
export const MultiSliderTrackStyle = styled.div`
    position: absolute;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 5px;
    background-color: #ff00ff;
`
export  const MultiSliderThumbStyle =
    styled.div(props => (`
    position: absolute;
    z-index: 3;
    width: 30px;
    height: 30px;
    background-color: #6200ee;
    border-radius: 50%;
    opacity: .3;
    box-shadow: 0 0 0 20px rgba(98, 0, 238, .1);
    transition: box;
    transform:translate(-15px,-10px);
    left: ${props.left};
`));

//     styled.div`
//     position: absolute;
//     z-index: 3;
//     width: 30px;
//     height: 30px;
//     background-color: #6200ee;
//     border-radius: 50%;
//     opacity: .3;
//     box-shadow: 0 0 0 20px rgba(98, 0, 238, .1);
//     transition: box;
//     transform:translate(-15px,-10px);
// `
export const MultiSliderStyle  =styled.div`
    position: relative;
    z-index: 1;
    height: 10px;
    margin: 0 15px;
`



export const InputRangeTargetStyle = styled(InputRangeStyle)`
        cursor: copy;  
`;
export const InputRangeItemStyle = styled(InputRangeStyle)`
    -webkit-appearance: none;
    pointer-events: none;
   

    ::-webkit-slider-thumb{
        width: 30px;
        height: 30px;
        border-radius: 0;
        border: 0 none;
        background-color: red;
        -webkit-appearance: none;
        pointer-events: all;
    }
`;