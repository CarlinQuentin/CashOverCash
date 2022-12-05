import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import '../App.css';

function InputFields(props) {
let mortgageDefault, downPaymentDefault
        if(!(props.mortgagePayment > 0)){
           mortgageDefault = null
        }else{
           mortgageDefault = props.mortgagePayment
        }

        if(!(props.downPayment > 0)){
          downPaymentDefault = null
        }else {
          downPaymentDefault = props.downPayment
        }
        console.log(mortgageDefault)

        return(
          <form className={'form'}             
          onSubmit={(e) => {
            e.preventDefault()
            props.handleSubmit()
          }}>  
            <h3>Property Value</h3>
               <CurrencyInput
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                 className={"input-fields"} prefix="$" name="propertyValue" placeholder="Property Value" onValueChange={props.handleChange}/>          
            <h3>Down Payment</h3>
               <CurrencyInput
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"input-fields"} prefix="$" name="downPayment" value={downPaymentDefault} placeholder="Down Payment" onValueChange={props.handleChange}/>
            <h3>Mortgage Payment</h3> 
              <CurrencyInput
                 onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"mortgage-input"} value={mortgageDefault} prefix="$" name="mortgagePayment" placeholder="Mortgage Payment" onValueChange={props.handleChange} />
                <button className={"moreDets"} onClick={props.handleClick}>Info</button> 
            <div hidden={props.hidden}>
              <label className={"mortgage-label"}>Interest Rate:</label><input type={"number"} className={"mortgage-calculator"} defaultValue={props.interestRate*100} onChange={props.updateInterestRate}></input>%
              <br></br>
              <label className={"mortgage-label"}>Loan Duration:</label><input type={"number"} className={"mortgage-calculator"} defaultValue={props.loanDuration} onChange={props.updateLoanDuration}></input> Years
            </div>
            <h3>Maintainance</h3> 
              <CurrencyInput 
                 onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"input-fields"} prefix="$" name="maintainance" placeholder="Maintainance" onValueChange={props.handleChange}/>
            <h3>Rent</h3>
               <CurrencyInput
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"input-fields"} prefix="$" name="rent" placeholder="Income" onValueChange={props.handleChange}/>
                <br />
                <button 
                type={"submit"} className={"button"}>Submit</button>
          </form>
        )
    }
export default InputFields;