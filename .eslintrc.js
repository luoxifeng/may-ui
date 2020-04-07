const eslintConfig = {
  extends: [
    'airbnb',
    // 'prettier',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    // 'prettier/react',
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: '16.9',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react', 
    'babel', 
    'jest', 
    '@typescript-eslint', 
    'react-hooks', 
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
      },
    },
  ],
  rules: {
    /**
     * eslint 配置
     * note: 包含部分 react 组件写法，这些写法一般和js是公用的，而不是 jsx 属性等配置 
     * jsx 写法里面的标签属性等规则配置在 eslint-plugin-react 里面
     * 一般都是以 react/xxxx-yyyy 这种形式出现
     */
    // camelcase: 0,

    // 允许使用 i++ 运算符
    "no-plusplus": 0,

    // 允许开发环境使用 console api
    "no-console": process.env.NODE_ENV === 'production' ? 1 : 0,

    // 不强制箭头函数体{} 的使用限制
    "arrow-body-style": 0,

    // 不强制逗号的使用
    "comma-dangle": 0,

    // 允许单参数箭头函数，不使用()
    "arrow-parens": 0,

    /**
     * import 相关
     */
    "import/no-extraneous-dependencies": 0,

    "import/prefer-default-export": 0,

    /**
     * react 配置相关
     */
    // 允许匿名的 react 函数组件
    "react/display-name": 0,

    // 允许 jsx 语法在配置的文件后缀里面使用
    "react/jsx-filename-extension": [1, {
      "extensions": [".js", ".jsx", "ts", "tsx"]
    }],

    
  },
  globals: {
  },
};

module.exports = eslintConfig;