import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";

const number = [1, 2, 3, 4, 5, 78];
const listItem = number.map((numbers) => <li>{numbers}</li>);

function NumberLIstItem(props) {
  const numbers = props.num;
  const listItems2 = numbers.map((item) => <li>{item}</li>);
  return (
    <ul>
      <li>{listItems2}</li>
    </ul>
  );
}

function NumberListItemKey(props) {
  const number = props.numK;
  const listItem3 = number.map((num) => <li key={num.toString()}>{num}</li>);
  return (
    <ul>
      <li>{listItem3}</li>
    </ul>
  );
}
function NumberListItemIndex(props) {
  const number = props.numIndex;
  const numList = number.map((numI, index) => <li key={index}>{numI}</li>);
  return <ul>{numList}</ul>;
}
function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumListValue(props) {
  const numList = props.number;
  return (
    <ul>
      {numList.map((numList) => (
        <ListItem key={numList.toString()} value={numList} />
      ))}
    </ul>
  );
}

export default class SecondComponent extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            show: false,
        }
        this.showComponent = this.showComponent.bind(this);
    
        
    }
    showComponent(){
        this.setState((prevState) =>({
            show: !prevState.show,
        }));
    }
    renderComponent(){
        if(this.state.show === true){
            return(
              <this.secondCmp/>
            );
        }
    } 
    
    secondCmp(){
        return(
            <Container>
            <Row>
              <Col className="bg-light border">
                <ul>
                  <li>{listItem}</li>
                </ul>
              </Col>
    
              <Col className="bg-light border">
                <NumberLIstItem num={number} />
              </Col>
            </Row>
            <Row>
              <Col className="bg-light border">
                <h1>Li with Key</h1>
                <NumberListItemKey numK={number} />
              </Col>
    
              <Col className="bg-light border">
                <h1>Li with Index</h1>
                <NumberListItemIndex numIndex={number} />
              </Col>
            </Row>
            <Row>
              <Col className="bg-light border">
                <span>fff</span>
                <NumListValue number={number} />
              </Col>
            </Row>
          </Container>
        )
    }
  render() {
    const component = this.renderComponent()
    return (
     <>
        <Container>
        <Row>
        <button onClick={this.showComponent}>Show second component</button>
        </Row>
        
        </Container>
        
        {component}
     </>
    );
  }
}
