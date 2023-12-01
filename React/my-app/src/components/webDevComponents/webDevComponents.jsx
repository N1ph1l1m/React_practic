import React from "react";
import styled from "styled-components";
import SandBoxButton from "./components/button/sandBoxButton";
import SandBoxGroupButton from "../webDevComponents/components/groupButton/sandBoxGroupButton";
import SandBoxIcon from "./components/icon/sandBoxIcon";

const MainLayout = styled.div`
width:1300px;
min-height:50%;
display:flex;
justify-content:start;
flex-flow:row wrap;
overflow:hidden;
`
const ContentWrap = styled.div`
width:1090px;
height:100%;

`
const ContentItem = styled.div`
display:flex;
flex-direction:column;
`
const NavigatorWrap  = styled.div`
    background-color: #D43728;
    box-shadow: 1px 1px 10px #777;
    width: 200px;
    min-height: 1000px;
    display:flex;
    flex-flow: column wrap;
`
const NavigatorLogo = styled.div`
  text-align: center;
    padding: 5px;
`
const NavButton = styled.button`
  align-items: center;
    background-color:transparent;
    border:0px  solid transparent;
    width: 100%;
    color: #fff;
    text-decoration: none;
    align-items: center;
    border-left: 3px solid transparent;
    font-weight: 500;
    font-size:25px;
    margin-bottom: 5px;
    &:hover {
    background-color: rgba(0,0,0,.2);
    border-color: #EBEBEB;
    
  }
`
export default class DevComponetns extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            elem:1,
        }
        this.handlerButton = this.handlerButton.bind(this);
        this.handlerButtonGroup = this.handlerButtonGroup.bind(this);
        this.handlerIcon = this.handlerIcon.bind(this);
    }

    handlerButton(){
        this.setState((prevState) =>({
            elem:1,
        }));
        console.log('This state = ');
    }
    handlerButtonGroup(){
        this.setState((prevState) =>({
            elem:2,
        }));
    }
    handlerIcon(){
        this.setState((prevState) =>({
            elem:3,
        }));
    }
    renderComponent() {
        switch (this.state.elem) {
            case 1:
                return (
                    <ContentItem>
                        <h1>Course components cours WebDev</h1>
                        <h2>Button</h2>
                        <SandBoxButton></SandBoxButton>
                    </ContentItem>
                );
            case 2:
                return (
                    <ContentItem>
                        <h2>Group Button</h2>
                        <SandBoxGroupButton></SandBoxGroupButton>
                    </ContentItem>
                );
            case 3:
                return (
                    <ContentItem>
                        <h2>Icon</h2>
                        <SandBoxIcon></SandBoxIcon>
                    </ContentItem>
                );
            default:
                return null;
        }
    }
    




    render(){
        const component = this.renderComponent();
        return(
            <MainLayout>
            <NavigatorWrap>
                <NavigatorLogo>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" height="60" alt="logo" />
                </NavigatorLogo>
                <NavButton onClick={this.handlerButton}>Button</NavButton>
                <NavButton onClick={this.handlerButtonGroup}>Button Group</NavButton>
                <NavButton onClick={this.handlerIcon}>Icon</NavButton>
            </NavigatorWrap>
           
            <ContentWrap>
               
            {component}

                
                </ContentWrap>
              
               
            </MainLayout>
        )
    }
}