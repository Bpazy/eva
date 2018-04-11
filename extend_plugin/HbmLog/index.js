const hbm = ({query}) => {
  const child_process = require('child_process');

  const openUrl = `http://hbm.easy-hi.cn/blackcat-detail/log/${query}`
  let cmd
  if (process.platform == 'wind32') {
    cmd = 'start "%ProgramFiles%\Internet Explorer\iexplore.exe"';
  } else if (process.platform == 'linux') {
    cmd = 'xdg-open';
  } else if (process.platform == 'darwin') {
    cmd = 'open';
  }
  child_process.exec(`${cmd} "${openUrl}"`);
}
module.exports = hbm