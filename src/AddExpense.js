import React from 'react';
import expense from "./expense.css";
import { isDisabled } from '@testing-library/user-event/dist/utils/misc/isDisabled';


function AddExpense () {
    return(
        <>
        <div class="container">
        <h1>Enter your Expenses</h1>
      </div>
      
      <div>
        <form >
          <div>
            <div>
              <label for="type">Select Your income/expense type</label>
              <select id="type" name="type" required>
                <option value="">Select Your income/expense type</option>
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
              </select>
            </div>
            
            <div>
              <label for="income">Income in INR</label>
              <input type="number" id="income" name="income" disabled />
            </div>
            
            <div>
              <label for="expense">Expense in INR</label>
              <input type="number" id="expense" name="expense" required />
            </div>
            
            <div>
              <label for="category">Select Your Category</label>
              <select id="category" name="category" required>
                <option value="">Select Your Category</option>
                <option value="Fuel">Fuel</option>
                <option value="Movie">Movie</option>
                <option value="Food">Food</option>
                <option value="Loan">Loan</option>
                <option value="Medical Expense">Medical Expense</option>
                <option value="Others">Others</option>
              </select>
            </div>
            
            <div>
              <label for="description">Description</label>
              <input type="text" id="description" name="description" required />
            </div>
            
            <div>
              <label for="date">Date</label>
              <input type="date" id="date" name="date" required />
            </div>
            
            <div>
              <label for="time">Time</label>
              <input type="time" id="time" name="time" required />
            </div>
            
            <div>
              <input type="submit" value="Submit" />
            
      
              <button type="button">Add New Expense</button>
            </div>
          </div>
        </form>
      </div>
      </>
    );
}

export default AddExpense;