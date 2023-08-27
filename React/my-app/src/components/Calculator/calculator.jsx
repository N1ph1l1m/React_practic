import React from "react";
import Boiling from "./boilingVerdict"

export default class Calculator extends React.Component{
    constructor(props) {
        super(props);
        this.handleChangeTemp = this.handleChangeTemp.bind(this);
        this.state = {temperature: ''};
      }
    

    handleChangeTemp(e){
        this.setState({temperature:e.target.value});
    }

    render(){
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Введите температуру в градусах Цельсия: </legend>
                <input
                 value={temperature}
                 onChange={this.handleChangeTemp}/>
                <Boiling celsius = {parseFloat(temperature) }/>
            </fieldset>
        )
    }
}