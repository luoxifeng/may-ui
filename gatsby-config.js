/**
 * 增加 gatsby 配置
 */

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        jsxPragma: 'jsx', // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        // // Override the file regex for SASS
        // sassRuleTest: /\.global\.s(a|c)ss$/,
        // // Override the file regex for CSS modules
        // sassRuleModulesTest: /\.mod\.s(a|c)ss$/,
      },
    },
  ],
};
