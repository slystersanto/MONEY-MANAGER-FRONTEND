import React from "react";
import { useState, useEffect } from "react";
// import Modal from "./Modal";
import home from "./home.css";
import { useFormik } from "formik";
import Modal from "react-modal";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faHouse } from "@fortawesome/free-solid-svg-icons";

function Expenses() {
  const [data, setData] = useState([]);
  // const [sum, setSum] = useState([]);
   const [add, setAdd] = useState([]);
  const results = [];
  const results1 = [];
  const incomeFormik = useFormik({
    initialValues: {
      type: "",
      income: "",
      category: "",
      description: "",
      date: "",
      time: "",
    },

    validate: (values) => {
      let errors = {};

      if (!values.income) {
        errors.income = "income is required";
      }
      if (!values.category) {
        errors.category = "Category is required";
      }
      if (!values.description) {
        errors.description = "Description is required";
      }
      if (!values.date) {
        errors.date = "Date is required";
      }
      if (!values.time) {
        errors.time = "Time is required";
      }

      return errors;
    },

    onSubmit: async (values) => {
      // console.log(values);

      try {
        axios.post("https://money-manager-backend-qf9s.onrender.com/transactions/income", values);
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  async function getuser() {
    try {
      const users = await axios.get(
        "https://money-manager-backend-qf9s.onrender.com/transactions/income"
      );
      setData(users.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getuser();
  }, []);

  console.log(data);

  for (let i = 0; i < data.length; i++) {
    results.push(data[i].amount);
  }
  console.log(results);
  const value = results.reduce((acc, cv) => parseInt(acc) + parseInt(cv), 0);
  console.log(value);
  //////////////////////////////////////////////////////////////////////////////////////////////

  const expenseFormik = useFormik({
    initialValues: {
      type: "",
      expense: "",
      category: "",
      description: "",
      date: "",
      time: "",
    },

    validate: (values) => {
      let errors = {};

      if (!values.expense) {
        errors.expense = "Expense is required";
      }
      if (!values.category) {
        errors.category = "Category is required";
      }
      if (!values.description) {
        errors.description = "Description is required";
      }
      if (!values.date) {
        errors.date = "Date is required";
      }
      if (!values.time) {
        errors.time = "Time is required";
      }
      return errors;
    },

    onSubmit: async (values) => {
      // console.log(values);

      try {
        axios.post("https://money-manager-backend-qf9s.onrender.com/transactions/expenses", values);
        console.log(values);
      } catch (error) {
        console.log(error);
      }
    },
  });

  async function getuserExpense() {
    try {
      const users = await axios.get(
        "https://money-manager-backend-qf9s.onrender.com/transactions/expenses"
      );
      setData(users.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getuserExpense();
  }, []);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    results1.push(data[i].amount);
  }
  console.log(results1);
  const valuexpense = results1.reduce(
    (acc, cv) => parseInt(acc) + parseInt(cv),
    0
  );
  console.log(valuexpense);



  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("income");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
    <h1>Total Income And Expenses!</h1>
    <div className="home">
      
   
      {/* <div classname="container ">
        <button className="add-btn-home" onClick={() => setIsModalOpen(true)}>
          <FontAwesomeIcon icon={faHouse} size="2x" /> Add Income / Expense
        </button> */}
        <div class="income-box">
          <h2>Income</h2>
          <h3>$Total Income:{value}</h3>
        </div>

        <div class="expense-box">
          <h2>Expense</h2>
          <h3>$Total Expense:{valuexpense}</h3>
        </div>

        {/* <Modal isOpen={isModalOpen}>
          <div>
            <button
              className="btn-income"
              onClick={() => handleTabClick("income")}
            >
              Income
            </button>
            <button
              className="btn-expense"
              onClick={() => handleTabClick("expense")}
            >
              Expense
            </button>
          </div>
          {activeTab === "income" ? (
            <div>
              <h2></h2>
              <form
                onSubmit={incomeFormik.handleSubmit}
                className="form-container"
              >
                <div>
                  <div class="form-row">
                    <label for="type">Income Type</label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={incomeFormik.values.type}
                      onChange={incomeFormik.handleChange}
                    >
                      <option value="">Select Your income type</option>
                      <option value="Office">Office</option>
                      <option value="Personal">Personal</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {incomeFormik.errors.type}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="income">Income in INR</label>
                    <input
                      type="number"
                      id="income"
                      name="income"
                      required
                      value={incomeFormik.values.income}
                      onChange={incomeFormik.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {incomeFormik.errors.income}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="category">Select Category</label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={incomeFormik.values.category}
                      onChange={incomeFormik.handleChange}
                    >
                      <option value="">Select Your Category</option>
                      <option value="Fuel">Fuel</option>
                      <option value="Movie">Movie</option>
                      <option value="Food">Food</option>
                      <option value="Loan">Loan</option>
                      <option value="Medical Expense">Medical Expense</option>
                      <option value="Others">Others</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {incomeFormik.errors.category}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="description">Description</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      required
                      value={incomeFormik.values.description}
                      onChange={incomeFormik.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {incomeFormik.errors.description}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={incomeFormik.values.date}
                      onChange={incomeFormik.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {incomeFormik.errors.date}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="time">Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={incomeFormik.values.time}
                      onChange={incomeFormik.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {incomeFormik.errors.time}
                    </span>
                  </div>

                  <div>
                    <input type="submit" value="Submit" />
                    <button
                      className="btn-close"
                      onClick={() => setIsModalOpen(false)}
                    >
                      close
                    </button>
                  </div>
                  <div></div>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <h2></h2>
              <form
                className="form-container"
                onSubmit={expenseFormik.handleSubmit}
              >
                <div>
                  <div class="form-row">
                    <label for="type">Expense Type</label>
                    <select
                      id="type"
                      name="type"
                      required
                      value={expenseFormik.values.type}
                      onChange={expenseFormik.handleChange}
                    >
                      <option value="">Select Your expense type</option>
                      <option value="Office">Office</option>
                      <option value="Personal">Personal</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {expenseFormik.errors.type}
                    </span>
                  </div>
                  <div class="form-row">
                    <label for="expense">Expense in INR</label>
                    <input
                      type="number"
                      id="expense"
                      name="expense"
                      required
                      value={expenseFormik.values.expense}
                      onChange={expenseFormik.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {expenseFormik.errors.expense}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="category">Select Category</label>
                    <select
                      id="category"
                      name="category"
                      required
                      value={expenseFormik.values.category}
                      onChange={expenseFormik.handleChange}
                    >
                      <option value="">Select Your Category</option>
                      <option value="Fuel">Fuel</option>
                      <option value="Movie">Movie</option>
                      <option value="Food">Food</option>
                      <option value="Loan">Loan</option>
                      <option value="Medical Expense">Medical Expense</option>
                      <option value="Others">Others</option>
                    </select>
                    <span style={{ color: "red" }}>
                      {expenseFormik.errors.category}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="description">Description</label>
                    <input
                      type="text"
                      id="description"
                      name="description"
                      required
                      value={expenseFormik.values.description}
                      onChange={expenseFormik.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {expenseFormik.errors.description}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="date">Date</label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={expenseFormik.values.date}
                      onChange={expenseFormik.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {expenseFormik.errors.date}
                    </span>
                  </div>

                  <div class="form-row">
                    <label for="time">Time</label>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      required
                      value={expenseFormik.values.time}
                      onChange={expenseFormik.handleChange}
                    />
                    <span style={{ color: "red" }}>
                      {expenseFormik.errors.time}
                    </span>
                  </div>

                  <div>
                    <input type="submit" value="Submit" />
                    <button
                      className="btn-close"
                      onClick={() => setIsModalOpen(false)}
                    >
                      close
                    </button>
                  </div>
                </div>
              </form>
            </div>
          )}
        </Modal> */}
      </div>
      {/* </div> */}
    </>
  );
}

export default Expenses;
