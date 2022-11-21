import React from 'react';
import '../App.css';

class InputFields extends React.Component {
    render(){
        return(
          <form>
            <h3>Rent</h3> 
              <input 
                 onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="rent" placeholder="Rent" onChange={this.props.handleChange}/>
            <h3>Car Insurance</h3> 
              <input 
                 onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="carInsurance" placeholder="Car Insurance" onChange={this.props.handleChange}/>
            <h3>Loans</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="loans" placeholder="student/car/etc." onChange={this.props.handleChange}/>
            <h3>Utilites</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="utilites" placeholder="internet/electric/etc." onChange={this.props.handleChange}/>
            <h3>Giving</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="giving" placeholder="Giving" onChange={this.props.handleChange}/>
            <h3>Gas</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="gas" placeholder="Gas" onChange={this.props.handleChange}/>
            <h3>Groceries</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="groceries" placeholder="Groceries" onChange={this.props.handleChange}/>
            <h3>Car Maintainance</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="carMaintainance" placeholder="Car Maintainance" onChange={this.props.handleChange}/>
            <h3>Miscilanious</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="miscilanious" placeholder="Miscilanious" onChange={this.props.handleChange}/>
            <h3>Personal Spending</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
            type="number" name="personalSpending" placeholder="Personal Spending" onChange={this.props.handleChange}/>
            <h3>Saving</h3>
               <input
                  onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                className={"input-fields"} type="number" name="saving" placeholder="Saving" onChange={this.props.handleChange}/>
          </form>
        )
      }
    }
export default InputFields;