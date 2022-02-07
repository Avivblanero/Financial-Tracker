import React, { useState } from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


const DummyExpenses = [
  { id: 'e1', title: 'ביטוח רכב', amount: 4500, date: new Date(2021, 3, 8) },
  { id: 'e2', title: 'נייר טואלט', amount: 45, date: new Date(2019, 2, 12) },
  { id: 'e3', title: 'טלויזיה חדשה', amount: 2430, date: new Date(2022, 6, 5) },
  { id: 'e4', title: 'ספרי לימוד', amount: 470, date: new Date(2020, 10, 12) },
];

const App = () => {

  const [expenses, SetExpenses] = useState(DummyExpenses);

  const addExpenseHandler = expense => {
    SetExpenses(prevExpenses => {
      return [expense, ...expenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
