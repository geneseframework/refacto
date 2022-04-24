import { store } from '../../renderer/App';
import { Project } from '../interfaces/project.interface';

export const projectAlreadyExists = (project: Project): boolean => {
    const searchedProject: Project | undefined = store
        .get('projects')
        .find((p: Project) => p.name === project?.name);
    return !!searchedProject;
};

export const updateProjectInProjects = (
    project: Project,
    projects: Project[]
): Project[] => {
    const previousProjectIndex: number = projects.findIndex(
        (p) => p.name === project?.name
    );
    if (previousProjectIndex > -1) {
        projects[previousProjectIndex] = project;
    }
    return [...projects];
};
