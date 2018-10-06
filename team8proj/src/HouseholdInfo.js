import React, {Component} from 'react';

class HouseholdInfo extends Component{
    constructor(props)
    {
        super(props)
        this.state = {maritalStatus: this.props.maritalStatus}
    }

    render()
    {
        return(
            <div>
                {this.state.maritalStatus}
                {console.log(this.props.maritalStatus)}
            </div>
        )
    }
}