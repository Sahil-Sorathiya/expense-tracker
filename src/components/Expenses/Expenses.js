import React, { useState } from "react";
import ExpenceItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";


export default function Expenses(props) {
  const [filterYear, setFilterYear] = useState("2021");

  const filterYearHandler = (year) => {
    setFilterYear(year);
  };

  const filteredData = props.items.filter((item)=>{
    const y = item.date.toLocaleDateString('en-US', {year: "numeric"});
    return y === filterYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesChart expenses={filteredData} />
        <ExpensesFilter
          defaultYear={filterYear}
          onFilterChange={filterYearHandler}
        />
        {
          filteredData.map((item) => {
          return (
            <ExpenceItem
              key = {item.id}
              date={item.date}
              title={item.title}
              amount={item.amount}
            />
          );
        })}
      </Card>
    </div>
  );
}
