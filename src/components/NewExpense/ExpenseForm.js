import { React, useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  //const [enteredTitle, setEnteredTitle] = useState('');
  const [userInput, setUserInput] = useState({
    title: "",
    amount: 0,
    date: new Date(),
  });
  const ChangeHandler = (event) => {
    // setUserInput({
    //   ...userInput,
    //   title: event.target.value,
    // });
    setUserInput((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
    console.log(event.target.name, event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setUserInput({
      title: "",
      amount: 0,
      date: new Date(),
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.title}
            onChange={ChangeHandler}
            name="title"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={userInput.amount}
            onChange={ChangeHandler}
            name="amount"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2025-12-31"
            value={userInput.date}
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
