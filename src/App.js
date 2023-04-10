import React from 'react';
import { Routes,Route, } from 'react-router-dom';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import AddExpense from './AddExpense';
import AddIncome from './AddIncome';
import Popup from "./Popup";
import Navbar from './Navbar';
import Home from './Home';
import DashBoard from './DashBoard';
import History from './History';
import Expenses from './Expenses';
import Weekly from './Weekly';
import Monthly from './Monthly';
import Yearly from './yearly';



function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard/weekly" element={<Weekly/>}/>
        <Route path="dashboard/monthly" element={<Monthly/>}/>
        <Route path="dashboard/yearly" element={<Yearly/>}/>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
    
  );
}

export default App;






