import { Project } from '../interfaces/Project.interface';
import { store } from '../../backend/App/App';
import { API } from '../enums/api.enum';

export const getProjects = (): Project[] => {
    return store.get(API.PROJECTS);
};

export const saveProjects = (projects: Project[]): void => {
    store.set(API.PROJECTS, projects);
};

export const addProject = (project: Project): Project[] => {
    const projects = store.get(API.PROJECTS);
    const newListOfProjects: Project[] = [...projects, project];
    store.set(API.PROJECTS, newListOfProjects);
    return newListOfProjects;
};
