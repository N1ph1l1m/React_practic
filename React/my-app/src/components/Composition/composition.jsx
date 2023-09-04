import React from "react";
import styled from "styled-components";



const CompositionWrap = styled.div`
margin:0px auto;
width:400px;
height:400px;
border:1px solid red;
`;



export default class Composition extends React.Component{
    render() {
        return (
            <CompositionWrap>
                <h1>
                    Composition
                </h1>    
            </CompositionWrap>
        );
    }
}