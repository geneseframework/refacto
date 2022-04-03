import React from 'react';
import { DashboardJscpd } from './jscpd/DashboardJscpd';
import './Dashboard.scss'
import { NavBar } from '../../components/NavBar/NavBar';

export const Dashboard: React.FC = () => {
    console.log('DASHBOARDDDDDD');
    window.electron.store.removeBrowserViews();
    return (
        <div className='dashboardMainContainer'>
            <NavBar />
            <div className='stats'>
                <div className='leftContainer'><h2>Cognitive complexity</h2></div>
                <div className='rightContainer'>
                    <div>
                        <h2>Code coverage</h2>
                    </div>
                    <div><h2>Code smells</h2></div>
                    <div><DashboardJscpd /></div>
                </div>
            </div>
        </div>
    );
};
