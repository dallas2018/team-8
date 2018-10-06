import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col, Row } from 'reactstrap';

export default class Example extends React.Component {
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
              <Label for="Under17YrOld">How many children are there under your household that are 17 and under</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4+</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Text Area</Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input.
                It's a bit lighter and easily wraps to a new line.
              </FormText>
            </FormGroup>
            <FormGroup tag="fieldset">
              <legend>Radio Buttons</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option one is this and that—be sure to include why it's great
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio1" />{' '}
                  Option two can be something else and selecting it will deselect option one
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Option three is disabled
                </Label>
              </FormGroup>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="checkbox" />{' '}
                Check me out
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          </div>
          </Row>
          
    );
  }
}









// import React, {Component} from 'react';

// class HouseholdInfo extends Component{
//     constructor(props)
//     {
//         super(props)
//         this.state = 
//         {
//             maritalStatus: this.props.maritalStatus,
//             annualIncome: this.props.annualIncome,
//             numOfChildren: this.props.numOfChildren,
//             numOfYoungAdults: this.props.numOfYoungAdults,
//             numOfAdults: this.props.numOfAdults,
//             checkingAccount: this.props.checkingAccount,
//             savingsAccount: this.props.savingsAccount,
//             paydayLoan: this.props.paydayLoan,
//             carTitleLoan: this.props.carTitleLoan
//         }
//     }

//     render()
//     {
//         return(
//             <div>
//                 <h2>Congratulations, we just need a little bit more information so we can make you successful</h2>
//             <form>
//                 <label>
//                         Marital Status:
//                         <select maritalStatus = "Marital Status">
//                         <option value="none"></option>
//                         <option value="Single">Single</option>
//                         <option value="Married">Married</option>
//                         <option value="Widowed">Widowed</option>
//                         </select> 
//                         <div>Annnual Income:  
//                         <input type="text" annualIncome="annualIncome"/>
//                         </div>
//                         <div>Number of Children:
//                         <select maritalStatus = "Marital Status">
//                         <option value="none"></option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4+">4+</option>
//                         </select> 
//                         </div>
//                         <div>Number of Young Adults (18-24) in the Household:
//                         <select numOfYoungAdults = "Number young Adults in Household">
//                         <option value="none"></option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4+">4+</option>
//                         </select> 
//                         </div>
//                         <div>Number of Adults in the Household:
//                         <select numOfAdults = "Number Adults in Household">
//                         <option value="none"></option>
//                         <option value="1">1</option>
//                         <option value="2">2</option>
//                         <option value="3">3</option>
//                         <option value="4+">4+</option>
//                         </select> 
//                         </div>
//                         <div>Do you have a Checkings Account:
//                         <select checkingAccount = "CheckingsAccount">
//                         <option value="none"></option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                         </select> 
//                         </div>
//                         <div>Do you have a Savings Account:
//                         <select savingsAccount = "SavingsAccount">
//                         <option value="none"></option>
//                         <option value="yes">Yes</option>
//                         <option value="no">No</option>
//                         </select> 
//                         </div>
                        
//                 </label>
//             </form>
//             </div>
//         )
//     }
// }
// export default HouseholdInfo;