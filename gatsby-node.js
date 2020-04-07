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
      // ⚠ Note the '..' in the path because the docz gatsby project lives in the `.docz` directory
      modules: ['node_modules'],
      alias: {
        'may-ui': resolve(__dirname, '../components')
      }
    }
  });
};
