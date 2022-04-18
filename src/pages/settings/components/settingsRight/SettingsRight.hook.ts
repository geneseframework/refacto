import { Project } from '../../../../shared/classes/project';

export const useSettingsRight = () => {
    const project: Project = window.electron.store.get('project');
    return {
        name: project?.name,
        path: project?.path,
    }
}
