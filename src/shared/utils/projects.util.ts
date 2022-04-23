import { store } from '../../renderer/App';
import { Project } from '../interfaces/project.interface';

export const projectAlreadyExists = (projectName: string): boolean => {
    const project: Project | undefined = store
        .get('projects')
        .find((p: Project) => p.name === projectName);
    return !!project;
};

export const updateProjectInProjects = (
    project: Project,
    projects: Project[]
): void => {
    const previousProjectIndex: number = projects.findIndex(
        (p) => p.name === project?.name
    );
    if (previousProjectIndex > -1) {
        projects[previousProjectIndex] = project;
    }
};
