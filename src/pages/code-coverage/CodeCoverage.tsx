import React from 'react';
import './CodeCoverage.scss';
import { NavBar } from '../../components/NavBar/NavBar';

export const CodeCoverage: React.FC = () => {
    console.log('COVERAGEEEE')
    window.electron.store.displayCodeCoverageWebview();

    return (
        <div className='mainCoverageContainer'>
            <NavBar />
        </div>
    );
}
