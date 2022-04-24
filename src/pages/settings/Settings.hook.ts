import { store } from '../../renderer/App';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { useState } from 'react';
import { Project } from '../../shared/interfaces/project.interface';
import { API } from '../../shared/enums/api.enum';
import { projectAlreadyExists } from '../../shared/utils/projects.util';
import { EMPTY_PROJECT } from '../../shared/constants/emptyProject.const';
import { addProject, saveProject } from '../../shared/store/projects.store';

export const useSettings = () => {
    store.set(API.ROUTE, RoutesEnum.settings);
    const currentProject: Project = store.get(API.PROJECT);
    const [projects, setProjects] = useState<Project[]>(
        store.get(API.PROJECTS)
    );
    const [isNewProject, setIsNewProject] = useState<boolean>(!currentProject);
    const [projectFormValues, setProjectFormValues] = useState<Project>(
        store.get('project') ?? EMPTY_PROJECT
    );

    const handleCreateProject = (newProject: Project) => {
        console.log('newProject', newProject);
        if (projectAlreadyExists(newProject)) {
            console.log('A project already exists with this name');
        } else {
            saveProject(newProject);
            const newListOfProjects: Project[] = addProject(newProject);
            setProjects(newListOfProjects);
            setIsNewProject(true);
            setProjectFormValues(EMPTY_PROJECT);
        }
    };

    const changeProjectFormValues = (otherProject: Project) => {
        setIsNewProject(false);
        setProjectFormValues({ ...otherProject });
    };

    const openNewProjectForm = () => {
        setIsNewProject(true);
        setProjectFormValues(EMPTY_PROJECT);
    };

    const saveProjects = (
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
        let updatedProjectsList: Project[] = [...projects];
        // console.log('DEL project projectsToUpdate 0', updatedProjectsList);
        const indexOfProjectToRemove: number = updatedProjectsList.findIndex(
            (p) => p?.name === projectFormValues?.name
        );
        if (indexOfProjectToRemove > -1) {
            updatedProjectsList.splice(indexOfProjectToRemove, 1);
            store.set(API.PROJECTS, updatedProjectsList);
            setProjects(updatedProjectsList);
        }
        // console.log('DEL project projectsToUpdate', updatedProjectsList);
        store.set(API.PROJECT, null);
    };

    return {
        changeProjectFormValues,
        handleCreateProject,
        handleOnDelete,
        handleUpdateProjects: saveProjects,
        isNewProject,
        openNewProjectForm,
        projectFormValues,
        projects,
    };
};
