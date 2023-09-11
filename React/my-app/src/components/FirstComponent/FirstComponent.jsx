import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from "reactstrap";

export default class FirstComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Alex",
      count: 1,
    };
    this.handler = this.handler.bind(this);
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.reset = this.reset.bind(this);
  }
  handler() {
    this.setState((state) => ({
      name: "Ingrid",
    }));
  }
  plus() {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  }
  minus() {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  }
  reset() {
    this.setState((state) => ({
      count: 0,
    }));
  }
  render() {
    const name = this.state.name;
    const count = this.state.count;
    return (
      <Container>
        <Row>
          <Col>
            <h1> Name {name}</h1>
          </Col>
          <Col>
            <Button color="primary" size="sm" onClick={this.handler}>
              Change name
            </Button>
          </Col>
        </Row>
        <Row>
          <Col className="bg-light border">
            <h2> {count} </h2>
            <Row>
              <Col>
                <Button color="primary" size="sm" onClick={this.plus}>
                  Plus
                </Button>
              </Col>
              <Col>
                <Button color="primary" size="sm" onClick={this.minus}>
                  Minus
                </Button>
              </Col>
              <Col>
                <Button color="primary" size="sm" onClick={this.reset}>
                  Reset
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
        <Container></Container>
      </Container>
    );
  }
}
