import React from 'react';
import '../App.css';
import InputFields from './InputFields'

function InputCard(props){
      return(
        <div>
          <div>
            <InputFields
                handleChange={props.handleChange}
                handleSubmit={props.handleSubmit}
                handleClick={props.handleClick}
                updateInterestRate={props.updateInterestRate}
                updateLoanDuration={props.updateLoanDuration}
                interestRate={props.interestRate}
                loanDuration={props.loanDuration}
                hidden={props.hidden}
                mortgagePayment={props.mortgagePayment}
            />
          </div>
        </div>
      )
  }

export default InputCard;