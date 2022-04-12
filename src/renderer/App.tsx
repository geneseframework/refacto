import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { CodeCoverage } from '../pages/code-coverage/CodeCoverage';
import { CodeDuplication } from '../pages/code-duplication/CodeDuplication';
import { Complexity } from '../pages/complexity/Complexity';
import { JscpdReport } from '../features/jscpd/interfaces/JscpdReport.interface';
import { Settings } from '../pages/settings/Settings';
// import { Settings } from '../pages/settings/Settings';

declare global {
    interface Window {
        electron: {
            store: {
                get: (key: string) => any;
                getJscpdReport: () => JscpdReport | undefined;
                setBrowserView: (route: string) => any;
                removeBrowserViews: () => any;
                runJscpd: () => any;
                set: (key: string, val: any) => void;
            };
        };
    }
}

export const store = window.electron.store;

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/complexity" element={<Complexity />} />
                <Route path="/code-coverage" element={<CodeCoverage />} />
                <Route path="/code-duplication" element={<CodeDuplication />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
}
