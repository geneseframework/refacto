/* eslint import/prefer-default-export: off, import/no-mutable-exports: off */
import { URL } from 'url';
import path from 'path';
import { BrowserView, BrowserWindow } from 'electron';

export function removeBrowserViews(mainWindow: BrowserWindow): void {
    const views = mainWindow?.getBrowserViews() ?? [];
    for (const view of views) {
        mainWindow?.removeBrowserView(view);
    }
}

export async function createBrowserView(filePath: string): Promise<BrowserView> {
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
    return `file://${path.resolve(__dirname, '../renderer/', htmlFileName)}`;
  };
}

