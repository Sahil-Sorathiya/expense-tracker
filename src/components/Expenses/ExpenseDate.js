import React from 'react'
import "./ExpenseDate.css"

export default function ExpenceDate({date}) {
    const month = date.toLocaleDateString('en-US', {month: "long"})
    const day = date.toLocaleDateString('en-US', {day: "numeric"})
    const year = date.toLocaleDateString('en-US', {year: "numeric"})
    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    )
}

