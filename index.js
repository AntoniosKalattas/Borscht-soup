const {app, BrowserWindow, electron, ipcMain} = require('electron');
//const mainWindow=null;

ipcMain.on("msg", (event,data)=>{
    console.log(data);
})

function createWindow(){
    mainWindow = new BrowserWindow({
        width:1280,
        height:720,
        title:'G Tehniki Sholi',
        frame: true,
        icon: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    mainWindow.loadURL(`file://${__dirname}//main.html`);
}
app.on('ready', createWindow);