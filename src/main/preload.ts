import { contextBridge, ipcRenderer } from 'electron';
import { execSync } from 'child_process';
import * as fs from 'fs';
const blPath = '/Users/utilisateur/Documents/projects/bleu-libellule';
const testPath = '/Users/utilisateur/Documents/perso-gilles-fabre/front-end-assessment-v1/src';
export const PATHS_PRELOAD_PROCESS = {
    folderToAnalyze: testPath,
    root: '/Users/utilisateur/Documents/perso-gilles-fabre/refacto',
}


contextBridge.exposeInMainWorld('electron', {
    store: {
        setBrowserView(route: string) {
            ipcRenderer.send('setBrowserView', route);
        },
        get(property: string) {
            return ipcRenderer.sendSync('get', property);
        },
        jscpd() {
            const jscpdJson = fs.readFileSync('/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/jscpd-report.json', 'utf8');
            console.log('JSCPD report', JSON.parse(jscpdJson))
            return JSON.parse(jscpdJson);
        },
        getJscpdReport() {
            let jscpdReport = undefined;
            const pathReport = '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/jscpd-report.json';
            if (fs.existsSync(pathReport)) {
                jscpdReport = JSON.parse(fs.readFileSync(pathReport, 'utf8'));
            }
            return jscpdReport;
        },
        removeBrowserViews() {
            ipcRenderer.send('removeBrowserViews');
        },
        runJscpd() {
            const cmd = `npm run jscpd ${PATHS_PRELOAD_PROCESS.folderToAnalyze} -o reports/jscpd`;
            console.log('cmd', cmd)
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
