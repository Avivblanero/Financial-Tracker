import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');



    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const AmountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const DateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>על מה הוצאת?</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>סכום</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={AmountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>תאריך</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2025-12-31" onChange={DateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={props.onCancle}>סגירה</button>
                <button type='submit'>הוסף הוצאה</button>
            </div>
        </form>
    );
}

export default ExpenseForm;