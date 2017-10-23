const electron  = require('electron');
const {app, BrowserWindow} = electron;


app.on('ready', ()=> {
    let win = new BrowserWindow({width: 1200, height:1000, backgroundColor: '#C0C0C0'});
    win.loadURL('file://' + __dirname + '/MGC-DSI/index.html');
    
    // Cleanup when window is closed
    win.on('closed', function() {
        win = null;
    });
    
    //Enable chrome developer tools when electron app is ran
    //win.webContents.openDevTools()
    
    // add show: false to win
    //win.once('ready-to-show', () => {
     //win.show()
 //})
    
   
});

// Quit when all windows are closed
app.on('window-all-closed', function() {  
    app.quit();
});