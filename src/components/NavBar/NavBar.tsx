import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
    return (
        <div className='mainNavBarContainer'>
            <div className='tab'><Link to="/">Home</Link></div>
            <div className='tab'><Link to="/complexity">Complexity</Link></div>
            <div className='tab'><Link to="/code-coverage">Code coverage</Link></div>
            <div className='tab'><Link to="/code-duplication">Code duplication</Link></div>
        </div>
    );
}
