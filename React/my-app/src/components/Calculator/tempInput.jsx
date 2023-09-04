import React from "react";
import styled from "styled-components";


const TempWrap = styled.div`
        width: 700px;
        height: 120px;
        border: 1px solid black;
        border-radius:8px;
        margin-right:18px;
`;
const InputItem = styled.input`
        border:1px solid gray;
        width:200px;
        height:30px;
        border-radius:20px;
        margin-left: 70px;
        margin-top:20px;
        padding-left:13px;
`
const H1New = styled.h1`
        margin-top:8px;
        font-size:19px;
        color:blue;
`

const scaleItem = {
    c:'Цельсия',
    f:'Форенгейты'
};


export default class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChangeTemp = this.handleChangeTemp.bind(this);
    }
    handleChangeTemp(e){
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <TempWrap>
            <H1New>Введите температуру в градусах {scaleItem[scale]}:</H1New>
            <InputItem value={temperature}
                       onChange = {this.handleChangeTemp}/>
            </TempWrap>
        );
    }
}