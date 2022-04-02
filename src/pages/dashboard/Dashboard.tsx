import React from 'react';
import { DashboardJscpd } from './jscpd/DashboardJscpd';
import './Dashboard.scss'

export const Dashboard: React.FC = () => {
    return (
        <div>
            <div className='header'><h1>Refacto</h1></div>
            <div className='stats'>
                <div><h2>Cognitive complexity</h2></div>
                <div>
                    <div><h2>Code coverage</h2></div>
                    <div><h2>Code smells</h2></div>
                    <div><DashboardJscpd /></div>
                </div>
            </div>
        </div>
    );
};
