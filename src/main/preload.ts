import { contextBridge, ipcRenderer } from 'electron';
import { execSync } from 'child_process';
import { getJscpdReport } from '../backend/jscpd/functions/GetJscpdReport';
import { getCoverageReport } from '../backend/jest/functions/GetJestReport';
import { getGeneseReport } from '../backend/genese/functions/GetGeneseReport';
import { Project } from '../shared/interfaces/Project.interface';

const blPath = '/Users/utilisateur/Documents/projects/bleu-libellule';
const testPath =
    '/Users/utilisateur/Documents/perso-gilles-fabre/front-end-assessment-v1/src';
export const PATHS_PRELOAD_PROCESS = {
    folderToAnalyze: testPath,
    root: '/Users/utilisateur/Documents/perso-gilles-fabre/refacto',
};

contextBridge.exposeInMainWorld('electron', {
    store: {
        setBrowserView(route: string) {
            ipcRenderer.send('setBrowserView', route);
        },
        get(property: string) {
            return ipcRenderer.sendSync('get', property);
        },
        // jscpd() {
        //     const jscpdJson = fs.readFileSync(
        //         '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/jscpd-report.json',
        //         'utf8'
        //     );
        //     return JSON.parse(jscpdJson);
        // },
        getGeneseReport(project: Project) {
            return getGeneseReport(project);
        },
        getJestReport() {
            return getCoverageReport();
        },
        getJscpdReport() {
            return getJscpdReport();
        },
        removeBrowserViews() {
            ipcRenderer.send('removeBrowserViews');
        },
        runJest() {
            // TODO: implement
            const cmd = `npm run jest`;
        },
        runJscpd() {
            const cmd = `npm run jscpd ${PATHS_PRELOAD_PROCESS.folderToAnalyze} -o reports/jscpd`;
            execSync(cmd);
        },
        run(script: string) {
            execSync(`npm run ${script}`);
        },
        set(property: string, val: any) {
            ipcRenderer.send('set', property, val);
        },
    },
    ipcRenderer: {
        myPing() {
            ipcRenderer.send('ipc-example', 'ping');
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        on(channel: string, func: (...args: any[]) => void) {
            const validChannels = ['ipc-example'];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`
                ipcRenderer.on(channel, (_event, ...args) => func(...args));
            }
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        once(channel: string, func: (...args: any[]) => void) {
            const validChannels = ['ipc-example'];
            if (validChannels.includes(channel)) {
                // Deliberately strip event as it includes `sender`
                ipcRenderer.once(channel, (_event, ...args) => func(...args));
            }
        },
    },
});
