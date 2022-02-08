import React from "react";
import Chart from "../Chart/Chart";

const ExpensesChart = (props) => {
    const chartDataPoints = [
        { label: 'ינו', value: 0 },
        { label: 'פבר', value: 0 },
        { label: 'מרץ', value: 0 },
        { label: 'אפר', value: 0 },
        { label: 'מאי', value: 0 },
        { label: 'יונ', value: 0 },
        { label: 'יול', value: 0 },
        { label: 'אוג', value: 0 },
        { label: 'ספט', value: 0 },
        { label: 'אוק', value: 0 },
        { label: 'נוב', value: 0 },
        { label: 'דצמ', value: 0 },
    ];

    for (let expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints} />;
};

export default ExpensesChart;