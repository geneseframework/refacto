import React from 'react';
import './CodeCoverage.scss';
import { NavBar } from '../../components/NavBar/NavBar';

export const CodeCoverage: React.FC = () => {
    window.electron.store.set('zzz', 'value to set');
    return (
        <div className='mainCoverageContainer'>
            <NavBar />
            <div><h1>Code coverage</h1></div>
        </div>
    );
}
