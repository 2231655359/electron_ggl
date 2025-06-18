const { app, BrowserWindow } = require("electron")
var path = require("path")
app.on("ready", function () {
  hm_createWindow()
})
app.on('window-all-closed', () => {
  app.quit()
})
function hm_createWindow() {
  let win = new BrowserWindow({
    width: 400,
    height: 600,
    title: "刮刮乐商店"
  })
  win.setMenu(null)

  win.loadURL(path.join(__dirname, "Canvas_刮刮乐.html"))


}

// console.log("123");
