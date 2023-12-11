import React from "react";
import styled from "styled-components";
import Portal  from "./portal";
import PropTypes from 'prop-types';

const ModalOverlay = styled.div`
`
const ModalWindow = styled.div`
`
const ModalHeader = styled.div`
`
const ModalBody = styled.div`
`
const ModalFooter = styled.div`
`
const ModalTitle = styled.div`
`
const Icon = styled.button``

const FooterButton = styled.button`
`

const ModalWindows = (
    //title,isOpen,onCancel,onSubmit,children
) =>{

        return(
        <>
        <h1>Modal windows</h1>
        <Portal>
            <ModalOverlay>
                <ModalWindow>
                <ModalHeader>
                    <ModalTitle>
                        {/* {title}
                    <Icon name='times' onClick={onCancel}></Icon> */}
                    </ModalTitle>
                </ModalHeader>

                <ModalBody>

                </ModalBody>

                <ModalFooter>
                    {/* <FooterButton onClick={onCancel} invert>Cancel</FooterButton>
                    <FooterButton onClick={onCancel}>Submit</FooterButton> */}
                </ModalFooter>

                </ModalWindow>
            </ModalOverlay>
        </Portal>
        </>
        )  
};
// ModalWindow.propTypes ={
//     title: PropTypes.string,
//     isOpen: PropTypes.bool,
//     onCancel:PropTypes.func,
//     onSubmit:PropTypes.func,
//     children:PropTypes.node,
// };
// ModalWindow.defaultProps={
//     title:'Modal title',
//     isOpen:false,
//     onCancel:()=>{},
//     onSubmit:()=>{},
// }
export default ModalWindows