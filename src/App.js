import './App.css';
import React, { useEffect } from 'react';
import InputCard from './components/InputCard';
import Header from './components/Header';
import {useState} from 'react'


  function App(){

    const [inputData, setInputData] = useState({
      propertyValue: 0,
      downPayment: 0,
      mortgagePayment: 0,
      maintainance: 0,
      rent: 0,
      roi: 0,
      cashFlow: 0,
    })


    useEffect(() => {
      console.log(inputData.propertyValue)
      console.log(inputData.rent)
    })

  function updateRoi() {
      setInputData({...inputData, roi: "5%"})
    }

  function updateCashFlow() {
    const recurringYearlyCost = (inputData.mortgagePayment * 12) + (inputData.maintainance * 12)
    setInputData({
      ...inputData, cashFlow: parseInt(200)
      }, updateRoi())
    }

  function handleChange(e) {
    const value = e.target.value.replace("$", '') 
    if(value === "" || value < 0){
      setInputData({...inputData, [e.target.name]: parseInt(0)})
    }else{
      setInputData({...inputData, [e.target.name]: parseInt(value)})
    }
  }


      return (
        <div className="App">
          <div className={"header"}>
            <Header/>
          </div>
          <div className={"input-card"}>
          <InputCard
            handleChange={handleChange}
            />
          </div>
          </div>
  );
}


export default App;
