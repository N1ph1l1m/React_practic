import React from "react";
import FirstComponent from "../FirstComponent/FirstComponent";
import SecondComponent  from "../SecondComponent/secondComponent"
import {Container} from "reactstrap";
import styled from "styled-components";

const ToggleOn = styled.div`
  width:20px;
  height:20px;
  background-color:green;
  border:1px solid black;
  border-radius:50px;
`

const ToggleOff = styled.div`
  width:20px;
  height:20px;
  background-color:red;
  border:1px solid black;
  border-radius:50px;
  margin-bottom:30px;
`

function formatName(user){
  return user.fist  + '  ' + user.last;
}
const user = {
  fist:"Max",
  last:"Morena"
};

const element = (
    <h1>
      Hello , {formatName(user)}
    </h1>
);
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      date:new Date(),
      isToggleOn:true,
    };
    // this.state = {isToggleOn:true};
    this.handleClick = this.handleClick.bind(this);
  }
  

  componentDidMount(){
    this.timerId = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount(){
    clearInterval(this.timerId);
  }

 
  tick(){
    this.setState({
      date:new Date()
    });
  }
  handleClick(){
    this.setState(prevState =>({
      isToggleOn: !prevState.isToggleOn
    }));
    
  }
  togleBG = () =>{
    if(this.state.isToggleOn === true)
    return(
      <ToggleOn/>
    );
    else{
      return(
        <ToggleOff/>
      );
    }
  }

  render(){
    const togleBG = this.togleBG(); 
    return(
  
      <>
      <Container>
        <FirstComponent/>
      </Container>
      <Container>
      {element}
      </Container>
      <Container>
        <div>
          <h2>
            Now  {this.state.date.toLocaleTimeString()}.
          </h2>
        </div>
      </Container>  
      <Container>
        <button onClick={this.handleClick}>{this.state.isToggleOn ? 'On' : 'Off'}{togleBG}</button>
      </Container>
      <br/>
      <Container>
        <SecondComponent/>
      </Container>
      </>
    )
  }
}
