import React from "react";
import styled from "styled-components";
import SandBoxButton from "./components/button/sandBoxButton";
import SandBoxGroupButton from "../webDevComponents/components/groupButton/sandBoxGroupButton";
import SandBoxIcon from "./components/icon/sandBoxIcon";

const ContentWrap = styled.div`
${'' /* margin:0px auto; */}
border:1px solid red;
display:flex;
justify-content:center;
flex-direction:column;
width:800px;
`

export default class DevComponetns extends React.Component{
    render(){
        return(
            <> 
                <h1>Course components cours WebDev</h1> 


                {/* <ContentWrap>
                <h2> Button</h2>
                <SandBoxButton></SandBoxButton>
                </ContentWrap>
                <ContentWrap>
                <h2> Group Button</h2>
                <SandBoxGroupButton></SandBoxGroupButton>
                </ContentWrap> */}

                <ContentWrap>
                <h2> Icon</h2>
                <SandBoxIcon></SandBoxIcon>
                </ContentWrap>
               
               
            </>
        )
    }
}