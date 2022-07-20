import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY_EXPENSES = [
  { id: '1', title: '휴지', amount: 20000, date: new Date(2022, 7, 12) },
  { id: '2', title: '계란', amount: 9000, date: new Date(2022, 7, 13) },
  { id: '3', title: '우유', amount: 6000, date: new Date(2022, 7, 14) },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      console.log(prevExpenses);
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
