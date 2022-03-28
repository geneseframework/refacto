import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from '../pages/dashboard/Dashboard';
// let { ipcRenderer } = require('electron');
declare global {
  interface Window {
    electron: {
      store: {
        get: (key: string) => any;
        set: (key: string, val: any) => void;
        // any other methods you've defined...
      };
    };
  }
}

const Hello = () => {
  console.log('STARTS JSCPD 2');
  let content = 'initial content';
  // const ipcRenderer = window.electron.ipcRenderer;
  // ipcRenderer.invoke('jscpd').then((data) => {
  //   console.log('RETUNRRRR');
  //   console.log('RETUNRRRR data', data);
  //   content = data;
  // });
  window.electron.store.set('zzz', 'aaa');
  console.log('return', window.electron.store.get('zzz'));
  console.log('END OF JSCPD 2');
  return (
    <div>
      <h1>Refacto</h1>
      <div>Content : {content?.toString()}</div>
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
