import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import MainPageForm from './components/MainPageForm';
import './components/MainPage.css';
import MainPageBalance from './components/MainPageBalance';
import MainPageCategories from './components/MainPageCategories';

function App() {
  return (
    <div className="App">
      <MainPage />
      <MainPageForm />
    </div>
  );
}

export default App;
