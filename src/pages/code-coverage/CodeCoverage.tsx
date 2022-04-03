import React from 'react';
import './CodeCoverage.scss';
import { Link } from 'react-router-dom';

export const CodeCoverage: React.FC = () => {
    return (
        <div className='mainCoverageContainer'>
            <div><h1>Code coverage</h1></div>
            <Link to='/'>Go back</Link>
        </div>
    );
}
