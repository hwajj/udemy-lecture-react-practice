import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const expenses = [
    { id: 'e1', title: '보험', amount: 120000, date: new Date(2021, 12, 4) },

    { id: 'e2', title: '월세', amount: 200000, date: new Date(2021, 12, 10) },

    { id: 'e3', title: '식비', amount: 300000, date: new Date(2021, 12, 30) },

    { id: 'e4', title: '헬스장', amount: 50000, date: new Date(2022, 1, 4) },
  ];

  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
