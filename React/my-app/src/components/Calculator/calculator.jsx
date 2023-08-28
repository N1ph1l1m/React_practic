import React from "react";
//import Boiling from "./boilingVerdict"
import TemperatureInput from "./tempInput";
import styled from "styled-components";



const CalculatorWrap = styled.div`
  width: 600px;
  min-height: 200px;
  border: 1px solid black;
  margin:0px auto;
  display:flex;
  flex-direction:row;
  justify-content: center;
`;


export default class Calculator extends React.Component{
   
    render(){
        return(
           <CalculatorWrap>
            <TemperatureInput scale ='c'/>
            <TemperatureInput scale = 'f'/>
           </CalculatorWrap>
        )
    }
}