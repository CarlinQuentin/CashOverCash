import './App.css';
import React, { useEffect } from 'react';
import InputCard from './components/InputCard';
import Header from './components/Header';
import {useState} from 'react'
import ResultsCard from './components/ResultsCard';


  function App(){

    const [inputData, setInputData] = useState({
      propertyValue: 0,
      downPayment: 0,
      mortgagePayment: 0,
      maintainance: 0,
      rent: 0,
    })
    const [roi, setRoi] = useState()
    const [cashFlow, setCashFlow] = useState()
    const [interestRate, setInrerestRate] = useState(.05)
    const [loanDuration, setLoanDuration] = useState(10)


  useEffect(() => {
    console.log(inputData)
    let loanTotal = (inputData.propertyValue - inputData.downPayment)
    let monthlyInterest = interestRate/12
    let monthlyDuration = loanDuration*12

    let monthlyPayment = loanTotal*((monthlyInterest*(1+monthlyInterest)**monthlyDuration)/((1+monthlyInterest)**monthlyDuration-1))
    setInputData({...inputData, [inputData.mortgagePayment]: parseInt(monthlyPayment)})
  }, [inputData.propertyValue, inputData.downPayment])

  useEffect(() => {
    console.log(inputData.mortgagePayment)
  }, [inputData.mortgagePayment])

  function handleChange(value, name) {
    if(value === "" || value < 0){
      setInputData({...inputData, [name]: parseInt(0)})
    }else{
      setInputData({...inputData, [name]: parseInt(value)})
    }
  }



  function handleSubmit(){
    let recurringCost = (inputData.maintainance*12)+(inputData.mortgagePayment*12)
    let totalSpent = inputData.downPayment + recurringCost
    let income = inputData.rent * 12 
    let returnPercent = ((income-recurringCost)/totalSpent)

    setRoi(Math.round(returnPercent * 100))
    setCashFlow(inputData.rent-(recurringCost/12))
  }


      return (
        <div className="App">
          <div className={"header"}>
            <Header/>
          </div>
          <div className={"input-card"}>
          <InputCard
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            mortgagePayment={inputData.mortgagePayment}
            />
            </div>
            <div className={'resultsCard'}>
            <ResultsCard roi={roi} cashFlow={cashFlow}/>
          </div>
          </div>
  );
}


export default App;
