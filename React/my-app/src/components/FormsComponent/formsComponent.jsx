import React from "react";
import styled from "styled-components";



const FormWrap = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin:0px auto;
  display:flex;
  flex-direction:column;
  alighn-item:center;
`;

export default class FormsComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:'',
            valueAr:'Simple text for textarea',
            valueSelect:'coconut',
            isGong:true,
            numberOfGuest:2,
        }
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleChangeArea = this.handleChangeArea.bind(this);
        this.handleSubmitArea = this.handleSubmitArea.bind(this);
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleSubmitSelect = this.handleSubmitSelect.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.clearForm = this.clearForm.bind(this);
    }
     handleChangeForm(event){
        this.setState({value:event.target.value});
     }
     handleSubmitForm(event){
        alert("Send your name" + this.state.value);
        event.preventDefault();
     }
     handleChangeArea(event){
        this.setState({valueAr:event.target.valueAr});
     }
     handleSubmitArea(event){
        alert("Messege send" + this.state.valueAr);
        event.preventDefault();
     }
     handleChangeSelect(event){
        this.setState({valueSelect: event.target.value});
     }
     handleSubmitSelect(event){
        alert("Your selected item " + this.state.valueSelect);
        event.preventDefault();
     }
     handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]:value
        });
     }

     clearForm(){
        this.setState((clearState)=>({
            valueAr : clearState = "",
        }))
     }

     Form(){
        return(
            <>
                <h1>Component Forms</h1>
                    <form onSubmit={this.handleSubmitForm}>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChangeForm}/>
                        </label>
                        <input type="submit" value="Send"/>
                    </form>
            </>
        )
     }
     TextArea(){
        return(
            <>
                <form onSubmit={this.handleSubmitArea}>
                    <label>
                        Messeng:
                         <textarea value={this.state.valueAr} onChange={this.handleChangeArea} onClick={this.clearForm}/>
                    </label>
                    <input type="submit" value="Send messange"/>
                </form>
            </>
        )
     }
     Select(){
        return(
            <>
                <form onSubmit={this.handleSubmitSelect}>
                    <label>
                    Выберите ваш любимый вкус:
                    <select value={this.state.valueSelect} onChange={this.handleChangeSelect}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    </label>
                    <input type="submit" value="Send" />
                </form>
            </>
        )
     }
     componentInput(){
        return(
            <form>
            <label>
              Пойдут:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Количество гостей:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
          </form>
        )
     }



    render(){     
        const form  = this.Form();
        const formArea = this.TextArea();
        const selectFruit = this.Select();
        const componentInput = this.componentInput();
        return(
            
            <FormWrap>
                {form}
                {formArea}
                {selectFruit}
                {componentInput}
            </FormWrap>
            
            
                
        )
    }
}