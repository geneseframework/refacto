import { URL } from 'url';
import path from 'path';
import { BrowserView, BrowserWindow } from 'electron';
import { Project } from '../shared/interfaces/project.interface';
import { isEmpty } from '../shared/utils/arrays.utils';
import { PATHS_MAIN_PROCESS } from './main';
import ElectronStore from 'electron-store';

export function removeBrowserViews(mainWindow: BrowserWindow): void {
    const views = mainWindow?.getBrowserViews() ?? [];
    for (const view of views) {
        mainWindow?.removeBrowserView(view);
    }
}

export async function createBrowserView(
    filePath: string
): Promise<BrowserView> {
    const view = new BrowserView();
    await view.webContents.loadFile(filePath);
    return view;
}

export let resolveHtmlPath: (htmlFileName: string) => string;

if (process.env.NODE_ENV === 'development') {
    const port = process.env.PORT || 1212;
    resolveHtmlPath = (htmlFileName: string) => {
        const url = new URL(`http://localhost:${port}`);
        url.pathname = htmlFileName;
        return url.href;
    };
} else {
    resolveHtmlPath = (htmlFileName: string) => {
        return `file://${path.resolve(
            __dirname,
            '../renderer/',
            htmlFileName
        )}`;
    };
}

export function clearAll(store: ElectronStore) {
    store.delete('projects');
    const projects: Project[] = (store.get('projects') as Project[]) ?? [];
    if (isEmpty(projects)) {
        const project: Project = {
            name: 'MyProject',
            pathFolderToAnalyse: PATHS_MAIN_PROCESS.folderToAnalyze,
            pathRoot: '',
            pathReports: './reports',
            geneseCommand: 'genese cpx ./src',
            jestCommand: 'jest --coverage',
            jscpdCommand: 'jscpd src -o reports/jscpd -r html',
        };
        projects.push(project);
        store.set('project', project);
        store.set('projects', projects);
    }
}
