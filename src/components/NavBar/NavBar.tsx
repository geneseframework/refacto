import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { navBarStyle } from './NavBar.style';

export const NavBar: React.FC = () => {
    return (
        <div className='mainNavBarContainer'>
            <div className='left'>Refacto</div>
            <div className='center'>
                <div className='tab'><Link to="/" style={navBarStyle.link}>Dashboard</Link></div>
                <div className='tab'><Link to="/complexity" style={navBarStyle.link}>Complexity</Link></div>
                <div className='tab'><Link to="/code-coverage" style={navBarStyle.link}>Code coverage</Link></div>
                <div className='tab'><Link to="/code-duplication" style={navBarStyle.link}>Code duplication</Link></div>
            </div>
            <div className='right'>Settings</div>
        </div>
    );
}
