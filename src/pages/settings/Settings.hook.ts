import { store } from '../../renderer/App';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { useState } from 'react';
import { Project } from '../../shared/interfaces/project.interface';

export const useSettings = () => {
    store.set('route', RoutesEnum.settings);
    const [projects, setProjects] = useState<Project[]>(store.get('projects'));
    const [currentProject, setCurrentProject] = useState<Project | undefined>(
        store.get('project')
    );

    const handleNewProject = () => {
        setCurrentProject(undefined);
    };

    const handleUpdateProjects = (
        updatedCurrentProject: Project,
        updatedProjects: Project[]
    ): void => {
        store.set('project', updatedCurrentProject);
        store.set('projects', updatedProjects);
        setProjects(updatedProjects);
        setCurrentProject(updatedCurrentProject);
    };

    return {
        currentProject,
        handleNewProject,
        handleUpdateProjects,
        projects,
    };
};
