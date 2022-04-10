import React from 'react';
import { DashboardJscpd } from './jscpd/DashboardJscpd';
import './Dashboard.scss'
import { NavBar } from '../../components/NavBar/NavBar';
import { useDashboard } from './Dashboard.hook';

export const Dashboard: React.FC = () => {
    const h = useDashboard();

    return (
        <div className='dashboardMainContainer'>
            <NavBar />
            <div className='stats'>
                <div className='leftContainer'>
                    <p>{`Project : ${h.projectName}`}</p>
                    <h2>Cognitive complexity</h2>
                </div>
                <div className='rightContainer'>
                    <div>
                        <h2>Code coverage</h2>
                    </div>
                    <div><h2>Code smells</h2></div>
                    <div>
                        {h.project && <DashboardJscpd duplicationStats={h.project?.stats?.duplication} />}
                    </div>
                </div>
            </div>
        </div>
    );
};
