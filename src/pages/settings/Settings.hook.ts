import { Project } from '../../shared/classes/project';

export const useSettings = () => {
    window.electron.store.set('page', 'settings');
    const projects: Project[] = window.electron.store.get('projects')
    console.log('projects', projects)
	return {
	}
}
