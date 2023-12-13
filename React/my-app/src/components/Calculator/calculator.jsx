import React from "react";
import Boiling from "./boilingVerdict"
import TemperatureInput from "./tempInput";
import styled from "styled-components";



const CalculatorWrap = styled.div`
  width: 700px;
  min-height: 100px;
  margin:40px auto;
  display:flex;
  flex-direction:row;
  justify-content: space-between;
`;
const BoilingWrap = styled.div`
width:300px;
height:50px;
margin:0px auto;
`

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

class Calculator extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      temperature:'',
      scale: 'c'
  }
  this.handleCelsiusChange  = this.handleCelsiusChange.bind(this);
  this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }
  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }
   
    render(){
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature,toFahrenheit) : temperature;
        return(
          <>
            <CalculatorWrap>
            <TemperatureInput 
              scale ='c'
              temperature={celsius}
              onTemperatureChange = {this.handleCelsiusChange}
            />
            <TemperatureInput 
              scale = 'f'
              temperature = {fahrenheit}
              onTemperatureChange = {this.handleFahrenheitChange}  
              />
           </CalculatorWrap>
           <BoilingWrap>
           <Boiling
              celsius = {parseFloat(celsius)}
              />
           </BoilingWrap>
          </>
        )
    }
}
export default Calculator;