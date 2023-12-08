import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


import './listGroup.css';

const ListGroup  = ({

}) =>{

}

ListGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  };
  
  ListGroup.defaultProps = {
    children: null,
    className: '',
    tag: 'ul',
  };

  export default ListGroup;