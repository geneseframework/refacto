import { store } from '../../renderer/App';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { useState } from 'react';
import { Project } from '../../shared/interfaces/project.interface';
import { API } from '../../shared/enums/api.enum';

export const useSettings = () => {
    store.set(API.ROUTE, RoutesEnum.settings);
    const currentProject: Project = store.get(API.PROJECT);
    const [projects, setProjects] = useState<Project[]>(
        store.get(API.PROJECTS)
    );
    const [isNewProject, setIsNewProject] = useState<boolean>(!!currentProject);
    const [projectFormValues, setProjectFormValues] = useState<Project>(
        store.get('project')
    );

    const handleCreateProject = () => {
        setIsNewProject(true);
        console.log('NEWWW', isNewProject);
        setProjectFormValues({ name: '', path: '' });
    };

    const changeProjectFormValues = (otherProject: Project) => {
        setIsNewProject(false);
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
        handleCreateProject,
        handleUpdateProjects,
        isNewProject,
        projectFormValues,
        projects,
    };
};
