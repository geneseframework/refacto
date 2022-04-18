import { store } from '../../../../renderer/App';
import { RoutesEnum } from '../../../../shared/enums/route.enum';
import { Project } from '../../../../shared/classes/project';

export const useSettingsLeft = () => {
    store.set('route', RoutesEnum.settings);
    const projects: Project[] = window.electron.store.get('projects')
    return {
        projects,
    }
}
