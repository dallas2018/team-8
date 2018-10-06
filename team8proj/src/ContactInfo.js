import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ContactInfo extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:this.props.name,
            email:this.props.email,
            password:this.props.password,
            street:this.props.street,
            city:this.props.city,
            state:this.props.state,
            zip:this.props.zip,
            phone:this.props.phone,
            dob:this.props.dob,
        }
    }

    render() {
        return (
            <div>
                <h1>
                Welcome to the SER Job Application
                </h1>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                        <div>Email:
                        <input type="text" name="email"/>
                        </div>
                        <div>Password:
                        <input type="password" name="password"/>
                        </div>
                        <div>Street:
                        <input type="text" name="street"/>
                        </div>
                        <div>City:
                        <input type="text" name="city"/>
                        </div>
                        <div>State:
                        <input type="text" name="state"/>
                        </div>
                        <div>Zip:
                        <input type="text" name="zip"/>
                        </div>
                        <div>Phone:
                        <input type="text" name="phone"/>
                        </div>
                        <div>DOB:
                        <input type="Date" name="DOB"/>
                        </div>
                    </label>
                </form>
                //<img className="menu_icons" src={myhome}/>;
                //<label className="menu_items" onClick={this.home}>Next page</label>;
            </div>
        );
    }
}

export default ContactInfo;
