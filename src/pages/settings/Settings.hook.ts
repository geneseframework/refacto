import { store } from '../../renderer/App';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { useState } from 'react';
import { Project } from '../../shared/interfaces/project.interface';

export const useSettings = () => {
    store.set('route', RoutesEnum.settings);
    const [projects, setProjects] = useState<Project[]>(store.get('projects'));
    const [projectFormValues, setProjectFormValues] = useState<Project>(
        store.get('project')
    );

    const handleNewProject = () => {
        setProjectFormValues({ name: '', path: '' });
    };

    const changeProjectFormValues = (otherProject: Project) => {
        console.log('SETTINGS', otherProject);
        setProjectFormValues({ ...otherProject });
    };

    const handleUpdateProjects = (
        updatedCurrentProject: Project,
        updatedProjects: Project[]
    ): void => {
        store.set('project', updatedCurrentProject);
        store.set('projects', updatedProjects);
        setProjects(updatedProjects);
        setProjectFormValues(updatedCurrentProject);
    };

    return {
        changeProjectFormValues,
        handleNewProject,
        handleUpdateProjects,
        projectFormValues,
        projects,
    };
};
