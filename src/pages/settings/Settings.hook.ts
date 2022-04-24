import { store } from '../../renderer/App';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { useState } from 'react';
import { Project } from '../../shared/interfaces/project.interface';
import { API } from '../../shared/enums/api.enum';
import { projectAlreadyExists } from '../../shared/utils/projects.util';
import { EMPTY_PROJECT } from '../../shared/constants/emptyProject.const';
import {
    addProject,
    getProjects,
    saveProjects,
} from '../../shared/store/projects.store';
import {
    getCurrentProject,
    updateCurrentProject,
} from '../../shared/store/project.store';
import { saveRoute } from '../../shared/store/route.store';

export const useSettings = () => {
    saveRoute(RoutesEnum.settings);
    const currentProject: Project = getCurrentProject();
    const [projects, setProjects] = useState<Project[]>(getProjects());
    const [isNewProject, setIsNewProject] = useState<boolean>(!currentProject);
    const [projectFormValues, setProjectFormValues] = useState<Project>(
        store.get('project') ?? EMPTY_PROJECT
    );

    const handleCreateProject = (newProject: Project) => {
        console.log('newProject', newProject);
        if (projectAlreadyExists(newProject)) {
            console.log('A project already exists with this name');
        } else {
            updateCurrentProject(newProject);
            const newListOfProjects: Project[] = addProject(newProject);
            setProjects(newListOfProjects);
            setIsNewProject(false);
            setProjectFormValues(newProject);
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

    const handleUpdateProjects = (
        updatedCurrentProject: Project,
        updatedProjects: Project[]
    ): void => {
        updateCurrentProject(updatedCurrentProject);
        saveProjects(updatedProjects);
        setProjects(updatedProjects);
        setProjectFormValues(updatedCurrentProject);
    };

    const handleOnDelete = () => {
        setIsNewProject(true);
        let updatedProjectsList: Project[] = [...projects];
        const indexOfProjectToRemove: number = updatedProjectsList.findIndex(
            (p) => p?.name === projectFormValues?.name
        );
        if (indexOfProjectToRemove > -1) {
            updatedProjectsList.splice(indexOfProjectToRemove, 1);
            store.set(API.PROJECTS, updatedProjectsList);
            setProjects(updatedProjectsList);
        }
        updateCurrentProject(null);
    };

    return {
        changeProjectFormValues,
        handleCreateProject,
        handleOnDelete,
        handleUpdateProjects,
        isNewProject,
        openNewProjectForm,
        projectFormValues,
        projects,
    };
};
