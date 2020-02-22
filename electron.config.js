const electron = require('electron');

const pkg = require('./package.json');

const { app, screen, BrowserWindow, Menu } = electron;

// Check if dev or packaged app
const isEnvSet = 'ELECTRON_IS_DEV' in process.env;
const getFromEnv = parseInt(process.env.ELECTRON_IS_DEV, 10) === 1;
const ELECTRON_ENV_DEV = isEnvSet ? getFromEnv : !app.isPackaged;

let mainWindow;
let menuDefinitions = [];

const SOURCE_PATH_DEV = 'http://localhost:3000';
const SOURCE_PATH_PROD = `file://${__dirname}/build/index.html`;

const mainWindowSource = ELECTRON_ENV_DEV ? SOURCE_PATH_DEV : SOURCE_PATH_PROD;

if (process.platform === 'darwin') {
	menuDefinitions.push(
		{
			label: pkg.build.productName,
			submenu: [
				{ role: 'about' },
				{ type: 'separator' },
				{
					label: 'Preferences',
					accelerator: 'CommandOrControl+,',
					click: () => {
						if (mainWindow) {
							mainWindow.webContents.send('open-preferences');
						}
					},
				},
				{ type: 'separator' },
				{
					label: 'Quit',
					accelerator: 'Command+Q',
					click: () => app.exit(),
				},
			],
		},
		{ role: 'editMenu' },
		{
			label: 'View',
			submenu: [
				{ role: 'resetzoom' },
				{ role: 'zoomin' },
				{ role: 'zoomout' },
				{ type: 'separator' },
				{ role: 'togglefullscreen' },
			],
		},
		{ role: 'windowMenu' }
	);
}

const menu = Menu.buildFromTemplate(menuDefinitions);

function createWindow() {
	if (ELECTRON_ENV_DEV) {
		const {
			default: installExtension,
			REACT_DEVELOPER_TOOLS,
			REDUX_DEVTOOLS,
		} = require('electron-devtools-installer');

		installExtension(REACT_DEVELOPER_TOOLS)
			.then(name => console.log(`Added Extension:  ${name}`))
			.catch(err => console.log('An error occurred: ', err));

		installExtension(REDUX_DEVTOOLS)
			.then(name => console.log(`Added Extension:  ${name}`))
			.catch(err => console.log('An error occurred: ', err));
	}

	let { width, height } = screen.getPrimaryDisplay().workAreaSize;

	width = Math.ceil(width * 0.6);
	height = Math.ceil(height * 0.75);

	mainWindow = new BrowserWindow({
		width,
		height,
		minWidth: Math.ceil(width * 0.4),
		minHeight: Math.ceil(height * 0.4),
		center: true,
		titleBarStyle: 'hiddenInset',
		backgroundColor: 'hsl(235, 10, 7)',
		webPreferences: {
			nodeIntegration: true,
		},
	});

	mainWindow.loadURL(mainWindowSource);

	mainWindow.setMenu(null);

	if (ELECTRON_ENV_DEV) mainWindow.webContents.openDevTools();

	mainWindow.on('close', event => {
		if (process.platform === 'darwin') {
			event.preventDefault();

			if (mainWindow.isFullScreen()) {
				mainWindow.on('leave-full-screen', () => mainWindow.hide());

				mainWindow.setFullScreen(false);
			} else {
				mainWindow.hide();
			}
		}
	});

	mainWindow.on('closed', () => {
		if (process.platform !== 'darwin') {
			mainWindow = null;
		}
	});

	Menu.setApplicationMenu(menu);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	} else {
		mainWindow.show();
	}
});
