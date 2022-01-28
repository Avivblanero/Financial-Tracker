import react from 'react';
import Expenses from "./components/Expenses/Expenses";


function App() {
  const expenses = [
    { id: 'e1', title: 'ביטוח רכב', amount: 4500, date: new Date(2021, 3, 8) },
    { id: 'e2', title: 'נייר טואלט', amount: 45, date: new Date(2021, 2, 12) },
    { id: 'e3', title: 'טלויזיה חדשה', amount: 2430, date: new Date(2021, 6, 5) },
    { id: 'e4', title: 'ספרי לימוד', amount: 470, date: new Date(2021, 10, 12) },
  ];

  return (
    <div>
      <h2>מחשבון הוצאות</h2>
      <Expenses item={expenses} />

    </div>
  );
}

export default App;
