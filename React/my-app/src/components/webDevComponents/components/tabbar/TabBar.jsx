import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './TabBar.css'

class TabBar extends Component{
    static propTypes ={
        children:PropTypes.node,
        className: PropTypes.string,
        vertical: PropTypes.bool,
    };
    static defaultProps = {
        children: null,
        className: '',
        vertical: false,
      };

      state = {
        activeTab: null,
      }
}
export default TabBar