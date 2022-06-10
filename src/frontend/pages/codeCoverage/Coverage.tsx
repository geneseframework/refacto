import React from 'react';
import './Coverage.scss';
import { NavBar } from '../../../shared/components/NavBar/NavBar';
import { RoutesEnum } from '../../../shared/enums/route.enum';

export const Coverage: React.FC = () => {
    window.electron.store.setBrowserView(RoutesEnum.coverage);

    return (
        <div className="mainCoverageContainer">
            <NavBar />
        </div>
    );
};
