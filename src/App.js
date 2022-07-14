import ExpenseItem from './components/ExpenseItem';

function App() {
  const expenses = [
    { id: '1', titile: '휴지', amount: 20000, date: new Date(2022, 7, 12) },
    { id: '2', titile: '계란', amount: 9000, date: new Date(2022, 7, 12) },
    { id: '3', titile: '우유', amount: 6000, date: new Date(2022, 7, 12) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
