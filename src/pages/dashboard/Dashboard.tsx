import React, { useEffect, useState } from 'react';
import { DashboardJscpd } from './jscpd/DashboardJscpd';
import './Dashboard.scss'
import { NavBar } from '../../components/NavBar/NavBar';
import { Route } from '../../shared/enums/route.enum';
import { Project } from '../../shared/classes/project';

export const Dashboard: React.FC = () => {
    window.electron.store.setBrowserView(Route.DASHBOARD);
    const projectName: string = window.electron.store.get('project').name;
    const [project, setProject] = useState<Project | undefined>();
    useEffect(() => {
        if (!project) {
            const project: Project = window.electron.store.get('project');
            console.log('project', project)
            setProject(project)
        }
    }, [project, setProject])
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
                    <div><DashboardJscpd duplicationStats={project?.stats?.duplication} /></div>
                </div>
            </div>
        </div>
    );
};
