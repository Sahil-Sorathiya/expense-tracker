import React from 'react';
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const saveExpenseHandler = (data) => {
        const newExpenseData = {
            ...data,
            id: Math.round(Math.random().toString() * 10000)
        }
        props.onNewExpense(newExpenseData);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={saveExpenseHandler} />
        </div>
    );
}

export default NewExpense;
