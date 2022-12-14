import React from 'react';
import '../App.css';
import InputCard from './InputCard'
import ResultsCard from './ResultsCard'
import {useState, useEffect} from 'react'

function Calculator(){

const [inputData, setInputData] = useState({
    propertyValue: 0,
    downPayment: 0,
    mortgagePayment: 0,
    maintainance: 0,
    rent: 0,
  })
  const [roi, setRoi] = useState()
  const [cashFlow, setCashFlow] = useState()
  const [interestRate, setInrerestRate] = useState(.078)
  const [loanDuration, setLoanDuration] = useState(30)
  const [hidden, setHidden] = useState(true)


  useEffect(() => {
    let loanTotal = (inputData.propertyValue - inputData.downPayment)
    let monthlyInterest = interestRate/12
    let monthlyDuration = loanDuration*12
    let mortgage = loanTotal*((monthlyInterest*(1+monthlyInterest)**monthlyDuration)/((1+monthlyInterest)**monthlyDuration-1))
    let taxes = (inputData.propertyValue*.02)/12
    let insurance = (inputData.propertyValue*.0035)/12
    let finalMonthlyPayment = mortgage + taxes + insurance

    if(!(finalMonthlyPayment > 0)){
      setInputData({...inputData, mortgagePayment: parseInt(0)})

    }else{ 
      setInputData({...inputData, mortgagePayment: parseInt(finalMonthlyPayment)})
    }
  }, [inputData.propertyValue, inputData.downPayment, interestRate, loanDuration])

  useEffect(() => {
    setInputData({...inputData, downPayment: parseInt(inputData.propertyValue*.2)})
  }, [inputData.propertyValue])

  function handleChange(value, name) {
    if(!(value > 0)){
      setInputData({...inputData, [name]: parseInt(0)})
    }else{
      setInputData({...inputData, [name]: parseInt(value)})
    }
  }

  function handleClick(){
    setHidden(!hidden)
  }

  function handleSubmit(){
    let recurringCost = (inputData.maintainance*12)+(inputData.mortgagePayment*12)
    let totalSpent = inputData.downPayment + recurringCost
    let income = inputData.rent * 12 
    let returnPercent = ((income-recurringCost)/totalSpent)

    setRoi(Math.round(returnPercent * 100))
    setCashFlow(inputData.rent-(recurringCost/12))
  }

  function updateInterestRate(e){
    if(!(e.target.value > 0)){
      setInrerestRate(parseInt(0))
    }
    setInrerestRate(e.target.value/100)
  }

  function updateLoanDuration(e){
    if(!(e.target.value > 0)){
      setLoanDuration(parseInt(0))
    }
    setLoanDuration(parseInt(e.target.value))
  }

  return(
        <div>
          <div className={"input-card"}>
          <InputCard
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            updateInterestRate={updateInterestRate}
            updateLoanDuration={updateLoanDuration}
            handleClick={handleClick}
            interestRate={interestRate}
            loanDuration={loanDuration}
            hidden={hidden}
            downPayment={inputData.downPayment}
            mortgagePayment={inputData.mortgagePayment}
            />
            </div>
            <div className={'resultsCard'}>
            <ResultsCard roi={roi} cashFlow={cashFlow}/>
          </div>
        </div>
      )
  }

export default Calculator;