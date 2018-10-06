import React, { Component } from 'react';

class ContactInfo extends Component {

    constructor(props){
        super(props)
        this.state = {name:this.props.name}
    }

    render() {
        return (
            <div>
                {this.state.name}
                {console.log(this.props.name)}
            </div>
        );
    }
}

export default ContactInfo;
