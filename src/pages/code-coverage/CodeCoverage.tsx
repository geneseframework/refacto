import React from 'react';
import './CodeCoverage.scss';
import { Link } from 'react-router-dom';

export const CodeCoverage: React.FC = () => {
    window.electron.store.set('zzz', 'value to set');
    return (
        <div className='mainCoverageContainer'>
            <Link to='/'>Go back</Link>
            <div><h1>Code coverage</h1></div>
        </div>
    );
}
