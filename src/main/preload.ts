import { contextBridge, ipcRenderer } from 'electron';

const { exec } = require('child_process');
const fs = require('fs');

contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: {
    sendSync(channel: string, ...args): any {
      console.log('channel', channel);
      exec('npm run jscpd').on('exit', () => {
        const content = fs.readFileSync(
          '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/index.html',
          'utf-8'
        );
        console.log('File content : ', content);
      });
    },
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
