import React from 'react';
import { DashboardJscpd } from './jscpd/DashboardJscpd';
import './Dashboard.scss'
import { NavBar } from '../../components/NavBar/NavBar';
import { Route } from '../../shared/enums/route.enum';

export const Dashboard: React.FC = () => {
    window.electron.store.setBrowserView(Route.DASHBOARD);
    const projectName: string = window.electron.store.get('project').name;
    console.log('project', JSON.stringify(window.electron.store.get('project')))
    return (
        <div className='dashboardMainContainer'>
            <NavBar />
            <div className='stats'>
                <div className='leftContainer'>
                    <p>{`Project : ${projectName}`}</p>
                    <h2>Cognitive complexity</h2>
                </div>
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
