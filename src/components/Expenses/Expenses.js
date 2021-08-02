import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map((e) => (
        <ExpenseItem title={e.title} date={e.date} amount={e.amount} />
      ))}
    </Card>
  );
};

export default Expenses;
