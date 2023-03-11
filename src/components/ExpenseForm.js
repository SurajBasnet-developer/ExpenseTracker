import React, { useState } from "react";

const ExpenseForm = ({ onAddExpense }) => {
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  function HandleSubmit(event) {
    event.preventDefault();
    const newExpense = {
      id: Math.random().toString(),
      date,
      description,
      amount,
    };
    onAddExpense(newExpense);
    setDate("");
    setDescription("");
    setAmount("");
  }

  return (
    <div>
      <form onSubmit={HandleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input
          className="input"
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <button type="submit">Add Expense</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
