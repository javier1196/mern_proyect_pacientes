const { app, BrowserWindow } = require('electron');
const path = require('path');
const isDev = require('electron-is-dev');

let appWindow;

function crearVentana() {
    appWindow = new BrowserWindow({
        // No son obligatorios
        width: 1000,
        height: 700,
        minWidth: 800,
        minHeight: 600,
        center: true,
        show: false,
        icon: 'icon-png'
    });


    appWindow.loadURL(
        isDev
            ? 'http://localhost:3000'
            : 'file://${path.join(__dirname, "../build/index.html")}'
    )

    // Cuando la app está lista para verse
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    })

    app.on('activate', () => {
        if (appWindow === null) {
            crearVentana();
        }
    })
}

app.on('ready', crearVentana);