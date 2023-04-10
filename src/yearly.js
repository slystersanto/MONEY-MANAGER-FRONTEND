import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import "./yearly.css";
const Yearly = () => {
    const[yearly,setYearly]=useState([]);

    async function getYear(){
        try {
            const Yearly=await axios.get("https://money-manager-backend-qf9s.onrender.com/transactions/income/yearly");
            setYearly(Yearly.data)
        } catch (error) {
            console.log(error)
        }
    }

 useEffect(()=>{
    getYear();
 });

  return (
    <>
    
    <div>
        <h1 className="title-weekly">Monthly Income & Expenses!</h1>
    </div>
    <div>
      {yearly.map((item, index) => {
        return (
          <div class="card">
  <h2 key={index}>Yearly</h2>
  <p>Name:{item.name}</p>
  <p>Categories: {item.categories}</p>
  <p>Type: {item.type}</p>
  <p>Amount: {item.amount}</p>
  <p>IncomeBy: {item.year}</p>
  <p>Description: {item.spend}</p>
  
  
  
</div>
        );
      })}
    </div>
    
    </>
  )
}

export default Yearly;