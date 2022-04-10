import { contextBridge, ipcRenderer } from 'electron';
import { execSync } from 'child_process';
import * as fs from 'fs';


contextBridge.exposeInMainWorld('electron', {
    store: {
        setBrowserView(route: string) {
            ipcRenderer.send('setBrowserView', route);
        },
        get(property: string) {
            return ipcRenderer.sendSync('get', property);
        },
        getJscpdReport() {
            let jscpdReport = undefined;
            const pathReport = '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/jscpd-report.json';
            if (fs.existsSync(pathReport)) {
                const jscpdJson = fs.readFileSync(pathReport, 'utf8');
                jscpdReport = JSON.parse(jscpdJson);
            }
            console.log('JSCPD report', jscpdReport)
            return jscpdReport;
        },
        removeBrowserViews() {
            ipcRenderer.send('removeBrowserViews');
        },
        runJscpd() {
            const path = '/Users/utilisateur/Documents/perso-gilles-fabre/front-end-assessment-v1/src';
            const cmd = `jscpd ${path} -o reports/jscpd`;
            console.log('cmd', cmd)
            // execSync(cmd);
            execSync(`npm run jscpd`);
            // execSync(`npm run ${script}`);
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
