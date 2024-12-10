// import App from './src/App';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  // win.loadFile(App)
  win.loadURL("http://localhost:3000/");
};

app.whenReady().then(() => {
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
