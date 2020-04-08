// import R from 'ramda';
const { resolve } = require('path');

const _ = module.exports;

/**
 * @param {*} args
 * 注入 webpack 配置
 */
_.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ['node_modules'],
      alias: {
        'may-ui': resolve(__dirname, '../components'),
        site: resolve(__dirname, '../site')
      }
    }
  });
};
