import { contextBridge, ipcRenderer } from 'electron';
import { execSync } from 'child_process';
import * as fs from 'fs';


contextBridge.exposeInMainWorld('electron', {
    store: {
        displayCodeCoverageWebview() {
            ipcRenderer.send('displayCodeCoverageWebview');
        },
        displayCodeDuplicationWebview() {
            ipcRenderer.send('displayCodeDuplicationWebview');
        },
        get(property: string) {
            return ipcRenderer.sendSync('get', property);
        },
        jscpd() {
            const jscpdJson = fs.readFileSync('/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/jscpd-report.json', 'utf8');
            console.log('JSCPD report', JSON.parse(jscpdJson))
            return JSON.parse(jscpdJson);
        },
        removeBrowserViews() {
            ipcRenderer.send('removeBrowserViews');
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
