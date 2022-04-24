import { Project } from '../interfaces/project.interface';
import { store } from '../../renderer/App';
import { API } from '../enums/api.enum';

export const saveProject = (project: Project): void => {
    store.set(API.PROJECT, project);
};

export const addProject = (project: Project): Project[] => {
    const projects = store.get(API.PROJECTS);
    const newListOfProjects: Project[] = [...projects, project];
    store.set(API.PROJECTS, newListOfProjects);
    return newListOfProjects;
};
