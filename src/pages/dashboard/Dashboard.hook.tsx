import { Route } from '../../shared/enums/route.enum';
import { useEffect, useState } from 'react';
import { Project } from '../../shared/classes/project';

export const useDashboard = () => {
    window.electron.store.setBrowserView(Route.DASHBOARD);
    const projectName: string = window.electron.store.get('project').name;
    const [project, setProject] = useState<Project | undefined>();
    useEffect(() => {
        if (!project) {
            const project: Project = window.electron.store.get('project');
            console.log('project', project)
            setProject(project)
        }
    }, [project, setProject]);
    return {
        project,
        projectName,
    }
}
