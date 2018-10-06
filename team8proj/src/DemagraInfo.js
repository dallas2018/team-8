import React, { Component } from 'react';
import './styling.css';

class DemagraInfo extends Component {

    constructor(props){
        super(props);
        this.home = this.home.bind(this);
        this.state = {
            gender:this.props.gender,
            race:this.props.race,
            vet:this.props.vet,
            pris:this.props.pris,
        }
    }

    render() {
        return (
          <div>
            <h1>
            Please enter your demagraphic information below:
            </h1>
              <form>
                  <label>
                      Gender:
                      <input type="text" gender="gender"/>
                      <div>Race:
                      <select race = "Race">
                      <option value="Black or African American"></option>
                      <option value="American Indian or Alaskan Native"></option>
                      <option value="Asian (not Pacific Islander)"></option>
                      <option value="Hawaiian Native or Pacific Islander"></option>
                      <option value="White or Caucasian"></option>
                      <option value="Two or More"></option>
                      <option value="Other"></option>
                      </select>
                      </div>
                      <div>Veteran Status:
                      <input type="vet" vet="vet"/>
                      </div>
                      <div>Conviction:
                      <input type="text" pris="pris"/>
                      </div>
                  </label>
              </form>
          </div>
        );
    }
}

export default DemagraInfo;
