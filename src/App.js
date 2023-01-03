import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage/MainPage';
import ExpenseForm from './components/Expenses/ExpenseForm';
import './components/MainPage.css';



function App() {
  return (
    <div className="App">
      <MainPage />
      <ExpenseForm />
    </div>
  );
}

export default App;
