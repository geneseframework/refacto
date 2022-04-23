/* eslint-disable no-undef */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import {
    app,
    BrowserView,
    BrowserWindow,
    ipcMain,
    Rectangle,
    shell,
} from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import {
    createBrowserView,
    removeBrowserViews,
    resolveHtmlPath,
} from './main.utils';
import Store from 'electron-store';
import { RoutesEnum } from '../shared/enums/route.enum';
import { isEmpty } from '../shared/utils/arrays.utils';
import { Project } from '../shared/interfaces/project.interface';

export const CONFIG = {
    headerHeight: 40,
    height: 768,
    width: 1366,
};
const blPath = '/Users/utilisateur/Documents/projects/bleu-libellule';
const testPath =
    '/Users/utilisateur/Documents/perso-gilles-fabre/front-end-assessment-v1/src';
export const PATHS_MAIN_PROCESS = {
    folderToAnalyze: testPath,
    root: '/Users/utilisateur/Documents/perso-gilles-fabre/refacto',
};
const store = new Store();
// store.delete('projects');
const projects: Project[] = (store.get('projects') as Project[]) ?? [];
if (isEmpty(projects)) {
    const project = {
        name: 'Bleu Libellule',
        path: PATHS_MAIN_PROCESS.folderToAnalyze,
    };
    projects.push(project);
    store.set('project', project);
    store.set('projects', projects);
}

export default class AppUpdater {
    constructor() {
        log.transports.file.level = 'info';
        autoUpdater.logger = log;
        autoUpdater.checkForUpdatesAndNotify();
    }
}

let mainWindow: BrowserWindow | undefined = undefined;
let codeCoverageView: BrowserView | undefined = undefined;
let codeDuplicationView: BrowserView | undefined = undefined;
let complexityView: BrowserView | undefined = undefined;
let currentView: BrowserView | undefined = undefined;

ipcMain.on('ipc-example', async (event, arg) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply('ipc-example', msgTemplate('pong'));
});

if (process.env.NODE_ENV === 'production') {
    const sourceMapSupport = require('source-map-support');
    sourceMapSupport.install();
}

const isDevelopment =
    process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDevelopment) {
    require('electron-debug')();
}

const installExtensions = async () => {
    const installer = require('electron-devtools-installer');
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS'];

    return installer
        .default(
            extensions.map((name) => installer[name]),
            forceDownload
        )
        .catch(console.log);
};

const createWindow = async () => {
    if (isDevelopment) {
        await installExtensions();
    }

    const RESOURCES_PATH = app.isPackaged
        ? path.join(process.resourcesPath, 'assets')
        : path.join(__dirname, '../../assets');

    const getAssetPath = (...paths: string[]): string => {
        return path.join(RESOURCES_PATH, ...paths);
    };

    mainWindow = new BrowserWindow({
        show: false,
        width: CONFIG.width,
        height: CONFIG.height,
        icon: getAssetPath('icon.png'),
        webPreferences: {
            contextIsolation: true,
            preload: app.isPackaged
                ? path.join(__dirname, 'preload.js')
                : path.join(__dirname, '../../.erb/dll/preload.js'),
            nodeIntegrationInSubFrames: true,
        },
    });

    mainWindow.loadURL(resolveHtmlPath('index.html'));
    mainWindow.on('ready-to-show', () => {
        if (!mainWindow) {
            throw new Error('"mainWindow" is not defined');
        }
        if (process.env.START_MINIMIZED) {
            mainWindow.minimize();
        } else {
            mainWindow.show();
        }
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });

    codeCoverageView = await createBrowserView(
        '/Users/utilisateur/Documents/projets/bleu-libellule/reports/jest/lcov-report/index.html'
    );
    codeDuplicationView = await createBrowserView(
        '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/index.html'
    );
    complexityView = await createBrowserView(
        '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/genese/complexity/reports/folder-report.html'
    );

    const menuBuilder = new MenuBuilder(mainWindow);
    menuBuilder.buildMenu();

    // Open urls in the user's browser
    mainWindow.webContents.setWindowOpenHandler((edata) => {
        console.log('OPEN NEW WINDOW', edata);
        shell.openExternal(edata.url);
        return { action: 'deny' };
    });

    // Remove this if your app does not use auto updates
    // eslint-disable-next-line
    new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
    // Respect the OSX convention of having the application in memory even
    // after all windows have been closed
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.whenReady()
    .then(() => {
        createWindow();
        app.on('activate', () => {
            // On macOS it's common to re-create a window in the app when the
            // dock icon is clicked and there are no other windows open.
            if (mainWindow === null) createWindow();
        });
    })
    .catch(console.log);

ipcMain.on('get', async (event, val) => {
    event.returnValue = store.get(val);
});

ipcMain.on('set', async (event, key, val) => {
    store.set(key, val);
});

ipcMain.on('setBrowserView', async (event, route: RoutesEnum) => {
    console.log('route', route);
    switch (route) {
        case RoutesEnum.coverage:
            currentView = codeCoverageView;
            break;
        case RoutesEnum.duplication:
            currentView = codeDuplicationView;
            break;
        case RoutesEnum.complexity:
            currentView = complexityView;
            break;
        case RoutesEnum.dashboard:
            currentView = undefined;
            break;
    }
    if (!currentView) {
        removeBrowserViews(mainWindow!);
    } else {
        mainWindow!.setBrowserView(currentView);
        const rectangle: Rectangle = mainWindow!.getContentBounds();
        rectangle.x = 0;
        rectangle.y = CONFIG.headerHeight;
        currentView!.setBounds(rectangle);
        currentView!.setAutoResize({
            width: true,
            height: true,
            horizontal: true,
            vertical: true,
        });
    }
});
