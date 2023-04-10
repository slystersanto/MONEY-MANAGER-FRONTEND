import React from "react";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import expense from "./expense.css";
import { Formik, useFormik } from "formik";

function AddIncome() {
  const formik = useFormik({
    initialValues: {
      type: "",
      income: "",
      expense: "",
      category: "",
      description: "",
      date: "",
      time: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <div class="container">
        <h1>Enter your Income</h1>
      </div>

      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <div>
              <label for="type">Select Your income/expense type</label>
              <select
                id="type"
                name="type"
                required
                value={formik.values.type}
                onChange={formik.handleChange}
              >
                <option value="">Select Your income/expense type</option>
                <option value="Office">Office</option>
                <option value="Personal">Personal</option>
              </select>
            </div>

            <div>
              <label for="income">Income in INR</label>
              <input
                type="number"
                id="income"
                name="income"
                required
                value={formik.values.income}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label for="expense">Expense in INR</label>
              <input
                type="number"
                id="expense"
                name="expense"
                disabled
                required
                value={formik.values.expense}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label for="category">Select Your Category</label>
              <select
                id="category"
                name="category"
                required
                value={formik.values.category}
                onChange={formik.handleChange}
              >
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
              <input
                type="text"
                id="description"
                name="description"
                required
                value={formik.values.description}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label for="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formik.values.date}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <label for="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                required
                value={formik.values.time}
                onChange={formik.handleChange}
              />
            </div>

            <div>
              <input type="submit" value="Submit" />

              <button type="button">Add New Income</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default AddIncome;
