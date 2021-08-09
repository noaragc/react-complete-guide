import { React, useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  //const [enteredTitle, setEnteredTitle] = useState('');
  const [state, setState] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const ChangeHandler = (event) => {
    console.log(event.target.name, " - ", event.target.value);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={ChangeHandler} name="title" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={ChangeHandler}
            name="amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-08-08"
            max="2025-12-31"
            onChange={ChangeHandler}
            name="date"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
