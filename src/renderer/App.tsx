import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Coverage } from '../pages/codeCoverage/Coverage';
import { Duplication } from '../pages/duplication/Duplication';
import { Complexity } from '../pages/complexity/Complexity';
import { JscpdReport } from '../features/jscpd/interfaces/JscpdReport.interface';
import { Settings } from '../pages/settings/Settings';
import { RoutesEnum } from '../shared/enums/route.enum';
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
                <Route path="/" element={<Settings />} />
                <Route
                    path={`/${RoutesEnum.dashboard}`}
                    element={<Dashboard />}
                />
                <Route
                    path={`/${RoutesEnum.complexity}`}
                    element={<Complexity />}
                />
                <Route
                    path={`/${RoutesEnum.coverage}`}
                    element={<Coverage />}
                />
                <Route
                    path={`/${RoutesEnum.duplication}`}
                    element={<Duplication />}
                />
                <Route
                    path={`/${RoutesEnum.settings}`}
                    element={<Settings />}
                />
            </Routes>
        </Router>
    );
}
