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
                <h2>Congratulations, we just need a little bit more information so we can make you successful</h2>
            <form>
                <label>
                        Marital Status:
                        <select maritalStatus = "Marital Status">
                        <option value="none"></option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                        </select> 
                        <div>Annnual Income:  
                        <input type="text" annualIncome="annualIncome"/>
                        </div>
                        <div>Number of Children:
                        <select maritalStatus = "Marital Status">
                        <option value="none"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                        </select> 
                        </div>
                        <div>Number of Young Adults (18-24) in the Household:
                        <select numOfYoungAdults = "Number young Adults in Household">
                        <option value="none"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                        </select> 
                        </div>
                        <div>Number of Adults in the Household:
                        <select numOfAdults = "Number Adults in Household">
                        <option value="none"></option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                        </select> 
                        </div>
                        <div>Do you have a Checkings Account:
                        <select checkingAccount = "CheckingsAccount">
                        <option value="none"></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select> 
                        </div>
                        <div>Do you have a Savings Account:
                        <select savingsAccount = "SavingsAccount">
                        <option value="none"></option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        </select> 
                        </div>
                        
                </label>
            </form>
            </div>
        )
    }
}
export default HouseholdInfo;