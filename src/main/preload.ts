import { contextBridge, ipcRenderer } from 'electron';
import { execSync } from 'child_process';
import * as fs from 'fs';


contextBridge.exposeInMainWorld('electron', {
    store: {
        get(property: string) {
            return ipcRenderer.sendSync('get', property);
        },
        jscpd() {
            console.log('LAUNCH JSCPD');
            const jscpdJson = fs.readFileSync('/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/jscpd-report.json', 'utf8');
            console.log('JSCPD JSON parse', JSON.parse(jscpdJson))
            return JSON.parse(jscpdJson);
        },
        run(script: string) {
            console.log('RUN SCRIPT', script)
            execSync(`npm run ${script}`);
            console.log('END OF SCRIPT', script)
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
