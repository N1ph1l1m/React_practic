import React from "react";
import styled from "styled-components";
import Events from "./components/events";
import FormWevDev from "./components/formWebDev";
import Portal from "./components/portal";
import LessonContext from "./components/context";

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
class WebDevReact extends React.Component {
  state = {
    elem: 1,
  };

  handlerComponents = () => {
    this.setState((prevState) => ({
      elem: 1,
    }));
    console.log("This state = " + this.state.elem);
  }
  handlerFragments = () => {
    this.setState((prevState) => ({
      elem: 2,
    }));
    console.log("This state = " + this.state.elem);
  }

  handlerHoc = () => {
    this.setState((prevState) => ({
      elem: 3,
    }));
    console.log("This state = " + this.state.elem);
  }
  handlerContext = () => {
    this.setState((prevState) => ({
      elem: 4,
    }));
    console.log("This state = " + this.state.elem);
  }
  renderComponent() {
    switch (this.state.elem) {
      case 1:
        return (
          <ContentItem>
            <h2>Events</h2>
            <Events/>
          </ContentItem>
        );
        case 2:
          return (
            <ContentItem>
              <h2>Fragments</h2>
              <FormWevDev/>
            </ContentItem>
          );
          case 3:
            return (
              <ContentItem>
                <h2>Portal</h2>
                <Portal/>
              </ContentItem>
            );
            case 4:
              return (
                <ContentItem>
                  <h2>Context</h2>
                  <LessonContext/>
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
          <NavButton onClick={this.handlerComponents}>Events</NavButton>
          <NavButton onClick={this.handlerFragments}>Fragments</NavButton>
          <NavButton onClick={this.handlerHoc}>Portal</NavButton>
          <NavButton onClick={this.handlerContext}>Context</NavButton>
        </NavigatorWrap>

        <ContentWrap>
        <h1>WebDevReact</h1>
        {component}</ContentWrap>
      </MainLayout>
    );
  }
}
export default  WebDevReact;