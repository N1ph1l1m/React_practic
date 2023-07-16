import React, { Component } from "react";
import FirstComponent from "../FirstComponent/FirstComponent";
import {Container} from "reactstrap";

export default class App extends Component {
  render(){
    return(
      <>
      <Container>
        <FirstComponent/>
      </Container>
      <Container>
      </Container>
      </>
      

    )
  }
}
