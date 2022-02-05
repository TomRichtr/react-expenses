import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  const { filteredExpenses } = props;

  if (!filteredExpenses.length) {
    return <p className="expenses-list__fallback">No expenses found.</p>;
  }

  return (
    <ul className="expenses-list">
      {filteredExpenses.map(({ title, id, amount, date }) => (
        <ExpenseItem title={title} key={id} amount={amount} date={date} />
      ))}
    </ul>
  );
};

export default ExpenseList;
