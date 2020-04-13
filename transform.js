const globby = require('globby');
const { resolve } = require('path');
const R = require('ramda');
const { from } = require('rxjs');
const { map, mergeMap } = require('rxjs/operators');
const fs = require('fs-extra');

from(globby('./**/*.mdx'))
  .pipe(
    /**
     * 1.获取真实路径
     */
    map(R.map(path => resolve(__dirname, path))),

    /**
     * 2.进行文件内容转换并写入新文件
     */
    mergeMap(paths => {
      return from(paths).pipe(
        mergeMap(async path => {
          const content = await fs.readFile(path);
          const targetPath = path.replace(/components/, '.preview');
          await fs.ensureFile(targetPath);
          return fs.writeFile(targetPath, content);
        })
      );
    })
  )
  .subscribe(dd => {
    // console.log(dd.toString());
  });
