import { Project } from '../classes/project';
import { store } from '../../renderer/App';

export const projectAlreadyExists = (projectName: string): boolean => {
    const project: Project | undefined = store.get('projects').find((p: Project) => p.name === projectName);
    return !!project;
}
