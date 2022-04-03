import React from 'react';
import './CodeDuplication.scss';
import { NavBar } from '../../components/NavBar/NavBar';
import { Route } from '../../shared/enums/route.enum';

export const CodeDuplication: React.FC = () => {
    window.electron.store.setBrowserView(Route.CODE_DUPLICATION);

    return (
        <div className='mainDuplicationContainer'>
            <NavBar />
        </div>
    );
}
