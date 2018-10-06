import React from "react";
import { Button, Form, FormGroup, Label, Input, Col, Row } from "reactstrap";

export default class ContactInfo extends React.Component {
  render() {
    return (
      <Row>
        <Col md="3" sm="4" />
        <div>
          {" "}
          <h1>Welcome to SER Houston Online Application</h1>
          <h4>We are excited to help you become successful!</h4>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">First Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your First Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Last Name</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Last Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Address</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Street Address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="County">Please select your County</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Brazoria</option>
                <option>Chambers</option>
                <option>Fort Bend</option>
                <option>Galveston</option>
                <option>Harris</option>
                <option>Liberty</option>
                <option>Montgomery</option>
                <option>Waller</option>
                <option>Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                Please enter your Social Security
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Social Security"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Phone Choice">Preferred Phone</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Mobile</option>
                <option>Home</option>
                <option>Work</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail"> Number</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Phone Number"
              />
            </FormGroup>
          </Form>
          <Col md="8" sm="4" />
          <Button color="primary">You're almost done!</Button>{" "}
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
