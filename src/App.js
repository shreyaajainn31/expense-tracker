import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import ExpenseForm from './components/Expenses/ExpenseForm';
import './components/MainPage.css';
import Balance from './components/Balance/BalanceForm';
import ProfitLoss from './components/Balance/ProfitLoss';


function App() {
  return (
    <div className="App">
      <MainPage />
      <Balance />

      <ExpenseForm />

      <ProfitLoss/>

    </div>
  );
}

export default App;
