import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from '../pages/dashboard/Dashboard';

declare global {
    interface Window {
        electron: {
            store: {
                get: (key: string) => any;
                jscpd: () => any;
                set: (key: string, val: any) => void;
            };
        };
    }
}

const Hello = () => {
    // window.electron.store.set('zzz', 'value to set');
    // const response = window.electron.store.get('zzz');
    return (
        <div>
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
