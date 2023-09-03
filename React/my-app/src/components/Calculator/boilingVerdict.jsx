import React from "react";
import styled from "styled-components";

const BoilingText = styled.p`
font-size:40px;
color:blue;
text-align:center;
`


export default function boilingVerdict(props){
    if(props.celsius >= 100){
        return <BoilingText>Вода кипит</BoilingText>
    }
    return <BoilingText>Вода не кипит</BoilingText>
}
