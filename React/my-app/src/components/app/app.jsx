import React from "react";
import FirstComponent from "../FirstComponent/FirstComponent";
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true,
      showLi: false,
      showForm: false,
    };
    this.handleClick = this.handleClick.bind(this);
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
  
  togleBG = () => {
    if (this.state.isToggleOn === true) return <ToggleOn />;
    else {
      return <ToggleOff />;
    }
  };
    render() {
    const togleBG = this.togleBG();
    
    return (
      <>
        <Container>
          <FirstComponent />
        </Container>
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
      </>
    );
  }
}
export default App;