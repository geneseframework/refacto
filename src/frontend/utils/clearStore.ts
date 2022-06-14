import { EMPTY_PROJECT } from '../../shared/constants/emptyProject.const';

export function clearStore() {
    window.electron.store.set('project', EMPTY_PROJECT);
}
