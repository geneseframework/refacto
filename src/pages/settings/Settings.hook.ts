import { store } from '../../renderer/App';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { Project } from '../../shared/classes/project';
import { useState } from 'react';

export const useSettings= () => {
    store.set('route', RoutesEnum.settings);
    const [projects, setProjects] = useState<Project[]>(store.get('projects'));
    const [currentProject, setCurrentProject] = useState<Project>(store.get('project'));

    const handleUpdateProjects = (updatedCurrentProject: Project, updatedProjects: Project[]): void => {
        store.set('project', updatedCurrentProject);
        store.set('projects', updatedProjects);
        setProjects(updatedProjects);
        setCurrentProject(updatedCurrentProject);
    }

    return {
        currentProject,
        handleUpdateProjects,
        projects,
    }

}
