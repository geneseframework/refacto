import React from 'react';
import './Dashboard.scss';
import { NavBar } from '../../../shared/components/NavBar/NavBar';
import { useDashboard } from './Dashboard.hook';
import { DashboardJscpd } from './jscpd/DashboardJscpd';
import { DashboardCoverage } from './coverage/DashboardCoverage';

export const Dashboard: React.FC = () => {
    const h = useDashboard();

    return (
        <div className="bodyContainer">
            <NavBar />
            <div className="mainContainer dashboard">
                <div className="leftContainer">
                    <p>{`Project : ${h.projectName}`}</p>
                    <h2>Cognitive complexity</h2>
                </div>
                <div className="rightContainer">
                    {h.project && (
                        <>
                            <div>
                                <DashboardCoverage
                                    coverageReport={
                                        h.project.stats?.duplication
                                    }
                                />
                            </div>
                            <div>
                                <h2>Code smells</h2>
                            </div>
                            <div>
                                <DashboardJscpd
                                    jscpdReport={h.project.stats?.duplication}
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
