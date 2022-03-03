import Expenses from './components/Expenses/Expenses';
import Hello from './components/Hello';

const App = () => {
  const expenses = [
    { title: '보험', amount: 120000, date: new Date(2021, 12, 4) },

    { title: '월세', amount: 200000, date: new Date(2021, 12, 10) },

    { title: '식비', amount: 300000, date: new Date(2021, 12, 30) },

    { title: '헬스장', amount: 50000, date: new Date(2022, 1, 4) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
