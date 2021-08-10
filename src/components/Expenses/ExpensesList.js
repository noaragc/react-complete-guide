import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const Expenseslist = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }
  //END CONDITIONAL 3
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </ul>
  );
};

export default Expenseslist;
