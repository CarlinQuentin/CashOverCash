import React from 'react';
import '../App.css';
import InputFields from './InputFields'

class InputCard extends React.Component {
    render(){
      return(
        <div>
          <div>
            <InputFields
                handleChange={this.props.handleChange}
            />
          </div>
        </div>
      )
    }
  }

export default InputCard;