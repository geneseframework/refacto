import { Project } from '../interfaces/project.interface';
import { store } from '../../renderer/App';
import { API } from '../enums/api.enum';

export const getCurrentProject = (): Project => {
    return store.get(API.PROJECT);
};

export const updateCurrentProject = (project: Project | null): void => {
    store.set(API.PROJECT, project);
};
