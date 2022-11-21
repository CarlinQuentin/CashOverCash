import React from 'react';
import { Chart } from "react-google-charts";
import '../App.css';

class PieChart extends React.Component {
    render(){
      const data = [
        ["Budget", "Cost"],
        ["Rent", this.props.data.rent],
        ["Car Insurance", this.props.data.carInsurance],
        ["Loans", this.props.data.loans],
        ["Utilities", this.props.data.utilites],
        ["Giving", this.props.data.giving],
        ["Gas", this.props.data.gas],
        ["Groceries", this.props.data.groceries],
        ["Car Maintainance", this.props.data.carMaintainance],
        ["Miscilanious", this.props.data.miscilanious],
        ["Personal Spending", this.props.data.personalSpending],
        ["Saving", this.props.data.saving],
      ]
      const options = {
        title: "Monthly Budget",
      };
  
      return(
        <div className={"chart"}>
        <Chart
         chartType="PieChart"
         options={options}
         data={data}
         width={"100%"}
         height={"50vh"}
         />
         </div>
      );
    };
  }
export default PieChart;