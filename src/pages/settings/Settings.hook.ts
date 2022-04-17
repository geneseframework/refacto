import { Project } from '../../shared/classes/project';
import { RoutesEnum } from '../../shared/enums/route.enum';
import { store } from '../../renderer/App';

export const useSettings = () => {
    store.set('route', RoutesEnum.settings);
    const projects: Project[] = window.electron.store.get('projects')
    console.log('projects', projects)
    return {
        projects,
    }
}
