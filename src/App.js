import './App.css';
import Header from './components/Header';
import Calculator from './components/Calculator';
import PropertySearch from './components/PropertySearch';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


  function App(){

  return (
    <Router >
      <Header />
      <nav className={"nav-bar"}>
        <Link className={"link-btn"} to="/cash-on-cash">Calculator</Link>
        <Link className={"link-btn"} to="/cash-on-cash/propertySearch">Search</Link>
      </nav>
      <Routes>
        <Route path="/cash-on-cash/" element={<Calculator />}/>
        <Route path="/cash-on-cash/propertySearch" element={<PropertySearch />}/>
        </Routes>
      </Router>
  );
}


export default App;
