import React from 'react';
import './CodeCoverage.scss';
import { NavBar } from '../../components/NavBar/NavBar';
import { Route } from '../../shared/enums/route.enum';
import { store } from '../../renderer/App';

export const CodeCoverage: React.FC = () => {
    store.set('route', Route.CODE_COVERAGE);
    store.setBrowserView(Route.CODE_COVERAGE);

    return (
        <div className='mainCoverageContainer'>
            <NavBar />
        </div>
    );
}
