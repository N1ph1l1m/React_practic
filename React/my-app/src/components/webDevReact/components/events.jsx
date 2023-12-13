import React from "react";
//import styled from "styled-components";
import PropTypes from "prop-types";

const MyLink = ({ text, onClick }) => (
  <a href="/devComponents" onClick={onClick}>
    {text}
  </a>
);


const people = ['Jack','Max','Lie'];

MyLink.propType = {
  text: PropTypes.text,
  onClick: PropTypes.func,
};
MyLink.defaultProps = {
  text: "Test text",
  onClick: () => {},
};
const Tab1 = () => {
  return <h1>Tab 1 </h1>;
};
const Tab2 = () => {
  return <h1>Tab 2 </h1>;
};
const Tab3 = () => {
  return <h1>Tab 3 </h1>;
};


const TABS_BTN = [
    {
        dataName:1,
        title:'Tab1'
    },
    {
        dataName:2,
        title:'Tab2'
    },
    {
        dataName:3,
        title:'Tab3'
    },
  ];

class Events extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log("Click on link");
  };
  state = {
    activeTab: 1,
  };
  handleClickTab = (e) => {
    this.setState({
      activeTab: +e.target.getAttribute("data-name"),
    });
  };



  render() {
    const val = 9;
    const { activeTab } = this.state;

    console.log(this.state);
    return (
      <>
        <MyLink onClick={this.handleClick} />
        <p>Условный рендеринг</p>
        {/* ternary */}
        {val >= 10 ? (
          <h2>Crate than 10</h2>
        ) : (
          <h2>
            Less than <em>{val}</em>
          </h2>
        )}
        {/* && */}
        {val && <h2>We have val</h2>}
            {/* Old version*/}
        {/* <button data-name={1} onClick={this.handleClickTab}>
          Tab1
        </button>
        <button data-name={2} onClick={this.handleClickTab}>
          Tab2
        </button>
        <button data-name={3} onClick={this.handleClickTab}>
          Tab3
        </button> */}
        {/* New version */}
        {}
        {activeTab === 1 ? <Tab1 /> : activeTab === 2 ? <Tab2 /> : <Tab3 />}
        <h1>Lists & Keys</h1>
        <ul>
        {people.map((people,index)=>(
            <li key={index}>{people}</li>
        ))}
        </ul>
      </>
    );
  }
}
export default Events;
