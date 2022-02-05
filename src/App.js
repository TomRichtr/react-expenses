import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { v4 as uuidv4 } from "uuid";

const randomDate = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
};
const startDate = new Date(2019, 0, 1);
const endDate = new Date(2022, 11, 31);

const DUMMY_EXPENSES = [
  {
    date: randomDate(startDate, endDate),
    title: "Car Insurance",
    amount: Math.round(Math.random() * 1000),
    id: uuidv4(),
  },
  {
    date: randomDate(startDate, endDate),
    title: "Toilet Paper",
    amount: Math.round(Math.random() * 1000),
    id: uuidv4(),
  },
  {
    date: randomDate(startDate, endDate),
    title: "Food",
    amount: Math.round(Math.random() * 1000),
    id: uuidv4(),
  },
  {
    date: randomDate(startDate, endDate),
    title: "Drinks",
    amount: Math.round(Math.random() * 1000),
    id: uuidv4(),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const handleAddExpense = (formData) => {
    setExpenses((prevState) => {
      return [formData, ...prevState];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
