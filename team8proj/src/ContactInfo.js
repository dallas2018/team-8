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







// import React, { Component } from 'react';
// import { Button, View, Text } from 'react-native';
// import { createStackNavigator } from 'react-navigation';

// class ContactInfo extends Component {

//     constructor(props){
//         super(props)
//         this.state = 
//             name:this.props.name,
//             email:this.props.email,
//             password:this.props.password,
//             street:this.props.street,
//             city:this.props.city,
//             state:this.props.state,
//             zip:this.props.zip,
//             phone:this.props.phone,
//             dob:this.props.dob,
//         }
//     }

//     render() {
//         return (
//             <div>
//             <div className="text-center">25%</div>
//             <Progress value="25" />
//           </div>
//             <div>
//                 <h1>
//                 Welcome to the SER Job Application
//                 </h1>
//                 <form>
//                     <label>
//                         Name:
//                         <input type="text" name="name"/>
//                         <div>Email:
//                         <input type="text" email="email"/>
//                         </div>
//                         <div>Password:
//                         <input type="text" password="password"/>
//                         </div>
//                         <div>Street:
//                         <input type="text" street="street"/>
//                         </div>
//                         <div>City:
//                         <input type="text" city="city"/>
//                         </div>
//                         <div>State:
//                         <input type="text" state="state"/>
//                         </div>
//                         <div>Zip:
//                         <input type="text" zip="zip"/>
//                         </div>
//                         <div>Phone:
//                         <input type="text" phone="phone"/>
//                         </div>
//                         <div>DOB:
//                         <input type="text" dob="DOB"/>
//                         </div>
//                     </label>
//                 </form>
//                 //<img className="menu_icons" src={myhome}/>;
//                 //<label className="menu_items" onClick={this.home}>Next page</label>;
//             </div>
//         );
//     }
// }

// export default ContactInfo;
