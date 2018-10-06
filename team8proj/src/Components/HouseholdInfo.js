import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col, Row } from 'reactstrap';

export default class ContactInfo extends React.Component {
  render() {
    return (
      <Row>
          <Col md="3" sm="4" />
          <div> <h1>We want to get to know you more...</h1>
          <Form>
            <FormGroup>
              <Label for="MarriageStat">Marital Status</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Select Marital Status</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
                <option>Single</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="AnnualIncome">Annual Income</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Select Annual Income</option>
                <option>Under $5,000</option>
                <option>$5,000 - $10,0000</option>
                <option>$10,000 - $15,000</option>
                <option>$15,000 - $20,0000</option>
                <option>$20,000 - $25,000</option>
                <option>$25,000 - $30,0000</option>
                <option>$30,000 - $35,000</option>
                <option>$35,000 - $40,0000</option>
                <option>$40,000 - $45,000</option>
                <option>$45,000 - $50,0000</option>
                <option>$50,000 - $55,000</option>
                <option>$55,000 - $60,0000</option>
                <option>Over $60,000</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="Under17YrOld">How many children are there under your household that are 17 and under?</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="18-24YrOld">How many young adults are there under your household that are between 18 and 24></Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </Input>
              </FormGroup>
              <FormGroup>
              <Label for="adultsTotal">How many adults live in your household?</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </Input>
            </FormGroup>

          <FormGroup tag="fieldset">
          <legend>Checkings Account</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I have a Checkings Account
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I do not have a Checkings Account
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Savings Account</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I have a Savings Account
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I do not have a Savings Account
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Payday Loan</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I have a Payday Loan
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I do not have a Payday Loan
            </Label>
          </FormGroup>
        </FormGroup>

        <FormGroup tag="fieldset">
          <legend>Car Title Loan</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I have a Car Title Loan
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              I do not have a Car Title Loan
            </Label>
          </FormGroup>
        </FormGroup>
        </Form>
        <Col md="8" sm="4" />
        <Button color="primary">Continue to Success</Button>{' '}
        </div>
        </Row>
          
    );
  }
}
