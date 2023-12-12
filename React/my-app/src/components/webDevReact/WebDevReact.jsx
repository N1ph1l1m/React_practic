import React from "react";
import styled from "styled-components";
import Events from "./components/events";

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
export default class WebDevReact extends React.Component {
  state = {
    elem: 1,
  };

  handlerComponents = () => {
    this.setState((prevState) => ({
      elem: 1,
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
        </NavigatorWrap>

        <ContentWrap>
        <h1>WebDevReact</h1>
        {component}</ContentWrap>
      </MainLayout>
    );
  }
}
