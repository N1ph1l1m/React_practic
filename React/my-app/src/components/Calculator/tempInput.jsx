import React from "react";


const scaleItem = {
    c:'Цельсия',
    f:'Форенгейты'
};


export default class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {temperature:''};
        this.handleChangeTemp = this.handleChangeTemp.bind(this);
    }
    handleChangeTemp(e){
        this.setState({temperature: e.target.value});
    }
    render() {
        const scale = this.props.scale;
        const temperature = this.state.temperature;
        return (
           <fieldset>
            <legend>Введите температуру в градусах {scaleItem[scale]}:</legend>
            <input value={temperature}
                    onChange = {this.handleChangeTemp}/>
           </fieldset>
        );
    }
}