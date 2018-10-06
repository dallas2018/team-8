import React, { Component } from 'react';

class DemagraInfo extends Component {

    constructor(props){
        super(props);
        this.state = {race:this.props.race, gender:this.props.gender, vete}
    }

    render() {
        return (
            <div>
              <form>
                <label>
                  Gender:
                  <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
              </form>
              <form>
                <label>
                  Race:
                  <input type="text" value={this.state.value} onChange={this.handleChange}/>
                </label>
              </form>

            </div>
        );
    }
}

export default ContactInfo;
