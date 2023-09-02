import React from "react";
//import Boiling from "./boilingVerdict"
import TemperatureInput from "./tempInput";
import styled from "styled-components";



const CalculatorWrap = styled.div`
  width: 700px;
  min-height: 200px;
  ${'' /* border: 1px solid black; */}
  margin:40px auto;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
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