import { Project } from '../interfaces/Project.interface';
import { store } from '../../backend/App/App';
import { API } from '../enums/api.enum';

export const getCurrentProject = (): Project => {
    return store.get(API.PROJECT);
};

export const updateCurrentProject = (project: Project | null): void => {
    store.set(API.PROJECT, project);
};
