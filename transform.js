const globby = require('globby');
const { resolve } = require('path');
const R = require('ramda');
const { from } = require('rxjs');
const { map, mergeMap } = require('rxjs/operators');
const fs = require('fs-extra');

from(globby('./**/*.mdx'))
  .pipe(
    map(R.map(path => resolve(__dirname, path))),
    mergeMap((paths) => {
      return paths.map(path => {
        return from(fs.readFile(path)).pipe(
          mergeMap(content => {
            path.replace(/demo/, '.preview');
          })
        );
      });
    })
  )
  .subscribe((dd) => {
    console.log(dd);
  });
