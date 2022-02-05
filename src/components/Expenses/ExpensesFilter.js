import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const { onYearChange, year } = props;

  const handleYearSelect = ({ target }) => {
    onYearChange(target.value);
  };

  const options = ["all", "2019", "2020", "2021", "2022"];

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={handleYearSelect} value={year}>
          {options.map((opt) => {
            return <option value={opt} key={opt}>{opt}</option>;
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
