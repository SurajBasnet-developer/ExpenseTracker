import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };
  return (
    <div>
      <h1>Expense Tracker</h1>
      <ExpenseList expenses={expenses} />
      <ExpenseForm onAddExpense={addExpense} />
    </div>
  );
}

export default App;
