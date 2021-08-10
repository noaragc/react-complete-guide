import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    //console.log("Expenses.js");
    //console.log(selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  /* // CONDITIONAL 3:
  let expensesContent = <p>No data was found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        title={expense.title}
        date={expense.date}
        amount={expense.amount}
        key={expense.id}
      />
    ));
  }
  //END CONDITIONAL 3 */

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        defaultYear={filteredYear}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />

      {/* EXECUTING CONDITIONAL 3 */}
      {/* {expensesContent} */}

      {/* CONDITIONAL 2: {filteredExpenses.length === 0 && <p>No data was found.</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}
          />
        ))} */}

      {/* CONDITIONAL 1: {filteredExpenses.length === 0 ? (
        <p>No data found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            key={expense.id}
          />
        ))
      )} */}
    </Card>
  );
};

export default Expenses;
