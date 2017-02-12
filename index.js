/**
 * Created by texpe on 12/02/2017.
 */

const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

let win;

createWindow = () => {
	win = new BrowserWindow({
		width: 1366,
		height: 768,
		title: 'mTunes',
		frame: false
	});

	win.loadURL(url.format({
		pathname: path.join(__dirname, 'public', 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	win.webContents.openDevTools();

	win.on('closed', () => {
		win = null;
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if(process.platform !== 'darwin')
		app.quit();
});

app.on('activate', () => {
	if(!win) createWindow();
});