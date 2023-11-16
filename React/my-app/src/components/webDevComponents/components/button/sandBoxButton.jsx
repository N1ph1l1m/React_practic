/* eslint-disable */
import React, { Fragment } from 'react';
import Button from './button';

const Sandbox = () => (
  <Fragment>

    <h2><span>1. Text and onClick function:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }}>Button text</Button>

    <h2><span>2. Disabled button:</span></h2>
    <Button onClick={() => { console.log('!!!!'); }} disabled />

    <h2><span>3. Active button:</span></h2>
    <Button className='newWidth'>Claasses</Button>

    <h2><span>4. Supporting data, type and etc. attributes:</span></h2>
    <Button data-name="button">Button</Button>
    <Button type="submit" >Submit</Button>

    <h2><span>5. Button link</span></h2>
    <Button href="test">Link</Button>
    <Button href="test" disabled>Link</Button>
    <Button></Button>
  </Fragment>
);

export default Sandbox;
/* eslint-enable */
