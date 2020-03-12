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



window.saveDbConfig = function ( e ,arg) {
  // this.console.log('saveDbConfig' + age);
  //console.log(ipcRenderer.sendSync('saveDbConfig',age));
  let temp = {
    "name" :"name3",
    "host" : "host3",
    "dbid" : "dbid3",
    "dbpw" : "dbpw3",
    "userid" : "userid3",
    "userpw" : "pw1234"
  }
  return ipcRenderer.sendSync('saveDbConfig',temp);
}
