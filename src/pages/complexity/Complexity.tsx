import React from 'react';
import './Complexity.scss';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import { RoutesEnum } from '../../shared/enums/route.enum';

export const Complexity: React.FC = () => {
    window.electron.store.setBrowserView(RoutesEnum.COMPLEXITY);

    return (
        <div className='mainComplexityContainer'>
            <NavBar />
        </div>
    );
}
