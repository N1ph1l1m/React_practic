/* eslint-disable */
import React, { Fragment } from 'react';
import Badge from './badge';
import Button from '../button/button';
import Icon from '../icon/icon';

import styled from "styled-components";

const BadgeWrap =styled.div`
display: block;
position: relative;
/* border:2px solid green; */
width: max-content;
height: max-content;`

const Sandbox = () => (
  <Fragment>

    <h2><span>1. Badges with text:</span></h2>

    <BadgeWrap>  
    <Badge value="new"  className='positBadge'/>
    <Button>
      <Icon name="envelope" />
    </Button>
    </BadgeWrap>
    
    <BadgeWrap>
    <Badge circle value="new" />
    <Button>
      <Icon name="envelope" />
    </Button>
    </BadgeWrap>
  

    <h2><span>2. Badges with number:</span></h2>
    <BadgeWrap>
    <Badge value={2} />
    <Button>
      <Icon name="comment" />  
    </Button>
    </BadgeWrap>
   

   <BadgeWrap>
    <Badge circle value={12} />
     <Button>
      <Icon name="comment-dots" />
    </Button>
   </BadgeWrap>


    <h2><span>3. Inline Badges:</span></h2>
    <BadgeWrap>
        <Badge value={1} />  
        <Button>
      <Icon name="phone" />
    </Button>
    </BadgeWrap>

    <BadgeWrap>
      <Badge inline value="1 missed" />
    <Button>
      <Icon name="phone" />
    </Button>
    </BadgeWrap>
  

    <h2><span>4. Outer Badges:</span></h2>
    <Button style={{ marginRight: '20px' }}>
      <Icon name="bell" />
      <Badge outer value={1} />
    </Button>
    <Button>
      <Icon name="wifi" />
      <Badge outer warning value={1} />
    </Button>

    <h2><span>5. Warning, Alert, Success, Info Badges:</span></h2>

  <BadgeWrap>
    <Badge circle warning value={1} />
    <Button>
        <Icon name="bullhorn" />
    </Button>
  </BadgeWrap>
  <br />

  <BadgeWrap>
    <Badge circle alert value={1} />
    <Button>
    <Icon name="inbox" />
    </Button>
  </BadgeWrap>
  <br />
  <BadgeWrap>
  <Badge circle success value={1} />
    <Button>
    <Icon name="paper-plane" />
    </Button>
  </BadgeWrap>
  <br />

  
  <BadgeWrap>
  <Badge circle info value={1} />
    <Button>
    <Icon name="rss" />
    </Button>
  </BadgeWrap>

  </Fragment>
);

export default Sandbox;
/* eslint-enable */
