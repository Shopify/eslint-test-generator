import path from 'path';

import eslintTestGenerator from '../src/';

console.log(eslintTestGenerator({
  template: 'qunit',
  paths: [
    'test/test-src-to-lint/**/*.js',
  ],
  optsEslint: {
    configFile: path.resolve(__dirname, '..', '.eslintrc.json'),
    ignore: false
  },
}));
