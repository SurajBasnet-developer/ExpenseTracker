import React from "react";

export const Expense = ({ expense }) => {
  return (
    <div>
      <li>
        <div>{expense.date}</div>
        <div>{expense.description}</div>
        <div>{expense.amount}</div>
      </li>
    </div>
  );
};

export default Expense;
