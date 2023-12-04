import React, { Fragment } from 'react';
//import Icon from './icon';
import Button from "../button/button";
import ButtonGroup from '../groupButton/groupButton';
import { AiFillApple,AiFillAppstore,AiFillAlipayCircle } from "react-icons/ai";
import './icon.css'
import styled from "styled-components";

const SandBoxIconWrap = styled.div`
display:flex;
justify-content: center;
flex-flow: column wrap;

`

const SandBoxIcon = () => (
  <SandBoxIconWrap>
   <h2><span>1. Base icon:</span></h2>
   <Button className="buttonSize" active>
        <AiFillAlipayCircle  size={44}/>Simple Button 
    </Button>
    
<h2><span>2. Icon button  group:</span></h2>

<ButtonGroup className="buttonGroupSize" vertical >
    <Button className="buttonSize" active>
        <AiFillApple  size={44}/>Apple Button 
    </Button>

    <Button className="buttonSize">
        <AiFillAppstore size={44} />Windows Button
    </Button>
</ButtonGroup>

<h2><span>3. Icon with size 8rem</span></h2>


<h2><span>4. Disabling icon functionality:</span>
<Button className="buttonSize" disabled>
        <AiFillAppstore size={44} />Windows Button
    </Button></h2>
  </SandBoxIconWrap>
 


    
   
);
export default SandBoxIcon;