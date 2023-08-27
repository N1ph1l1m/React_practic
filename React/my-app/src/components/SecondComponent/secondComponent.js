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
  render() {
    return (
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
        <Container>
          <Row>
            <Col>
              <h1>Li with Key</h1>
              <NumberListItemKey numK={number} />
            </Col>

            <Col>
              <h1>Li with Index</h1>
              <NumberListItemIndex numIndex={number} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col>
              <span>fff</span>
              <NumListValue number={number} />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
