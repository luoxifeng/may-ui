"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Demo = /** @class */ (function () {
    function Demo() {
    }
    // constructor() {
    // }
    Demo.prototype.apply = function (compiler) {
        console.log('进入插件---------------');
        compiler.hooks.compilation.tap('cc', function (compilation, cb) {
            console.log('进入编译-----');
            compilation.hooks.buildModule.tap('dd', function (module) {
                if (global.jj && global.jj === 4) {
                    global.jj++;
                    console.log('进入编译buildModule', module.index, module);
                }
                // if (module._source) {
                //   console.log(Object.keys(compilation.assets), module);
                //   throw new Error('dddd');
                // }
            });
        });
    };
    return Demo;
}());
module.exports = Demo;
