import React from 'react';
import { DashboardJscpd } from './jscpd/DashboardJscpd';
import './Dashboard.scss'
import { Link } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/NavBar';

export const Dashboard: React.FC = () => {
    return (
        <div className='dashboardMainContainer'>
            <NavBar />
            {/*<div className='header'><h1>Refacto</h1></div>*/}
            <div className='stats'>
                <div><h2>Cognitive complexity</h2></div>
                <div>
                    <div>
                        <h2>Code coverage</h2>
                        <Link to="/code-coverage">Link to code coverage page</Link>
                    </div>
                    <div><h2>Code smells</h2></div>
                    <div><DashboardJscpd /></div>
                </div>
            </div>
        </div>
    );
};
