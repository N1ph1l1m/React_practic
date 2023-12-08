import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';



const ListGroupItem = ({})=>{
    
} 


ListGroupItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    disabled: PropTypes.bool,
    active: PropTypes.bool,
  };
  
  ListGroupItem.defaultProps = {
    children: null,
    className: '',
    tag: 'li',
    disabled: false,
    active: false,
  };

  export default ListGroupItem;