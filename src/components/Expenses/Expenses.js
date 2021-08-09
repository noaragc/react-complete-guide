import { React, useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    //console.log("Expenses.js");
    //console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterChange={filterChangeHandler}
        defaultYear={filteredYear}
      />
      {props.expenses.map((e) => (
        <ExpenseItem title={e.title} date={e.date} amount={e.amount} />
      ))}
    </Card>
  );
};

export default Expenses;
