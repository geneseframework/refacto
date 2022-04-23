import { RoutesEnum } from '../../shared/enums/route.enum';
import { useEffect, useState } from 'react';
import { store } from '../../renderer/App';
import { Project } from '../../shared/interfaces/project.interface';

export const useDashboard = () => {
    store.setBrowserView(RoutesEnum.dashboard);
    const projectName: string = window.electron.store.get('project').name;
    const [project, setProject] = useState<Project | undefined>();
    useEffect(() => {
        if (!project) {
            const project: Project = window.electron.store.get('project');
            console.log('project', project);
            setProject(project);
        }
    }, [project, setProject]);
    return {
        project,
        projectName,
    };
};
