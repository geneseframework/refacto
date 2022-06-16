import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Dashboard } from '../../frontend/pages/dashboard/Dashboard';
import { Coverage } from '../../frontend/pages/codeCoverage/Coverage';
import { Duplication } from '../../frontend/pages/duplication/Duplication';
import { Complexity } from '../../frontend/pages/complexity/Complexity';
import { JscpdReport } from '../../shared/interfaces/JscpdReport.interface';
import { Settings } from '../../frontend/pages/settings/Settings';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { init } from './App.utils';
import { CoverageReport } from '../../shared/interfaces/CoverageReport.interface';
import { GeneseReport } from '../../shared/interfaces/GeneseReport.interface';
import { Project } from '../../shared/interfaces/Project.interface';

declare global {
    interface Window {
        electron: {
            store: {
                get: (key: string) => any;
                getGeneseReport: (project: Project) => GeneseReport | undefined;
                getJestReport: () => CoverageReport | undefined;
                getJscpdReport: () => JscpdReport | undefined;
                setBrowserView: (route: string) => any;
                removeBrowserViews: () => any;
                runJest: () => any;
                runJscpd: () => any;
                set: (key: string, val: any) => void;
            };
        };
    }
}

export const store = window.electron.store;

export default function App() {
    init();
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
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
