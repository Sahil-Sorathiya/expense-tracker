import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [flag, setFlag] = useState(true);

  const titleChangeHandler = (event) => {
    setInputTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const hideFormHandler = () => {
    setFlag(true);
  };

  const exposeFormHandler = () => {
      setFlag(false);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const inputData = {
      title: inputTitle,
      amount: +inputAmount,
      date: new Date(inputDate),
    };
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
    props.onSaveExpense(inputData);
    hideFormHandler();
  };



  if (flag === true) {
    return (
      <div className="new-expense__btn-actions">
        <button type="submit" onClick={exposeFormHandler}>Add new Expense</button>
      </div>
    );
  }

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={inputTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={inputAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={inputDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={hideFormHandler}>
          Cancle
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
