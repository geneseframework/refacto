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
        store.set(API.PROJECT, updatedCurrentProject);
        store.set(API.PROJECTS, updatedProjects);
        setProjects(updatedProjects);
        setProjectFormValues(updatedCurrentProject);
    };

    const handleOnDelete = () => {
        setIsNewProject(true);
        let projectsToUpdate: Project[] = [...projects];
        const indexOfProjectToRemove: number = projectsToUpdate.findIndex(
            (p) => p.name === currentProject.name
        );
        if (indexOfProjectToRemove > -1) {
            projectsToUpdate.splice(indexOfProjectToRemove, 1);
        }
        console.log('DEL project');
        store.set(API.PROJECT, undefined);
        store.set(API.PROJECTS, projectsToUpdate);
    };

    return {
        changeProjectFormValues,
        handleCreateProject,
        handleOnDelete,
        handleUpdateProjects,
        isNewProject,
        projectFormValues,
        projects,
    };
};
