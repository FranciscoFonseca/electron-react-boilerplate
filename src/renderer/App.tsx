import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Layout from './Layout/Layout';
import Home from './pages/Home/Home';
import MenuScreen from './pages/MenuScreen/MenuScreen';

function Hello() {
  return (
    <div>
      <Layout />

      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>Cadelga Kiosko App</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </button>
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Menu" element={<MenuScreen />} />
      </Routes>
    </Router>
  );
}
