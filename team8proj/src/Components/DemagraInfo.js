import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Col, Row } from 'reactstrap';

export default class ContactInfo extends React.Component {
  render() {
    return (
      <Row>
          <Col md="3" sm="4" />
          <div> <h1>Very close to being done now ...</h1>
          <Form>
            <FormGroup tag="fieldset">
            <legend>Gender</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Male
              </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Female
            </Label>
            </FormGroup>
            </FormGroup>
 
            <FormGroup tag="fieldset">
            <legend>Are you Hispanic</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              No
            </Label>
            </FormGroup>
            </FormGroup>
            
            <FormGroup>
              <Label for="exampleEmail">Please list languages that you know, seperated by commas</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="e.g English, Spanish, etc." />
           </FormGroup>


          <FormGroup tag="fieldset">
            <legend>Are you a U.S. Citizen?</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              No
            </Label>
            </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label for="MarriageStat">I attest, under penalty of perjury, that I am a (choose one of the following):</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Select one</option>
                <option>Citizen of the United States</option>
                <option>Non-citizen national of the United States</option>
                <option>Lawful permanent resident</option>
              </Input>
            </FormGroup>

            <FormGroup tag="fieldset">
            <legend>Do you have a valid for of identification?</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              No
            </Label>
            </FormGroup>
            </FormGroup>

            <FormGroup>
              <Label for="MarriageStat">What is your primary form of transportation?</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Select one</option>
                <option>Own/Lease Vehicle</option>
                <option>Can borrow vehicle</option>
                <option>Public transit</option>
                <option>Vehicle is nonoperable</option>
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for="MarriageStat">What is your Housing status?</Label>
              <Input type="select" name="select" id="exampleSelect">
                <option>Select one</option>
                <option>Homeowner</option>
                <option>Renter Unsubsidized</option>
                <option>Renter Subsidized</option>
                <option>Living with a friend or family</option>
                <option>Staying in a shelter</option>
                <option>Homeless</option>
              </Input>
            </FormGroup>

            <FormGroup tag="fieldset">
            <legend>Are you over 24?</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" />{' '}
                Yes
              </Label>
            </FormGroup>
            <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              No
            </Label>
            </FormGroup>
            </FormGroup> 
        </Form>
        <Col md="8" sm="4" />
        <Button color="primary">Submit</Button>{' '}
        </div>
        </Row>
          
    );
  }
}











// import React, { Component } from "react";

// import { Progress } from "reactstrap";

// class DemagraInfo extends Component {
//   constructor(props) {
//     super(props);
//     //this.home = this.home.bind(this);
//     this.state = {
//       gender: this.props.gender,
//       race: this.props.race,
//       vet: this.props.vet,
//       pris: this.props.pris
//     };
//   }

//   render() {
//     return (
//       <div>
//         <div className="text-center">75%</div>
//         <Progress value="75" />
//       </div>
//       // <div>
//       //   <h1>
//       //   Please enter your demagraphic information below:
//       //   </h1>
//       //     <form>
//       //         <label>
//       //             Gender:
//       //             <input type="text" gender="gender"/>
//       //             <div>Race:
//       //             <select race = "Race">
//       //             <option value="White"></option>
//       //             </div>
//       //             <div>Veteran Status:
//       //             <input type="vet" vet="vet"/>
//       //             </div>
//       //             <div>Conviction:
//       //             <input type="text" pris="pris"/>
//       //             </div>
//       //         </label>
//       //     </form>
//       // </div>
//     );
//   }
// }

// export default DemagraInfo;
