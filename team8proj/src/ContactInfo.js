import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';

class ContactInfo extends Component {

    constructor(props){
        super(props)
        this.state = 
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
            <div className="text-center">25%</div>
            <Progress value="25" />
          </div>
            <div>
                <h1>
                Welcome to the SER Job Application
                </h1>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name"/>
                        <div>Email:
                        <input type="text" email="email"/>
                        </div>
                        <div>Password:
                        <input type="text" password="password"/>
                        </div>
                        <div>Street:
                        <input type="text" street="street"/>
                        </div>
                        <div>City:
                        <input type="text" city="city"/>
                        </div>
                        <div>State:
                        <input type="text" state="state"/>
                        </div>
                        <div>Zip:
                        <input type="text" zip="zip"/>
                        </div>
                        <div>Phone:
                        <input type="text" phone="phone"/>
                        </div>
                        <div>DOB:
                        <input type="text" dob="DOB"/>
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
