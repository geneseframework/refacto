import React from 'react';
import './Complexity.scss';
import { NavBar } from '../../components/NavBar/NavBar';
import { Route } from '../../shared/enums/route.enum';
import { store } from '../../renderer/App';

export const Complexity: React.FC = () => {
    store.set('route', Route.COMPLEXITY);
    store.setBrowserView(Route.COMPLEXITY);

    return (
        <div className='mainComplexityContainer'>
            <NavBar />
        </div>
    );
}
