const { app, BrowserWindow } = require('electron');

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

    // Cuando la aplicación es cerrada
    appWindow.on('closed', () => {
        appWindow = null;
    });

    // cargar html
    appWindow.loadFile('./index.html');

    // Cuando la app esté lista, mostrar ventana
    appWindow.once('ready-to-show', () => {
        appWindow.show();
    })
}

app.on('ready', crearVentana);