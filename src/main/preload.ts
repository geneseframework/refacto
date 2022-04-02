import { contextBridge, ipcRenderer } from 'electron';
import { execSync } from 'child_process';

contextBridge.exposeInMainWorld('electron', {
    store: {
        get(val: any) {
            return ipcRenderer.sendSync('get', val);
        },
        jscpd() {
            console.log('LAUNCH JSCPD');
            const jscpdJson = require('../../reports/jscpd/html/jscpd-report.json');
            console.log('JSCPD JSON', jscpdJson)
            // execSync('npm run jscpd');
            // const cp = JSON.parse(jscpdJson);
            // console.log('CP = ', cp)
            return jscpdJson;
            // return cp;
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
