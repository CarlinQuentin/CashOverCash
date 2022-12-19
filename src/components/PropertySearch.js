import React from 'react';
import '../App.css';
import {useState, useEffect} from 'react'
import Login from './Login'

function PropertySearch(props){

  const [search, setSearch] = useState()
  const [results, setResults] = useState({
    address: null,
    price: null,
    size: null,
  }) 

  function handleChange(e) {
    e.preventDefault()
    setSearch(e.target.value)
  }

  function handleSubmit(){
    setResults({...results, address: search})
  }
  if(!props.logInOut) {
    console.log("This was hit")
    return <Login
    handlePinChange={props.handlePinChange}
    handleClick={props.handleClick}
    />
  }else{

  if(!results.address){
    return(
      <div>
      <form className={"search"}
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}> 
      <div className={"search-w-btn"}>
        <input className={"search-bar"} onChange={handleChange} type="text" placeholder="Search.."/>
        <button type={"submit"} className={"search-btn"}>search</button>
      </div> 
      </form>
      </div>
    )
  }else{
      return(
        <div>
        <form className={"search"}
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}> 
        <div className={"search-w-btn"}>
          <input className={"search-bar"} onChange={handleChange} type="text" placeholder="Search.."/>
          <button type={"submit"} className={"search-btn"}>search</button>
        </div> 
        </form>
        <div className={'search-results'}>
          <h5>Address:</h5><ul>{results.address}</ul>
          <h5>Size:</h5><ul>{results.size}</ul>
          <h5>Price:</h5><ul>{results.price}</ul>
        </div>
        </div>
      )
  }
  }
}

export default PropertySearch;