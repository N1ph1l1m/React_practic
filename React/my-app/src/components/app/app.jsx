import React from "react";
import FirstComponent from "../FirstComponent/FirstComponent";
import SecondComponent from "../SecondComponent/secondComponent";
import FormsComponent from "../FormsComponent";
import Calculator from "../Calculator";
import { Container } from "reactstrap";
import styled from "styled-components";

const ToggleOn = styled.div`
  width: 20px;
  height: 20px;
  background-color: green;
  border: 1px solid black;
  border-radius: 50px;
`;

const ToggleOff = styled.div`
  width: 20px;
  height: 20px;
  background-color: red;
  border: 1px solid black;
  border-radius: 50px;
`;

function formatName(user) {
  return user.fist + "  " + user.last;
}
const user = {
  fist: "Max",
  last: "Morena",
};

const element = <h1>Hello , {formatName(user)}</h1>;
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true,
      showLi: false,
    };
    // this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
    this.showLiClick = this.showLiClick.bind(this);
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  handleClick() {
    this.setState((prevState) => ({
      isToggleOn: !prevState.isToggleOn,
    }));
  }
  showLiClick() {
    this.setState((prevState) => ({
      showLi: !prevState.showLi,
    }));
  }

  togleBG = () => {
    if (this.state.isToggleOn === true) return <ToggleOn />;
    else {
      return <ToggleOff />;
    }
  };
  showLiRender = () => {
    if (this.state.showLi === true) {
      console.log("true");
      return <SecondComponent />;
    } else {
      console.log("false");
      return <h1>No component </h1>;
    }
  };

  render() {
    const togleBG = this.togleBG();
    const showLi = this.showLiRender();
    return (
      <>
        <Container>
          <FirstComponent />
        </Container>
        <Container>{element}</Container>
        <Container>
          <div>
            <h2>Now {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        </Container>
        <Container>
          <h2>Turn Second Component</h2>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? "On" : "Off"}
            {togleBG}
          </button>
        </Container>
        <br />
        <Container>
          <button onClick={this.showLiClick}>Show Li component</button>
          {showLi}
        </Container>
        <Container>
        <FormsComponent/>
        </Container>
        <Container>
        <br/>
        <Calculator/>
        </Container>
      </>
    );
  }
}