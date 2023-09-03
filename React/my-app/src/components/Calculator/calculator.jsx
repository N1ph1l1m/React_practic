import React from "react";
import Boiling from "./boilingVerdict"
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

function toCelsius(fahrenheit){
  return (fahrenheit - 32)* 5 / 9;
}

function toFahrenheit(celsius){
  return (celsius * 9 / 5 ) + 32;
}
function tryConvert(temperature,convert){
  const input = parseFloat(temperature);
  if(Number.isNaN(input)){
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

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