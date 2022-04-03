import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { CodeCoverage } from '../pages/code-coverage/CodeCoverage';

declare global {
    interface Window {
        electron: {
            store: {
                get: (key: string) => any;
                jscpd: () => any;
                run: (script: string) => any;
                set: (key: string, val: any) => void;
            };
        };
    }
}

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/code-coverage" element={<CodeCoverage />} />
            </Routes>
        </Router>
    );
}
