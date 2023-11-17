/* eslint-disable */
import React from "react";
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './icon.css'

const Icon = ({
    name,
    className,// передаваемые стили
    onClick
  }) =>{

    const classes = classNames(
        'fa',
        `fa-${name}`,
        classNames,
    );
    return(
       <i
      className={classes}
      onClick={onClick}
       />
    );
};

Icon.propTypes = {
    name: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Icon.defaultProps = {
    name: '',
    className: '',
    onClick:()=>{}
}
export default Icon;
/* eslint-enable */