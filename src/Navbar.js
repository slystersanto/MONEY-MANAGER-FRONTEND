import React from "react";
import { Link } from "react-router-dom";
import navbar from "./navbar.css";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <Link to="/dashboard">DashBoard</Link>
          <ul>
            <li>
              <Link to="/dashboard/weekly">Weekly</Link>
            </li>
            <li>
              <Link to="/dashboard/monthly">Monthly</Link>
            </li>
            <li>
              <Link to="/dashboard/yearly">Yearly</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/expenses">Expenses</Link>
        </li>
        
        <li>
          <Link to="/history">History</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
