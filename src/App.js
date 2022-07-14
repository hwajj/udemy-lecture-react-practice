import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: '1', title: '휴지', amount: 20000, date: new Date(2022, 7, 12) },
    { id: '2', title: '계란', amount: 9000, date: new Date(2022, 7, 13) },
    { id: '3', title: '우유', amount: 6000, date: new Date(2022, 7, 14) },
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
