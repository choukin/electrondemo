const BrowserWindow = require('electron').remote.BrowserWindow
const path = require('path')

const newWindowBtn = document.getElementById('openWindow')

newWindowBtn.addEventListener('click', function (event) {
  openWindow('../sections/monitor/monitor.html')
})

document.getElementById('openhashWindow').addEventListener('click',function(){
  openWindow('../sections/hash/index.html')
})

const openWindow = (windowpath)=>{
  const modalPath = path.join('file://', __dirname, windowpath)
  let win = new BrowserWindow({ width: 400, height: 320 })
  win.on('close', function () { win = null })
  win.loadURL(modalPath)
  win.show()
  // 打开开发者工具
   win.webContents.openDevTools()
}