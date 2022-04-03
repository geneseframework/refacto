import React from 'react';
import './Complexity.scss';
import { NavBar } from '../../components/NavBar/NavBar';
import { Route } from '../../shared/enums/route.enum';

export const Complexity: React.FC = () => {
    window.electron.store.setBrowserView(Route.COMPLEXITY);

    return (
        <div className='mainComplexityContainer'>
            <NavBar />
        </div>
    );
}
