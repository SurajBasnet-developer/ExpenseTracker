import React from "react";
import Expense from "./Expense";

const ExpenseList = ({ expenses }) => {
  return (
    <ul className="ul-list">
      {expenses.map((expense) => (
        <Expense key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default ExpenseList;
