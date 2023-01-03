import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import MainPageForm from './components/MainPageForm';
import './components/MainPage.css';
import Balance from './components/BalanceForm';
import ProfitLoss from './components/ProfitLoss';


function App() {
  return (
    <div className="App">
      <MainPage />
      <Balance />

      <MainPageForm />

      <ProfitLoss/>

    </div>
  );
}

export default App;
