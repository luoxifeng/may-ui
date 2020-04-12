import { Plugin, Compiler, compilation } from 'webpack';

class Demo implements Plugin {
  // constructor() {

  // }

  apply(compiler: Compiler) {
    console.log('进入插件---------------');

    compiler.hooks.compilation.tap('cc', (compilation, cb) => {

      console.log('进入编译-----');

      compilation.hooks.buildModule.tap('dd', module => {
        if (global.jj && global.jj < 3) {
          console.log('进入编译buildModule', module.index, module);
        }
        // if (module._source) {
        //   console.log(Object.keys(compilation.assets), module);
        //   throw new Error('dddd');
        // }
      });

    });

  }
}

module.exports = Demo;
