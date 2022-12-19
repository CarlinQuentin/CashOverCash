import React from 'react';
import '../App.css';

function Login(props){
      return(
        <div className={'log-in'}>
                {!props.logInOut ? (
                    <h1>You Are Signed Out</h1>
                    ): (
                    <h1>You Are Signed In</h1>
                    )
                }
                {!props.logInOut ?(
                    <form onSubmit={props.handleClick}>
                        <input type={"number"} className={"pin"} onChange={props.handlePinChange}></input>
                    </form>
                    ) : (
                    <button onClick={props.handleClick}>Sign Out!</button>        
                    )
                }
        </div>
      )
  }
export default Login;