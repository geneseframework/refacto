import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { RoutesEnum } from '../../enums/route.enum';
import { useNavBar } from './NavBar.hook';
import { ROUTES_OBJECT } from '../../constants/routes.const';

export const NavBar: React.FC = () => {
    const h = useNavBar();
    return (
        <div className='mainNavBarContainer'>
            <div className='left'>
                <span className='refacto'>Refacto</span></div>
            <div className='center'>
                {/*<div className='tab'><Link to="/dashboard" style={h.linkStyle(RoutesEnum.DASHBOARD)}>Dashboard</Link></div>*/}
                <div className='tab'><Link onClick={(e) => h.navigateTo(RoutesEnum.dashboard, e)} to={`/${RoutesEnum.dashboard}`} style={h.tabsColor[RoutesEnum.dashboard]}>Dashboard</Link></div>
                <div className='tab'><Link onClick={() => h.navigateTo(RoutesEnum.complexity)} to={`/${RoutesEnum.complexity}`} style={h.tabsColor[RoutesEnum.complexity]}>Complexity</Link></div>
                <div className='tab'><Link onClick={() => h.navigateTo(RoutesEnum.coverage)} to={`/${RoutesEnum.coverage}`} style={h.tabsColor[RoutesEnum.coverage]}>Coverage</Link></div>
                <div className='tab'><Link onClick={() => h.navigateTo(RoutesEnum.duplication)} to={`/${RoutesEnum.duplication}`} style={h.tabsColor[RoutesEnum.duplication]}>Duplication</Link></div>
            </div>
            <div className='right'>
                <div className='tab'><Link onClick={() => h.navigateTo(RoutesEnum.settings)} to={`/${RoutesEnum.settings}`} style={h.tabsColor[RoutesEnum.settings]}>Settings</Link></div>
            </div>
        </div>
    );
}
