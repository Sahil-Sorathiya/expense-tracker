import React from 'react';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    const dataPoints = [
        {lable:'jan', value:0},
        {lable:'feb', value:0},
        {lable:'mar', value:0},
        {lable:'apr', value:0},
        {lable:'may', value:0},
        {lable:'jun', value:0},
        {lable:'jul', value:0},
        {lable:'aug', value:0},
        {lable:'sep', value:0},
        {lable:'oct', value:0},
        {lable:'nov', value:0},
        {lable:'dec', value:0},
    ]
    for(const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        dataPoints[expenseMonth].value += expense.amount;
    }

    return (
        <div>
            <Chart dataPoints={dataPoints} />
        </div>
    );
}

export default ExpensesChart;
