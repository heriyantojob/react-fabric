import styled from 'styled-components';

import SimpleBarReact from "simplebar-react";

export  const  TemplateContainerStyle = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    height:100%;
    

`;

//=========top template search
export  const  TemplateTopInputStyle = styled.div`
    display: flex;
    margin-top: 10px;
  
    box-sizing: border-box;
`;
export  const  TemplateTopInputSearchRowStyle = styled.div`
    width: 100%;
    margin:auto;
    box-sizing: border-box;
    display: flex;
`;

export  const  TemplateTopInputSearchStyle = styled.input`
    flex : 1;
    font-size: 1rem;
    color: black;
    padding: 10px;   
`;

export  const  TemplateTopButtonSearchStyle = styled.button`
    background-color: #1976D2;
    font-size: 1rem;
    color: #fff;
    padding: 10px;   
     border: none;
`;

export  const  TemplateItemList = styled.div`


    column-count: 2;
    column-gap: 5px;
    margin: 5px;
`;

export  const  TemplateItemListImage = styled.img`
   width: 100%; 
`;

