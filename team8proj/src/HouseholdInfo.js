import React, {Component} from 'react';

class HouseholdInfo extends Component{
    constructor(props)
    {
        super(props)
        this.state = 
        {
            maritalStatus: this.props.maritalStatus,
            annualIncome: this.props.annualIncome,
            numOfChildren: this.props.numOfChildren,
            numOfYoungAdults: this.props.numOfYoungAdults,
            numOfAdults: this.props.numOfAdults,
            checkingAccount: this.props.checkingAccount,
            savingsAccount: this.props.savingsAccount,
            paydayLoan: this.props.paydayLoan,
            carTitleLoan: this.props.carTitleLoan
        }
    }

    render()
    {
        return(
            <div>
                {this.state.maritalStatus}
                {console.log(this.props.maritalStatus)}
            </div>
            <form>
                <label>
                        Marital Status:  
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
        )
    }
}
export default HouseholdInfo;