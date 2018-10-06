import React, { Component } from "react";

import { Progress } from "reactstrap";

class DemagraInfo extends Component {
  constructor(props) {
    super(props);
    //this.home = this.home.bind(this);
    this.state = {
      gender: this.props.gender,
      race: this.props.race,
      vet: this.props.vet,
      pris: this.props.pris
    };
  }

  render() {
    return (
      <div>
        <div className="text-center">75%</div>
        <Progress value="75" />
      </div>
      // <div>
      //   <h1>
      //   Please enter your demagraphic information below:
      //   </h1>
      //     <form>
      //         <label>
      //             Gender:
      //             <input type="text" gender="gender"/>
      //             <div>Race:
      //             <select race = "Race">
      //             <option value="White"></option>
      //             </div>
      //             <div>Veteran Status:
      //             <input type="vet" vet="vet"/>
      //             </div>
      //             <div>Conviction:
      //             <input type="text" pris="pris"/>
      //             </div>
      //         </label>
      //     </form>
      // </div>
    );
  }
}

export default DemagraInfo;
