import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import PropertySearch from './components/PropertySearch';
import Login from './components/Login' ;
import PageNotFound from './components/PageNotFound';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {useState, useEffect} from 'react'

function App(){

  const[logIn, setLogIn] = useState(false)
  const[pin, setPin] = useState()

  useEffect(() => {
    console.log(logIn)
  }, [logIn])

  useEffect(() => {
    console.log(pin)
  }, [pin])

  const handleClick = (e) => {
    e.preventDefault()
    const {REACT_APP_PIN} = process.env
    if(+pin === +REACT_APP_PIN){
      setLogIn(!logIn)
    }else{
      alert(`Invalid Pin ${REACT_APP_PIN}`)
    }
  }

  const handlePinChange = (e) => {
    e.preventDefault()
    setPin(+e.target.value)
  }


  return (
    <Router >
      <Header />
      <nav className={"nav-bar"}>
        <Link className={"link-btn"} to="/cash-on-cash">Calculator</Link>|
        <Link className={"link-btn"} to="/cash-on-cash/propertySearch">Search</Link> |
        {!logIn ?(
        <Link className={"link-btn"} to="/cash-on-cash/logIn">Sign In</Link>
        ) : (
          <Link className={"link-btn"} to="/cash-on-cash/logIn">Sign Out</Link>
          )}
      </nav>
        <Routes>
          <Route path="/cash-on-cash/" element={<Calculator/>}/>
          <Route path="/cash-on-cash/propertySearch/" element={<PropertySearch
          logInOut={logIn}
          handleClick={handleClick}
          handlePinChange={handlePinChange}
           />}/>
          <Route path="/cash-on-cash/logIn" element={<Login
          handlePinChange={handlePinChange}
          handleClick={handleClick}
          logInOut={logIn}
          />}/>
          <Route path="cash-on-cash/*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
  );
}


export default App;
