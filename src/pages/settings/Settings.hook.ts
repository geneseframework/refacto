import { Project } from '../../shared/classes/project';
import { Route } from '../../shared/enums/route.enum';
import { store } from '../../renderer/App';

export const useSettings = () => {
    store.set('route', Route.SETTINGS);
    const projects: Project[] = window.electron.store.get('projects')
    console.log('projects', projects)
    return {
    }
}
