// import R from 'ramda';
import { resolve } from 'path';

/**
 *
 */
export const resolvableExtensions = () => {
  return ['.js', '.jsx', '.ts', '.tsx'];
};

/**
 * @param {*} args
 */
export const onCreateWebpackConfig = ({ actions }) => {
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
