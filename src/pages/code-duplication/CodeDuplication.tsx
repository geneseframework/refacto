import React from 'react';
import './CodeDuplication.scss';
import { NavBar } from '../../components/NavBar/NavBar';

export const CodeDuplication: React.FC = () => {
    console.log('DUPLICATION')
    window.electron.store.displayCodeDuplicationWebview();

    return (
        <div className='mainDuplicationContainer'>
            <NavBar />
        </div>
    );
}
