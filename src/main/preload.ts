import { contextBridge, ipcRenderer } from 'electron';
// const { exec } = require('child_process');
// const fs = require('fs');
// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
// contextBridge.exposeInMainWorld('api', {
//   send: (channel, data) => {
//     // whitelist channels
//     let validChannels = ['toMain'];
//     if (validChannels.includes(channel)) {
//       ipcRenderer.send(channel, data);
//     }
//   },
//   receive: (channel, func) => {
//     let validChannels = ['fromMain'];
//     if (validChannels.includes(channel)) {
//       // Deliberately strip event as it includes `sender`
//       ipcRenderer.on(channel, (event, ...args) => func(...args));
//     }
//   },
// });

contextBridge.exposeInMainWorld('electron', {
  store: {
    get(val) {
      return ipcRenderer.sendSync('electron-store-get', val);
    },
    set(property, val) {
      ipcRenderer.send('electron-store-set', property, val);
    },
  },
  ipcRenderer: {
    invoke(channel: string, ...args): any {
      console.log('channel', channel);
      // exec('npm run jscpd').on('exit', () => {
      //   const content = fs.readFileSync(
      //     '/Users/utilisateur/Documents/perso-gilles-fabre/refacto/reports/jscpd/html/index.html',
      //     'utf-8'
      //   );
      //   console.log('File content : ', content);
      //   return content;
      // });
      return 'coming from backend !';
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
