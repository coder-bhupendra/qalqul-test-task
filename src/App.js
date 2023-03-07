import logo from './logo.svg';
import './App.css';
import "./Assets/Styles.scss";
import 'react-toastify/dist/ReactToastify.css';
import IndexRouter from './Routes/IndexRouter';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <IndexRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
