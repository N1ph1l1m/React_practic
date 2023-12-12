import React from "react";
// import styled from "styled-components";
// import Portal  from "./portal";
import PropTypes from 'prop-types';

import './modal.css';


const Modal = (
    title, isOpen, onCancel, onSubmit, children,
) =>{

        return(
        <>
        <p>Modal111</p>
        </>
        )  
};

Modal.propTypes = {
    title: PropTypes.string,
    isOpen: PropTypes.bool,
    onCancel: PropTypes.func,
    onSubmit: PropTypes.func,
    children: PropTypes.node,
  };
  
  Modal.defaultProps = {
    title: 'Modal title',
    isOpen: false,
    onCancel: () => {},
    onSubmit: () => {},
    children: null,
  };
export default Modal;