import React from 'react';
import './CodeDuplication.scss';
import { NavBar } from '../../shared/components/NavBar/NavBar';
import { RoutesEnum } from '../../shared/enums/route.enum';

export const CodeDuplication: React.FC = () => {
    window.electron.store.setBrowserView(RoutesEnum.CODE_DUPLICATION);

    return (
        <div className='mainDuplicationContainer'>
            <NavBar />
        </div>
    );
}
