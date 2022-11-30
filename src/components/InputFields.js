import React from 'react';
import CurrencyInput from 'react-currency-input-field';
import '../App.css';

function InputFields(props) {
        return(
          <form className={'form'}>  
            <h3>Property Value</h3>
               <CurrencyInput
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                 className={"input-fields"} prefix="$" name="propertyValue" placeholder="Property Value" onChange={props.handleChange}/>          
            <h3>Down Payment</h3>
               <CurrencyInput
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"input-fields"} prefix="$" decimalsLimit={2} name="downPayment" placeholder="Down Payment" onChange={props.handleChange}/>
            <h3>Mortgage Payment</h3> 
              <CurrencyInput 
                 onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"input-fields"} prefix="$" decimalsLimit={2} name="mortgagePayment" placeholder="Mortgage Payment" onChange={props.handleChange}/>
            <h3>Maintainance</h3> 
              <CurrencyInput 
                 onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"input-fields"} prefix="$" decimalsLimit={2} name="maintainance" placeholder="Maintainance" onChange={props.handleChange}/>
            <h3>Rent</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"input-fields"} name="rent" placeholder="Income" onChange={props.handleChange}/>
          </form>
        )
    }
export default InputFields;