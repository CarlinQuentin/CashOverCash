import './App.css';
import React from 'react';
import IncomeCard from './components/IncomeCard';
import PieChart from './components/PieChart';
import InputCard from './components/InputCard';
import Header from './components/Header';


  class App extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
        totalSpent: 0,
        notAccountedFor: 0,
        totalIncome: 0,
        rent: 0,
        carInsurance: 0,
        loans: 0,
        utilites: 0,
        giving: 0,
        gas: 0,
        groceries: 0,
        carMaintainance: 0,
        miscilanious: 0,
        personalSpending: 0,
        saving: 0,
      }
    }

  updateNotAccountedFor = () => {
      this.setState({
        notAccountedFor: this.state.totalIncome - this.state.rent - this.state.carInsurance - this.state.loans - this.state.utilites - this.state.giving - this.state.gas - this.state.groceries - this.state.carMaintainance - this.state.miscilanious - this.state.personalSpending - this.state.saving 
      }, this.totalSpent)
    }

  totalSpent = () => {
      this.setState({
        totalSpent: this.state.rent + this.state.carInsurance + this.state.loans + this.state.utilites + this.state.giving + this.state.gas + this.state.groceries + this.state.carMaintainance + this.state.miscilanious + this.state.personalSpending + this.state.saving 
      })
    }

  handleChange = (e) => {
    if(e.target.value === "" || e.target.value < 0){
      const key = [e.target.name]
      this.setState({
        [key]: parseInt(0),
      }, this.updateNotAccountedFor)
    }else{
      const key = [e.target.name]
      this.setState({
        [key]: parseInt(e.target.value),
      }, this.updateNotAccountedFor)
    }
  }  

    render(){
      return (
        <div className="App">
          <div className={"header"}>
            <Header/>
          </div>
          <div className={"income-card"}>
            <IncomeCard
              totalIncome={this.state.totalIncome}
              handleChange={this.handleChange}
              notAccountedFor={this.state.notAccountedFor}
              totalSpent={this.state.totalSpent}
              />
          </div>
          <div className={"input-card"}>
          <InputCard
            handleChange={this.handleChange}
            />
          </div>
          <div className={"display-card"}>
          <PieChart
            data={this.state}
          />
          </div>
          </div>
  );
}
}

export default App;
