import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';
import "./components/Expenses/Expenses.css"
import { useState } from "react";



function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Text Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14)
    },
    { id: 'e2',
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12) 
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28)
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12)
    }, 
  ];

  const [ExpenseItems, setExpenseItems] = useState(expenses);

  const newExpenseHandler = (newItem) => {
    setExpenseItems((previousItems)=>{
      return [newItem, ...previousItems]
    })
  }

  return (
    <div className="App">
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses items={ExpenseItems} />
    </div>
  );
}

export default App;
