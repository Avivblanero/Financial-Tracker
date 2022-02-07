import React, { useState } from 'react';
import './Expenses.css';
import Card from '../Ui/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

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
                {filteredExpensesByYear.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default Expenses;