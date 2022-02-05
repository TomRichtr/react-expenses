import { useState } from "react";

import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const { onFormSubmit, onCancel } = props;
  const [form, setForm] = useState({
    title: "",
    amount: 0,
    date: "",
  });

  const handleFormChange = ({ target }, field) => {
    setForm((prevState) => {
      return { ...prevState, [field]: target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ ...form, date: new Date(form.date) });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={form.title}
            onChange={(event) => handleFormChange(event, "title")}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={form.amount}
            onChange={(event) => handleFormChange(event, "amount")}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={form.date}
            onChange={(event) => handleFormChange(event, "date")}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={() => onCancel(false)}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpenseForm;
