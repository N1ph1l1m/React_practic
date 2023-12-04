import React, { Fragment } from 'react';
import Icon from './icon';
import Button from "../button/button";
import ButtonGroup from '../groupButton/groupButton';

const SandBoxIcon = () => (
    <Fragment>
    <h2><span>1. Base icon:</span></h2>
<Icon size={2} onClick={()=>{ console.log('!!!');}} name="atom"/>
    
    <h2><span>2. Icon button  group:</span></h2>
    <ButtonGroup>
        <Button active>
            <Icon name="align-right"/>
        </Button>
        <Button active>
            <Icon name="align-center"></Icon>
        </Button>
        <Button>
        <Icon name="align-left" />
      </Button>
      <Button>
        <Icon name="align-justify" />
      </Button>
    </ButtonGroup>

    <h2><span>3. Icon with size 8rem</span></h2>
    <Icon title="badge" size={8} name="award" />

    <h2><span>4. Disabling icon functionality:</span></h2>
    <Icon size={2} disabled onClick={() => { console.log('!!!'); }} name="atom" />

    
    </Fragment>
);
export default SandBoxIcon;