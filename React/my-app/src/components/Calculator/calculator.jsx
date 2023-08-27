import React from "react";
//import Boiling from "./boilingVerdict"
import TemperatureInput from "./tempInput";
export default class Calculator extends React.Component{
   
    render(){
        return(
           <>
            <TemperatureInput scale ='c'/>
            <TemperatureInput scale = 'f'/>
           </>
        )
    }
}