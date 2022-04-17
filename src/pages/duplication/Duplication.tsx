import React from 'react';
import './Duplication.scss';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import { RoutesEnum } from '../../shared/enums/route.enum';

export const Duplication: React.FC = () => {
    window.electron.store.setBrowserView(RoutesEnum.duplication);
    console.log('DUPLICATION')

    return (
        <div className='mainDuplicationContainer'>
            <NavBar />
        </div>
    );
}
