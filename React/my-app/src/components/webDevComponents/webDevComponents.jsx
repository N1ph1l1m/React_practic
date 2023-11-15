import React from "react";
//import styled from "styled-components";
import SandBoxButton from "./components/button/sandBoxButton";

export default class DevComponetns extends React.Component{
    render(){
        return(
            <> 
                <h1>Course components cours WebDev</h1> 

                <h2> Button</h2>
                <SandBoxButton></SandBoxButton>
            </>
        )
    }
}