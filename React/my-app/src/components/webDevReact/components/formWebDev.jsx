import React, { Fragment } from "react";
//import styled from "styled-components";
import PropTypes from "prop-types";



const POSITION =[
    {
        id:'fd',
        value:'Front-end developer',
        title:'Front-end developer',
    },
    {
        id:'bd',
        value:'Back-end developer',
        title:'Back-end developer',
    },
    {
        id:'devOps',
        value:'DevOps',
        title:'DevOps',
    },
    {
        id:'des',
        value:'Design',
        title:'Design',
    },
];


class FormWevDev extends React.Component{

    state ={
        inputText:'',
        inputArea:'',
        selectText:'',
        showData: {
            name:'',
            text:'',
            position:'',
        }
    }

    handleInputChange = ({target:{value}})=>{
        this.setState({
            inputText : value,
        })
    }

    handleTextAreaChange = ({target:{value}})=>{
        this.setState({
            inputArea : value,
        })
    }

    handleSelectChange = ({target:{value}})=>{
        this.setState({
            selectText : value,
        })
    }

    handleShowData = (e) =>{
        e.preventDefault();
        const {inputText , inputArea , selectText} = this.state;
        this.setState({
            inputText: '',
            inputArea:'',
            selectText:'',
            showData:{
                name:inputText,
                text:inputArea,
                position:selectText,
            }
        })
    }

  
    render(){
        const {inputText, inputArea,selectText,showData} = this.state;
        const {name,text , position} = showData;
        return(
            <Fragment>
                <form>
                    {/* Input  */}
                    <lavel>
                        Name:
                        <input 
                            type="text" 
                            name="name"
                            value={inputText}
                            onChange={this.handleInputChange}
                            />
                    </lavel>
                    {/* TextArea */}
                    <label htmlFor="text">Text:</label>
                    <textarea 
                        id="text"
                        value = {inputArea}
                        onChange={this.handleTextAreaChange}
                        />
                    {/* Button */}<br/>
                    <button onClick={this.handleShowData}>Show</button>
                </form>
                <h2>{name}</h2>
                <h2>{text}</h2>
                <h2>{position}</h2>

                <h1>Select</h1>
                    <select value={selectText} onChange={this.handleSelectChange}>
                      {POSITION.map(({id,value,title})=>(
                        <option key={id} value={value}>{title}</option>
                      )
                    )}


                    </select>
            </Fragment>
        )
    }
}
export default FormWevDev;