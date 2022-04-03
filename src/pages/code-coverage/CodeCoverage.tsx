import React from 'react';
import './CodeCoverage.scss';
import { NavBar } from '../../components/NavBar/NavBar';
import { Route } from '../../shared/enums/route.enum';

export const CodeCoverage: React.FC = () => {
    window.electron.store.setBrowserView(Route.CODE_COVERAGE);

    return (
        <div className='mainCoverageContainer'>
            <NavBar />
        </div>
    );
}
