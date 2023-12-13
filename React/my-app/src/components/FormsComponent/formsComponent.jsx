import React from "react";
import styled from "styled-components";

const FormWrap = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  alighn-item: center;
`;
const FormItem = styled.div`
  width: 480px;
  min-height: 50px;
  margin: 10px;
`;
const InputItem = styled.input`
  border: 1px solid gray;
  width: 200px;
  height: 30px;
  border-radius: 20px;
  margin-left: 3px;
  padding-left: 13px;
`;
const InputSendButton = styled.input`
  min-width: 70px;
  height: 30px;
  margin-left: 6px;
  border-radius: 20px;
  border: 1px solid gray;
`;
const TextAreaNew = styled.textarea`
  width: 210px;
  height: 80px;
  border-radius: 20px;
  margin-left: 10px;
  padding: 8px;
  align-self: center;
`;
const FormLabel = styled.label`
  margin-right: 5px;
`;
const FormWrapItem = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 480px;
  min-height: 30px;
`;

class FormsComponent extends React.Component {
  state = {
    value: "",
    valueAr: "Text",
    valueSelect: "coconut",
    isGong: true,
    numberOfGuest: 2,
  };

  handleChangeForm = (event) => {
    this.setState({ value: event.target.value });
    console.log("Name  = " + this.state.value);
  };
  handleSubmitForm = (event) => {
    alert("Send your name" + this.state.value);
    event.preventDefault();
  };
  handleChangeArea = (event) => {
    this.setState({ valueAr: event.target.value });
    console.log("Change area = " + this.state.valueAr);
  };
  handleSubmitArea = (event) => {
    alert("Messege send  " + this.state.valueAr);
    event.preventDefault();
  };
  handleChangeSelect = (event) => {
    this.setState({ valueSelect: event.target.value });
  };
  handleSubmitSelect = (event) => {
    alert("Your selected item " + this.state.valueSelect);
    event.preventDefault();
  };
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  clearForm = () => {
    this.setState((clearState) => ({
      valueAr: (clearState = ""),
    }));
  };

  Form() {
    return (
      <FormItem>
        <h1>Component Forms</h1>
        <form onSubmit={this.handleSubmitForm}>
          <FormWrapItem>
            <FormLabel>Name:</FormLabel>
            <InputItem
              type="text"
              value={this.state.value}
              onChange={this.handleChangeForm}
            />
            <InputSendButton type="submit" value="Send" />
          </FormWrapItem>
        </form>
      </FormItem>
    );
  }
  TextArea() {
    return (
      <FormItem>
        <form onSubmit={this.handleSubmitArea}>
          <FormWrapItem>
            <FormLabel>Messeng:</FormLabel>
            <TextAreaNew
              value={this.state.valueAr}
              onChange={this.handleChangeArea}
              onClick={this.clearForm}
            />
            <InputSendButton type="submit" value="Send messange" />
          </FormWrapItem>
        </form>
      </FormItem>
    );
  }
  Select() {
    return (
      <FormItem>
        <form onSubmit={this.handleSubmitSelect}>
          <FormWrapItem>
            <FormLabel>Выберите ваш любимый вкус:</FormLabel>
            <select
              value={this.state.valueSelect}
              onChange={this.handleChangeSelect}
            >
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
            <InputSendButton type="submit" value="Send" />
          </FormWrapItem>
        </form>
      </FormItem>
    );
  }
  componentInput() {
    return (
      <form>
        <FormWrapItem>
          <FormLabel>
            Пойдут:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={this.handleInputChange}
            />
          </FormLabel>
          <FormLabel>
            Количество гостей:
            <InputItem
              name="numberOfGuests"
              type="number"
              value={this.state.numberOfGuests}
              onChange={this.handleInputChange}
            />
          </FormLabel>
        </FormWrapItem>
      </form>
    );
  }

  render() {
    const form = this.Form();
    const formArea = this.TextArea();
    const selectFruit = this.Select();
    const componentInput = this.componentInput();
    return (
      <FormWrap>
        {form}
        {formArea}
        {selectFruit}
        {componentInput}
      </FormWrap>
    );
  }
}

export default FormsComponent;
