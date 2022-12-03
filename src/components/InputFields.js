import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import '../App.css';

function InputFields(props) {
        return(
          <form className={'form'}                
          onSubmit={(e) => {
            e.preventDefault()
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
                className={"input-fields"} prefix="$" name="downPayment" placeholder="Down Payment" onValueChange={props.handleChange}/>
            <h3>Mortgage Payment</h3> 
              <CurrencyInput
                 onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"mortgage-input"} key={props.mortgagePayment}  defaultValue={props.mortgagePayment} prefix="$" name="mortgagePayment" placeholder="Mortgage Payment" onValueChange={props.handleChange} />
                <button className={"moreDets"} onClick={props.handleClick}>Info</button> 
            <div hidden={props.hidden}>
              <form>
              <label className={"mortgage-label"}>Interest Rate:</label><input className={"mortgage-calculator"} defaultValue={props.interestRate*100} onChange={props.updateInterestRate}></input>%
              <br></br>
              <label className={"mortgage-label"}>Loan Duration:</label><input type={"number"} className={"mortgage-calculator"} defaultValue={props.loanDuration} onChange={props.updateLoanDuration}></input> Years
              </form>
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
                type={"submit"} onClick={props.handleSubmit} className={"button"}>Submit</button>
          </form>
        )
    }
export default InputFields;