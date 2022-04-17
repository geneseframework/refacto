import React from 'react';
import './CodeCoverage.scss';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import { RoutesEnum } from '../../shared/enums/route.enum';

export const CodeCoverage: React.FC = () => {
    window.electron.store.setBrowserView(RoutesEnum.CODE_COVERAGE);

    return (
        <div className='mainCoverageContainer'>
            <NavBar />
        </div>
    );
}
