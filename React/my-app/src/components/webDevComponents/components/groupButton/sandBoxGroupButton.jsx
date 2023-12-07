/* eslint-disable */
import React, { Fragment, Component } from 'react';
import ButtonGroup from '../groupButton/groupButton'
import Button from '../button/button'
import styled from "styled-components";


const WrapSandBox = styled.div`
margin:10px auto;
`

class Sandbox extends Component {
  state = {
    switchOn: true,
  }

  handleSwitchOn = () => {
    this.setState({ switchOn: true });
  }

  handleSwitchOff = () => {
    this.setState({ switchOn: false });
  }

  render() {
    const { switchOn } = this.state;

    return (
      <div className='centerWrap'>
 <WrapSandBox> 
       <h2><span>1. Horizontal button group:</span></h2>
      <ButtonGroup>
        <Button active>First</Button>
        <Button>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>

      <h2><span>2. Vertical button group:</span></h2>
      <ButtonGroup vertical >
        <Button className='newWidth'>First</Button>
        <Button  active>Middle</Button>
        <Button>Last</Button>
      </ButtonGroup>

      <h2><span>3. Switcher button group:</span></h2>
      <ButtonGroup>
        <Button onClick={this.handleSwitchOn} active={switchOn}>ON</Button>
        <Button onClick={this.handleSwitchOff} active={!switchOn}>OFF</Button>
      </ButtonGroup>

      </WrapSandBox>
      
      </div>
     

    );
  }
}

export default Sandbox;
/* eslint-enable */
