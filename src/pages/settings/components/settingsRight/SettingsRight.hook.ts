import { SettingsRightProps } from './SettingsRight';
import { Project } from '../../../../shared/classes/project';

export const useSettingsRight = (props: SettingsRightProps) => {
    const project: Project = window.electron.store.get('project');
    return {
        name: project?.name,
        path: project?.path,
    }
}
