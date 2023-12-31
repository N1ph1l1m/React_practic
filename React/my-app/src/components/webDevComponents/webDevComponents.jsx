import React from "react";
import styled from "styled-components";
import SandBoxButton from "./components/button/sandBoxButton";
import SandBoxGroupButton from "../webDevComponents/components/groupButton/sandBoxGroupButton";
import SandBoxIcon from "./components/icon/sandBoxIcon";
import SandBoxImage from "./components/image/SandBoxImage";
import SandBoxСhip from "./components/chip/SandBoxChip";
import SandBoxBadge from "./components/badge/SandBoxBadge";
import SandboxListGroup from "./components/listGroup/SandBodListGroup";
import SandBoxInput from "./components/input/SandBoxInput"
import SandboxTabBar from "./components/tabBar/SandBoxTabBar";
import SandboxToolTip from "./components/toolTip/SandBoxToolTip";
import SandboxModal from "./components/modal/SandBoxModal";
const MainLayout = styled.div`
  width: 1300px;
  min-height: 50%;
  display: flex;
  justify-content: start;
  flex-flow: row wrap;
  overflow: hidden;  
`;
const ContentWrap = styled.div`
  width: 1090px;
  height: 100%;
`;
const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
`;
const NavigatorWrap = styled.div`
  background-color: #d43728;
  box-shadow: 1px 1px 10px #777;
  width: 200px;
  min-height: 1000px;
  display: flex;
  flex-flow: column wrap;
`;
const NavigatorLogo = styled.div`
  text-align: center;
  padding: 5px;
`;
const NavButton = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0px solid transparent;
  width: 100%;
  color: #fff;
  text-decoration: none;
  align-items: center;
  border-left: 3px solid transparent;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 5px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    border-color: #ebebeb;
  }
`;
 class DevComponetns extends React.Component {
  // constructor(props) {
  //   super(props);
  
  //   // this.handlerButton = this.handlerButton.bind(this);
  //   // this.handlerButtonGroup = this.handlerButtonGroup.bind(this);
  //   // this.handlerIcon = this.handlerIcon.bind(this);
  //   // this.handlerImage = this.handlerImage.bind(this);
  //   // this.handlerChip = this.handlerChip.bind(this);
  //   // this.handlerBadge = this.handlerBadge.bind(this);
  //   // this.handlerListGroup = this.handlerListGroup.bind(this);
  //   // this.handlerInput = this.handlerInput.bind(this);
  //   // this.handlerTabBar = this.handlerTabBar.bind(this);
  //   // this.handlerToolTip = this.handlerToolTip.bind(this)
  //   // this.handlerModal = this.handlerModal.bind(this)
  // }

  state = {
    elem: 1,
  };

  handlerButton = () => {
    this.setState((prevState) => ({
      elem: 1,
    }));
    console.log("This state = ");
  }
  handlerButtonGroup = () => {
    this.setState((prevState) => ({
      elem: 2,
    }));
  }
  handlerIcon = () => {
    this.setState((prevState) => ({
      elem: 3,
    }));
  }
  handlerImage = () =>{
    this.setState((prevState) => ({
      elem: 4,
    }));
  }
  handlerChip = () => {
    this.setState((prevState) => ({
      elem: 5,
    }));
  }
    handlerBadge = () => {
    this.setState((prevState) => ({
      elem: 6,
    }));
  }
  handlerListGroup = () => {
    this.setState((prevState) => ({
      elem: 7,
    }));
  }
  handlerInput = () => {
    this.setState((prevState) => ({
      elem: 8,
    }));
  }
  handlerTabBar = () =>{
    this.setState((prevState) => ({
      elem: 9,
    }));
  }
  handlerToolTip = () => {
    this.setState((prevState) => ({
      elem: 10,
    }));
  }
  handlerModal = () =>{
    this.setState((prevState) => ({
      elem: 11,
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
            <SandBoxGroupButton />
          </ContentItem>
        );
      case 3:
        return (
          <ContentItem>
            <h2>Icon</h2>
            <SandBoxIcon></SandBoxIcon>
          </ContentItem>
        );
      case 4:
        return (
          <ContentItem>
            <h2>Icon</h2>
            <SandBoxImage></SandBoxImage>
          </ContentItem>
        );
      case 5:
        return (
          <ContentItem>
            <h2>Chip</h2>
            <SandBoxСhip></SandBoxСhip>
          </ContentItem>
        );

        case 6:
            return (
              <ContentItem>
                <h2>Badge</h2>
                <SandBoxBadge></SandBoxBadge>
              </ContentItem>
            );
            case 7:
              return (
                <ContentItem>
                  <h2>ListGroup</h2>
                  <SandboxListGroup></SandboxListGroup>
                </ContentItem>
              );
            case 8 :
              return (
                <ContentItem>
                  <h2>Input</h2>
                  <SandBoxInput></SandBoxInput>
                </ContentItem>
              );
              case 9 :
                return (
                  <ContentItem>
                    <h2>TabBar</h2>
                    <SandboxTabBar></SandboxTabBar>
                  </ContentItem>
                );
                case 10 :
                  return (
                    <ContentItem>
                      <h2>Tool Tip</h2>
                      <SandboxToolTip></SandboxToolTip>
                    </ContentItem>
                  );
                  case 11 :
                    return (
                      <ContentItem>
                        <h2>Modal</h2>
                        <SandboxModal></SandboxModal>
                      </ContentItem>
                    );
      default:
        return null;
    }
  }

  render() {
    const component = this.renderComponent();
    return (
      <MainLayout>
        <NavigatorWrap>
          <NavigatorLogo>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              height="60"
              alt="logo"
            />
          </NavigatorLogo>
          <NavButton onClick={this.handlerButton}>Button</NavButton>
          <NavButton onClick={this.handlerButtonGroup}>Button Group</NavButton>
          <NavButton onClick={this.handlerIcon}>Icon</NavButton>
          <NavButton onClick={this.handlerImage}>Image</NavButton>
          <NavButton onClick={this.handlerChip}>Chip</NavButton>
          <NavButton onClick={this.handlerBadge}>Badge</NavButton>
          <NavButton onClick={this.handlerListGroup}>ListGroup</NavButton>
          <NavButton onClick={this.handlerInput}>Input</NavButton>
          <NavButton onClick={this.handlerTabBar}>Tab Bar</NavButton>
          <NavButton onClick={this.handlerToolTip}>Tool  Tip</NavButton>
          <NavButton onClick={this.handlerModal}>Modal windows</NavButton>
        </NavigatorWrap>

        <ContentWrap>{component}</ContentWrap>
      </MainLayout>
    );
  }
}
export default DevComponetns;