import React, { Component } from 'react';

class DemagraInfo extends Component {

    constructor(props){
        super(props)
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
                <form>
                    <label>
                        Gender:
                        <input type="text" gender="gender"/>
                        <div>Race:
                        <input type="text" race="race"/>
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
