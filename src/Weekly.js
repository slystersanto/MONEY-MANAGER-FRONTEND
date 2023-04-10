import { useEffect, useState } from "react";

import axios from "axios";

import React from "react";
import weekly from "./weekly.css";

const Weekly = () => {
  const [data, setData] = useState([]);
  async function getuser() {
    try {
      const users = await axios.get(
        "https://money-manager-backend-qf9s.onrender.com/transactions/income/weekly"
      );
      // console.log(users);
      setData(users.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getuser();
  }, []);

  console.log(data);

  return (
    <>
    <div>
        <h1 className="title-weekly">Weekly Income & Expenses!</h1>
    </div>
    <div>
      {data.map((item, index) => {
        return (
          <div class="card">
  <h2>Weekly</h2>
  <p>Name:{item.name}</p>
  <p>Categories: {item.categories}</p>
  <p>Type: {item.type}</p>
  <p>Amount: {item.amount}</p>
  <p>IncomeBy: {item.earnedby}</p>
  <p>Description: {item.description}</p>
  <p>Date: {item.date}</p>
  
</div>
        );
      })}
    </div>
    </>
  );
};

export default Weekly;
