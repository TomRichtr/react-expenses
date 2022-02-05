import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";
import "./NewExpenseForm.css";

const NewExpense = (props) => {
  const { onAddExpense } = props;

  const [displayForm, setDisplayForm] = useState(false);

  const handleSubmitForm = (formData) => {
    const data = { ...formData, id: uuidv4() };
    onAddExpense(data);
    setDisplayForm(false);
  };

  let newExpenseContent = (
    <button
      className="new-expense__actions"
      onClick={() => setDisplayForm(true)}
    >
      Add New Expense
    </button>
  );

  if (displayForm) {
    newExpenseContent = (
      <NewExpenseForm
        onFormSubmit={handleSubmitForm}
        onCancel={() => setDisplayForm(false)}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
