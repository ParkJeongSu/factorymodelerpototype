// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})


const { ipcRenderer } = require('electron');


window.dbid;
window.dbpw;
window.host;
/* Db Config */
window.getDbConfig = function () {
  return ipcRenderer.sendSync('getDbConfig');
}
window.saveDbConfig = function (action) {
  return ipcRenderer.sendSync('saveDbConfig',action);
}

window.deleteDbConfig = function (action) {
  return ipcRenderer.sendSync('deleteDbConfig',action);
}
/* Db Config */

/* To Do List */
window.getTodoList = function () {
  return ipcRenderer.sendSync('getTodoList');
}
window.createTodoList = function(action){
  return ipcRenderer.sendSync('createTodoList',action);
}
window.deleteTodoList = function (action) {
  return ipcRenderer.sendSync('deleteTodoList',action);
}
window.checkedTodoList = function (action) {
  return ipcRenderer.sendSync('checkedTodoList',action);
}
/* To Do List */

/* Db connection */
window.dbConnectTest = function (action) {
  return ipcRenderer.sendSync('dbConnectTest',action);
}
/* Db connection */

window.getmenuList = function (action) {
  action.dbid = window.dbid;
  action.dbpw = window.dbpw
  action.host = window.host

  return ipcRenderer.sendSync('getmenuList',action);
}

window.getFM_METADATA = function (action) {
  action.dbid = window.dbid;
  action.dbpw = window.dbpw
  action.host = window.host

  return ipcRenderer.sendSync('getFM_METADATA',action);
}



window.getData = function (action) {
  action.dbid = window.dbid;
  action.dbpw = window.dbpw
  action.host = window.host

  return ipcRenderer.sendSync('getData',action);
}