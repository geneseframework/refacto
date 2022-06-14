import { RoutesEnum } from '../../../shared/enums/route.enum';
import { useEffect, useState } from 'react';
import { store } from '../../../backend/App/App';
import { Project } from '../../../shared/interfaces/Project.interface';
import { getCurrentProject } from '../../../shared/store/project.store';

export const useDashboard = () => {
    store.setBrowserView(RoutesEnum.dashboard);
    const currentProject: Project = getCurrentProject();
    const projectName: string = currentProject.name;
    const [project, setProject] = useState<Project | undefined>();

    useEffect(() => {
        if (!project) {
            const project: Project = window.electron.store.get('project');
            setProject(project);
        }
    }, [project, setProject]);

    return {
        project,
        projectName,
    };
};
