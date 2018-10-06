import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import ContactInfo from "./ContactInfo";
import {
  Jumbotron,
  Button,
  FormGroup,
  Label,
  Input,
  Col,
  Row
} from "reactstrap";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    function handleLogin(e) {
      e.preventDefault();

      console.log("Login Clicked");
    }
    return (
      <div>
        <Row>
          <Col md="3" sm="4" />
          <Col md="6" sm="4">
            <Jumbotron>
              <h3 className="display-3 text-center">
                Welcome to SER Houston Application
              </h3>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" />
              </FormGroup>
              <span>
                {/* <Link to="/ContactInfo">Start</Link> */}
                <Button color="primary" onClick={handleLogin}>
                  Login
                </Button>
              </span>
              <hr className="my-2" />
            </Jumbotron>
          </Col>
          <Col md="3" sm="4" />
        </Row>
      </div>
    );
  }
}

export default Welcome;
