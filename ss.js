const chalk = require('chalk');
global.jj = 0;
module.exports = content => {
  global.jj++;

  console.log(chalk.red('+++++++++++++++'));
  return content;
};
