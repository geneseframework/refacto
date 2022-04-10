import React from 'react';
import './CodeDuplication.scss';
import { NavBar } from '../../components/NavBar/NavBar';
import { Route } from '../../shared/enums/route.enum';
import { store } from '../../renderer/App';

export const CodeDuplication: React.FC = () => {
    store.set('route', Route.CODE_DUPLICATION);
    store.setBrowserView(Route.CODE_DUPLICATION);

    return (
        <div className='mainDuplicationContainer'>
            <NavBar />
        </div>
    );
}
