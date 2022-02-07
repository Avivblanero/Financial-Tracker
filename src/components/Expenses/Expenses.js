import React, { useState } from 'react';
import './Expenses.css';
import Card from '../Ui/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {
    const [filteredYear, SetFilteredYear] = useState('2021');

    const filterChangeHandler = selectedYear => {
        SetFilteredYear(selectedYear);
    };

    const filteredExpensesByYear = props.item.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesList items={filteredExpensesByYear} />
            </Card>
        </div>
    );
}

export default Expenses;