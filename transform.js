const globby = require('globby');
const { resolve } = require('path');
const R = require('ramda');
const { from, of } = require('rxjs');
const { map, mergeMap } = require('rxjs/operators');
const fs = require('fs-extra');

// let index = 0;
from(globby('./**/*.mdx'))
  .pipe(
    map(R.map(path => resolve(__dirname, path))),
    mergeMap(paths => {
      return from(paths).pipe(
        mergeMap(path => fs.readFile(path))
      );
    })
  )
  .subscribe(dd => {
    console.log(dd.toString());
  });
