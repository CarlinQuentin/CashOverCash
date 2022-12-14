import React from 'react';
import '../index.css';

function ResultsCard(props){

    if(isNaN(props.roi)){
        return(
            <div>
            <div>
                  <h2>
                      Investment Results
                  </h2>
                  <div className={"results"}>
                      <h3>Return On Investment:</h3>
                      <h3>Cash Flow:</h3>
                  </div>
            </div>
          </div>
        )
    }else{
      return(
        <div>
          <div>
                <h2>
                    Investment Results
                </h2>
                <div className={"results"}>
                    <h3>Return On Investment: {props.roi}%</h3>
                    <h3>Cash Flow: ${props.cashFlow}</h3>
                </div>
          </div>
        </div>
      )
    }
  }

export default ResultsCard;