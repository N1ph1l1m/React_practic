import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './toolTip.css';


class ToolTip extends React.Component{
    static propTypes = {
        children: PropTypes.node.isRequired,
        content: PropTypes.string,
        position: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
        style: PropTypes.objectOf(PropTypes.string),
      }
    
      static defaultProps = {
        content: 'Tooltip content',
        style: {},
        position: 'top'
      }
    
      state = {
        visible: false,
      }
      render() {
        return (
            <div>
                
            </div>
        );
      }
} 