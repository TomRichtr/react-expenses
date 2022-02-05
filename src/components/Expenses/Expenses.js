import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpanseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";

const ExpenseList = (props) => {
  const { expenses } = props;

  const [year, setYear] = useState("all");
  const [filteredExpenses, setFilteredExpanses] = useState(expenses);

  const handleYearChange = (selectedYear) => {
    setYear(selectedYear);
    let filtered;
    if (selectedYear === "all") {
      filtered = expenses;
    } else {
      filtered = expenses.filter(
        (expanse) => expanse.date.getFullYear() === +selectedYear
      );
    }
    setFilteredExpanses(filtered);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onYearChange={handleYearChange} year={year} />
      <ExpensesChart filteredExpenses={filteredExpenses} />
      <ExpanseList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default ExpenseList;
