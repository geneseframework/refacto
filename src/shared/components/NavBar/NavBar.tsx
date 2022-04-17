import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { Route } from '../../enums/route.enum';
import { useNavBar } from './NavBar.hook';

export const NavBar: React.FC = () => {
    const h = useNavBar();
    return (
        <div className='mainNavBarContainer'>
            <div className='left'>
                <span className='refacto'>Refacto</span></div>
            <div className='center'>
                {/*<div className='tab'><Link to="/dashboard" style={h.linkStyle(Route.DASHBOARD)}>Dashboard</Link></div>*/}
                <div className='tab'><Link to="/dashboard" style={h.linkStyle(Route.DASHBOARD)}>Dashboard</Link></div>
                <div className='tab'><Link to="/complexity" style={h.linkStyle(Route.COMPLEXITY)}>Complexity</Link></div>
                <div className='tab'><Link to="/code-coverage" style={h.linkStyle(Route.CODE_COVERAGE)}>Coverage</Link></div>
                <div className='tab'><Link to="/code-duplication" style={h.linkStyle(Route.CODE_DUPLICATION)}>Duplication</Link></div>
            </div>
            <div className='right'>
                <div className='tab'><Link to="/settings" style={h.linkStyle(Route.SETTINGS)}>Settings</Link></div>
            </div>
        </div>
    );
}
