// import R from 'ramda';
const { resolve } = require('path');
// const Demo = require('../webpack/demo');

const _ = module.exports;


/**
 * @param {*} args
 * 注入 webpack 配置
 */
_.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    // module: {
    //   rules: [
    //     {
    //       enforce: "pre",
    //       test: /\.mdx?$/,
    //       use: [resolve(__dirname, '../ss')]
    //     }
    //   ],
    // },
    resolve: {
      modules: ['node_modules'],
      alias: {
        'may-ui': resolve(__dirname, '../components'),
        site: resolve(__dirname, '../site')
      }
    },
    plugins: [
    ]
  });
};
