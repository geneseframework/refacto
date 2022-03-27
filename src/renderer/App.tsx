import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from '../pages/dashboard/Dashboard';

const Hello = () => {
  console.log('STARTS JSCPD 2');
  const electron = window.electron;
  electron.ipcRenderer.sendSync('jscpd');
  console.log('END OF JSCPD 2');
  return (
    <div>
      <h1>Refacto</h1>
      <div className="Hello">
        <Dashboard />
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
