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


window.getDbConfig = function () {
  return ipcRenderer.sendSync('getDbConfig');
}

window.getTodoList = function () {
  return ipcRenderer.sendSync('getTodoList');
}

window.saveDbConfig = function (action) {
  return ipcRenderer.sendSync('saveDbConfig',action);
}


window.deleteDbConfig = function (action) {
  return ipcRenderer.sendSync('deleteDbConfig',action);
}

window.createTodoList = function(action){
  return ipcRenderer.sendSync('createTodoList',action);
}

window.deleteTodoList = function (action) {
  console.log('preload.js');
  return ipcRenderer.sendSync('deleteTodoList',action);
}
window.checkedTodoList = function (action) {
  console.log('preload.js');
  return ipcRenderer.sendSync('checkedTodoList',action);
}