import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  // const expenses = props.items;
  const [selectedYear, setSelectedYear] = useState("2020");

  const filterYearChangeHandler = (selectedYear) => {
    setSelectedYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onFilterYear={filterYearChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
