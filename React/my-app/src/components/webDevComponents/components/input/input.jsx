import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './input.css';

const Input = ({
    id,
    className,
    label,
    error,
    ...attrs
})=>{
    const classes = classNames(
        'input',
        className,
        {error},
    );
    return (
        <div>

        </div>
    )
}
export default Input;