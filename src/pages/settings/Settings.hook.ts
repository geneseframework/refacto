import { store } from '../../renderer/App';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { Project } from '../../shared/classes/project';
import { useState } from 'react';

export const useSettings= () => {
    store.set('route', RoutesEnum.settings);
    const [projects, setProjects] = useState<Project[]>(store.get('projects'));

    const handleUpdateProjects = (updatedProjects: Project[]): void => {
        store.set('projects', updatedProjects);
        setProjects(updatedProjects);
    }

    return {
        handleUpdateProjects,
        projects,
    }

}
